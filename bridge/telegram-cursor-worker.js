/**
 * Minimal Telegram → Cursor Automations bridge (Cloudflare Worker).
 *
 * Bind secrets in the Worker:
 *   TG_BOT_TOKEN, TG_CHAT_ID
 *   CURSOR_SCOUT_WEBHOOK_URL, CURSOR_SCOUT_WEBHOOK_KEY
 *   CURSOR_SEND_WEBHOOK_URL, CURSOR_SEND_WEBHOOK_KEY  (optional; /digest can send raw latest.md)
 *
 * Set Telegram webhook:
 *   curl "https://api.telegram.org/bot$TG_BOT_TOKEN/setWebhook?url=https://YOUR_WORKER.workers.dev"
 *
 * BotFather: /setjoingroups Disable if only personal DM.
 */
const ALLOWED = new Set(["/scout", "/digest", "/start", "/help"]);

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("ok");
    }
    const update = await request.json();
    const msg = update.message || update.edited_message;
    if (!msg?.text) return json({ ok: true });

    const chatId = String(msg.chat.id);
    if (chatId !== String(env.TG_CHAT_ID)) {
      // Ignore other chats; optionally leave group:
      // await tg(env, "leaveChat", { chat_id: chatId });
      return json({ ok: true, ignored: true });
    }

    const text = msg.text.trim().split(/\s+/)[0];
    if (!ALLOWED.has(text)) {
      await reply(env, chatId, "Команды: /scout — поиск, /digest — прислать latest.md");
      return json({ ok: true });
    }

    if (text === "/start" || text === "/help") {
      await reply(env, chatId, "Команды:\n/scout — запуск Weekly GitHub Scout\n/digest — прислать текущий latest.md");
      return json({ ok: true });
    }

    if (text === "/scout") {
      await cursorWebhook(env.CURSOR_SCOUT_WEBHOOK_URL, env.CURSOR_SCOUT_WEBHOOK_KEY, {
        prompt:
          "Режим scout: выполни automations/SCOUT_PROMPT.md и PROMPT.md. После merge кратко статус в Telegram.",
      });
      await reply(env, chatId, "Запустил scout. Обычно 30–90 мин. Потом /digest или жди вс 11:00.");
      return json({ ok: true });
    }

    if (text === "/digest") {
      if (env.CURSOR_SEND_WEBHOOK_URL && env.CURSOR_SEND_WEBHOOK_KEY) {
        await cursorWebhook(env.CURSOR_SEND_WEBHOOK_URL, env.CURSOR_SEND_WEBHOOK_KEY, {
          prompt: "Режим send: выполни automations/SEND_PROMPT.md. Поиск не запускай.",
        });
        await reply(env, chatId, "Запустил send-автоматизацию.");
      } else {
        const raw = await fetch(
          "https://raw.githubusercontent.com/zoloftstep-tech/github-repo-scout/main/latest.md"
        );
        const body = await raw.text();
        await sendChunks(env, chatId, body);
      }
      return json({ ok: true });
    }

    return json({ ok: true });
  },
};

function json(obj) {
  return new Response(JSON.stringify(obj), {
    headers: { "content-type": "application/json" },
  });
}

async function reply(env, chatId, text) {
  return tg(env, "sendMessage", {
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  });
}

async function sendChunks(env, chatId, text) {
  const limit = 3500;
  const chunks = [];
  for (let i = 0; i < text.length; i += limit) chunks.push(text.slice(i, i + limit));
  for (let i = 0; i < chunks.length; i++) {
    const prefix = chunks.length > 1 ? `(${i + 1}/${chunks.length})\n` : "";
    await tg(env, "sendMessage", {
      chat_id: chatId,
      text: prefix + chunks[i],
      disable_web_page_preview: true,
    });
  }
}

async function tg(env, method, payload) {
  const res = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function cursorWebhook(url, key, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Cursor webhook ${res.status}: ${t}`);
  }
}
