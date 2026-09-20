/**
 * Telegram group bridge → Cursor Automations + digest buttons / pin-edit.
 *
 * Secrets:
 *   TG_BOT_TOKEN, TG_CHAT_ID
 *   CURSOR_SCOUT_WEBHOOK_URL, CURSOR_SCOUT_WEBHOOK_KEY
 *   CURSOR_SEND_WEBHOOK_URL, CURSOR_SEND_WEBHOOK_KEY  (optional)
 *
 * Bot needs: send messages, pin messages (admin in group).
 * setWebhook → this worker URL.
 * BotFather: Privacy Mode ON ok; Groups enabled.
 */
const RAW_BASE =
  "https://raw.githubusercontent.com/zoloftstep-tech/github-repo-scout/main";
const SEP = "━━━━━━━━━━━━━━━━━━━━";
const PIN_MARK = "📌 Подборка";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("ok");

    let update;
    try {
      update = await request.json();
    } catch {
      return json({ ok: false, error: "bad json" });
    }

    try {
      if (update.callback_query) {
        await onCallback(env, update.callback_query);
        return json({ ok: true });
      }

      const msg = update.message || update.edited_message;
      if (!msg?.text) return json({ ok: true });

      const chatId = String(msg.chat.id);
      if (chatId !== String(env.TG_CHAT_ID)) {
        return json({ ok: true, ignored: true });
      }

      const text = stripBotSuffix(msg.text.trim().split(/\s+/)[0]);

      if (text === "/start" || text === "/help") {
        await reply(
          env,
          chatId,
          "Команды:\n/run — scout + дайджест после готовности\n/digest — прислать текущий дайджест с кнопками\n/scout — только поиск (как /run)"
        );
        return json({ ok: true });
      }

      if (text === "/run" || text === "/scout") {
        await cursorWebhook(env.CURSOR_SCOUT_WEBHOOK_URL, env.CURSOR_SCOUT_WEBHOOK_KEY, {
          prompt:
            "Режим scout: выполни automations/SCOUT_PROMPT.md и PROMPT.md. После merge в main сразу: bash scripts/send_latest_to_telegram.sh (полный дайджест с кнопками в TG_CHAT_ID).",
        });
        await reply(
          env,
          chatId,
          "Запустил scout. Обычно 30–90 мин — потом дайджест сам придёт в эту группу. Или /digest, когда уже на main."
        );
        return json({ ok: true });
      }

      if (text === "/digest") {
        if (env.CURSOR_SEND_WEBHOOK_URL && env.CURSOR_SEND_WEBHOOK_KEY) {
          await cursorWebhook(env.CURSOR_SEND_WEBHOOK_URL, env.CURSOR_SEND_WEBHOOK_KEY, {
            prompt: "Режим send: выполни automations/SEND_PROMPT.md. Поиск не запускай.",
          });
          await reply(env, chatId, "Запустил send — дайджест с кнопками сейчас придёт.");
        } else {
          await postDigestFromGithub(env, chatId);
        }
        return json({ ok: true });
      }

      // ignore plain group chatter
      return json({ ok: true });
    } catch (e) {
      const chatId = String(env.TG_CHAT_ID || "");
      if (chatId) {
        await reply(env, chatId, `Ошибка бота: ${String(e.message || e).slice(0, 300)}`);
      }
      return json({ ok: false, error: String(e.message || e) });
    }
  },
};

function stripBotSuffix(cmd) {
  return cmd.split("@")[0];
}

async function onCallback(env, cq) {
  const chatId = String(cq.message?.chat?.id || "");
  if (chatId !== String(env.TG_CHAT_ID)) {
    await tg(env, "answerCallbackQuery", { callback_query_id: cq.id });
    return;
  }

  const data = cq.data || "";
  const m = /^pick:(\d+)$/.exec(data);
  if (!m) {
    await tg(env, "answerCallbackQuery", {
      callback_query_id: cq.id,
      text: "Неизвестная кнопка",
      show_alert: false,
    });
    return;
  }
  const n = Number(m[1]);
  const pack = await fetchCards();
  const card = (pack.repos || []).find((r) => Number(r.n) === n);
  if (!card) {
    await tg(env, "answerCallbackQuery", {
      callback_query_id: cq.id,
      text: `#${n} нет в текущем дайджесте`,
      show_alert: true,
    });
    return;
  }

  const block = formatCard(card);
  const header = `${PIN_MARK} из дайджеста ${pack.date || ""}`.trim();
  const chat = await tg(env, "getChat", { chat_id: chatId });
  const pinned = chat.result?.pinned_message;
  const pinnedText = pinned?.text || "";
  const canReuse =
    pinned &&
    pinned.from?.is_bot &&
    pinnedText.startsWith(PIN_MARK) &&
    (!pack.date || pinnedText.includes(pack.date));

  if (canReuse) {
    if (pinnedText.includes(`#${n}  ·`) || pinnedText.includes(`#${n}\n`)) {
      await tg(env, "answerCallbackQuery", {
        callback_query_id: cq.id,
        text: `#${n} уже в подборке`,
      });
      return;
    }
    const next = `${pinnedText}\n\n${block}`;
    if (next.length > 4000) {
      await tg(env, "answerCallbackQuery", {
        callback_query_id: cq.id,
        text: "Подборка переполнена (лимит TG). Сними закреп и начни заново.",
        show_alert: true,
      });
      return;
    }
    await tg(env, "editMessageText", {
      chat_id: chatId,
      message_id: pinned.message_id,
      text: next,
      disable_web_page_preview: true,
    });
    await tg(env, "answerCallbackQuery", {
      callback_query_id: cq.id,
      text: `Добавил #${n} в закреп`,
    });
    return;
  }

  const text = `${header}\n\n${block}`;
  const sent = await tg(env, "sendMessage", {
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  });
  const mid = sent.result?.message_id;
  if (mid) {
    await tg(env, "pinChatMessage", {
      chat_id: chatId,
      message_id: mid,
      disable_notification: true,
    });
  }
  await tg(env, "answerCallbackQuery", {
    callback_query_id: cq.id,
    text: `Закрепил #${n}`,
  });
}

async function postDigestFromGithub(env, chatId) {
  const pack = await fetchCards();
  if (!pack.repos?.length) {
    const md = await (await fetch(`${RAW_BASE}/latest.md`)).text();
    await sendChunks(env, chatId, md);
    return;
  }
  const parts = [
    `📋 Дайджест репозиториев — ${pack.date}\nРекомендовано: ${pack.repos.length}\nЖми номера ниже → подборка в закрепе.`,
  ];
  for (const c of pack.repos) parts.push(formatCard(c));
  const chunks = chunkParts(parts, 3500);
  for (let i = 0; i < chunks.length; i++) {
    const prefix = chunks.length > 1 ? `(${i + 1}/${chunks.length})\n` : "";
    await tg(env, "sendMessage", {
      chat_id: chatId,
      text: prefix + chunks[i],
      disable_web_page_preview: true,
    });
  }
  const rows = [];
  let row = [];
  for (const c of pack.repos) {
    row.push({ text: String(c.n), callback_data: `pick:${c.n}` });
    if (row.length === 5) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length) rows.push(row);
  await tg(env, "sendMessage", {
    chat_id: chatId,
    text: `🔢 Выбери репозитории (дайджест ${pack.date}). Повторное нажатие дописывает в закреп.`,
    reply_markup: { inline_keyboard: rows },
    disable_web_page_preview: true,
  });
}

async function fetchCards() {
  const res = await fetch(`${RAW_BASE}/digest_cards.json`);
  if (res.ok) {
    const data = await res.json();
    if (data?.repos?.length) return data;
  }
  const md = await (await fetch(`${RAW_BASE}/latest.md`)).text();
  return parseMd(md);
}

function formatCard(c) {
  const days = c.updated_days;
  const daysS = days != null ? ` · обновлён ${days} дн. назад` : "";
  const lines = [
    SEP,
    `#${c.n}  ·  ${c.category || "—"}`,
    c.full_name,
    `⭐ ${c.stars || 0}${daysS}`,
    c.url,
    "",
    "💡 Что это",
    c.what || "—",
    "",
    "🎯 Зачем",
    c.why || "—",
  ];
  const cases = c.cases || [];
  if (cases.length) {
    lines.push("", "🛠 Как применить");
    cases.forEach((caseItem, i) => {
      if (typeof caseItem === "string") {
        lines.push(`${i + 1}. ${caseItem}`);
        return;
      }
      lines.push(`${i + 1}. ${caseItem.short || "—"}`);
      if (caseItem.plain) lines.push(`   └ ${caseItem.plain}`);
      if (caseItem.example) lines.push(`   └ пример: ${caseItem.example}`);
    });
  }
  if (c.security) lines.push("", "🔒 Безопасность", c.security);
  lines.push(SEP);
  return lines.join("\n");
}

function parseMd(text) {
  const dateM = text.match(/(\d{4}-\d{2}-\d{2})/);
  const date = dateM ? dateM[1] : "";
  const rec = text.split(/\n##\s+.*Отклон/)[0];
  const repos = [];
  let category = "";
  let n = 0;
  const parts = rec.split(/\n(?=###\s+)/);
  for (const part of parts) {
    const catM = part.trim().match(/^###\s+(?:📁\s*)?(.+)/);
    if (catM && !catM[1].includes("[") && !/^#\d+/.test(catM[1].trim())) {
      const title = catM[1].trim().replace(/^📁\s*/, "");
      if (!title.toLowerCase().startsWith("рекоменд")) category = title;
      continue;
    }
    const m = part.match(/###\s+(?:#(\d+)\s*·\s*)?\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
    if (!m) continue;
    n = m[1] ? Number(m[1]) : n + 1;
    const starsM = part.match(/⭐\s*([\d\s]+)/);
    const daysM = part.match(/обновл[^\d]*(\d+)/i);
    repos.push({
      n,
      full_name: m[2],
      url: m[3],
      category,
      stars: starsM ? Number(starsM[1].replace(/\s/g, "")) : 0,
      updated_days: daysM ? Number(daysM[1]) : null,
      what: field(part, /(?:💡\s*)?\*?\*?Что это\*?\*?:?\s*/i, /(?:🎯|🛠|🔒|\*\*Почему|\*\*Кейс|#{2,3})/),
      why: field(
        part,
        /(?:🎯\s*)?\*?\*?(?:Зачем может подойти|Почему может подойти)\*?\*?:?\s*/i,
        /(?:🛠|🔒|\*\*Кейс|#{2,3})/
      ),
      cases: [],
      security: field(
        part,
        /(?:🔒\s*)?\*?\*?(?:Безопасность|Проверка безопасности)\*?\*?:?\s*/i,
        /(?:━━|#{2,3}|$)/
      ),
    });
  }
  return { date, repos };
}

function field(text, start, end) {
  const src = text;
  const sm = src.match(start);
  if (!sm) return "";
  const from = sm.index + sm[0].length;
  const rest = src.slice(from);
  const em = rest.search(end);
  return (em >= 0 ? rest.slice(0, em) : rest).trim().replace(/^\*+|\*+$/g, "").trim();
}

function chunkParts(parts, limit) {
  const chunks = [];
  let buf = "";
  const header = parts[0] || "";
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (i === 0) {
      buf = p;
      continue;
    }
    const add = (buf ? "\n\n" : "") + p;
    if (buf.length + add.length > limit && buf !== header) {
      chunks.push(buf);
      buf = header ? `${header}\n\n${p}` : p;
    } else {
      buf += add;
    }
  }
  if (buf) chunks.push(buf);
  return chunks;
}

async function sendChunks(env, chatId, text) {
  const limit = 3500;
  for (let i = 0, n = Math.ceil(text.length / limit); i < text.length; i += limit) {
    const idx = Math.floor(i / limit) + 1;
    const prefix = n > 1 ? `(${idx}/${n})\n` : "";
    await tg(env, "sendMessage", {
      chat_id: chatId,
      text: prefix + text.slice(i, i + limit),
      disable_web_page_preview: true,
    });
  }
}

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

async function tg(env, method, payload) {
  const res = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!data.ok && method !== "answerCallbackQuery") {
    // pin may fail if not admin — still return
    if (method === "pinChatMessage") return data;
    throw new Error(`${method}: ${JSON.stringify(data)}`);
  }
  return data;
}

async function cursorWebhook(url, key, body) {
  if (!url || !key) throw new Error("Cursor webhook URL/KEY не заданы в Worker secrets");
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
