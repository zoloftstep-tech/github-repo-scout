/**
 * Telegram group bridge → Cursor Automations + digest buttons / pin-edit.
 *
 * Secrets:
 *   TG_BOT_TOKEN, TG_CHAT_ID
 *   CURSOR_SCOUT_WEBHOOK_URL, CURSOR_SCOUT_WEBHOOK_KEY
 *   CURSOR_SEND_WEBHOOK_URL, CURSOR_SEND_WEBHOOK_KEY  (optional)
 *
 * Pins: short summaries only; one pin per digest date; older pins kept as archive.
 * Bot needs: send messages, pin messages (admin in group).
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
          "Команды:\n/run — scout + дайджест после готовности\n/digest — текущий дайджест с кнопками\nКнопки → короткий закреп-саммари; новый дайджест = новый закреп (архив)."
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
  const date = pack.date || "";
  const card = (pack.repos || []).find((r) => Number(r.n) === n);
  if (!card) {
    await tg(env, "answerCallbackQuery", {
      callback_query_id: cq.id,
      text: `#${n} нет в текущем дайджесте`,
      show_alert: true,
    });
    return;
  }

  const block = formatPinSummary(card);
  const header = `${PIN_MARK} · ${date || "без даты"}\nкороткие саммари · полный текст в дайджесте выше`;
  const me = await tg(env, "getMe", {});
  const botId = me.result?.id;

  // Prefer cached message_id for this digest date (survives other pins).
  // New digest date → always a NEW pinned message (old pins stay as archive).
  const state = await loadPinState(chatId);
  let targetId = null;
  let currentText = "";

  if (state && state.date === date && state.messageId) {
    targetId = state.messageId;
    currentText = state.text || "";
    const chat = await tg(env, "getChat", { chat_id: chatId });
    const pinned = chat.result?.pinned_message;
    if (pinned?.message_id === targetId && pinned.text) {
      currentText = pinned.text;
    } else if (
      pinned &&
      pinned.from?.id === botId &&
      (pinned.text || "").startsWith(PIN_MARK) &&
      date &&
      (pinned.text || "").includes(date)
    ) {
      targetId = pinned.message_id;
      currentText = pinned.text || currentText;
    }
  } else {
    const chat = await tg(env, "getChat", { chat_id: chatId });
    const pinned = chat.result?.pinned_message;
    const pinnedText = pinned?.text || "";
    if (
      pinned &&
      pinned.from?.id === botId &&
      pinnedText.startsWith(PIN_MARK) &&
      date &&
      pinnedText.includes(date)
    ) {
      targetId = pinned.message_id;
      currentText = pinnedText;
    }
  }

  if (targetId && currentText) {
    if (alreadyInPin(currentText, n)) {
      await tg(env, "answerCallbackQuery", {
        callback_query_id: cq.id,
        text: `#${n} уже в подборке`,
      });
      return;
    }
    const next = `${currentText}\n\n${block}`;
    if (next.length > 4000) {
      await tg(env, "answerCallbackQuery", {
        callback_query_id: cq.id,
        text: "Подборка переполнена. Сними этот закреп или начни новую (старые закрепы-архив не трогаем).",
        show_alert: true,
      });
      return;
    }
    try {
      await tg(env, "editMessageText", {
        chat_id: chatId,
        message_id: targetId,
        text: next,
        disable_web_page_preview: true,
      });
    } catch (e) {
      // Stale message_id → start a fresh pin for this digest
      targetId = null;
      currentText = "";
      await reply(env, chatId, `Не смог дописать старую подборку (${String(e.message || e).slice(0, 120)}). Создаю новую.`);
    }
    if (targetId) {
      await savePinState(chatId, { date, messageId: targetId, text: next });
      await tg(env, "answerCallbackQuery", {
        callback_query_id: cq.id,
        text: `Добавил #${n} в закреп`,
      });
      return;
    }
  }

  // New pin (first pick for this digest, or edit failed). Does NOT unpin older digests.
  const text = `${header}\n\n${block}`;
  const sent = await tg(env, "sendMessage", {
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  });
  const mid = sent.result?.message_id;
  if (!mid) throw new Error("sendMessage: нет message_id");

  const pin = await tg(env, "pinChatMessage", {
    chat_id: chatId,
    message_id: mid,
    disable_notification: true,
  });
  if (!pin.ok) {
    await reply(
      env,
      chatId,
      `Сообщение #${n} отправил, но закрепить не вышло: ${JSON.stringify(pin).slice(0, 200)}. Проверь право Pin messages.`
    );
  }

  await savePinState(chatId, { date, messageId: mid, text });
  await tg(env, "answerCallbackQuery", {
    callback_query_id: cq.id,
    text: pin.ok ? `Закрепил #${n}` : `Добавил #${n} (без pin)`,
  });
}

/** Short line for pin archive — full writeup stays in digest messages. */
function formatPinSummary(c) {
  const why = clip(c.why || c.what || "", 140);
  const cat = c.category ? ` · ${c.category}` : "";
  return [`#${c.n} · ${c.full_name} · ⭐ ${c.stars || 0}${cat}`, why, c.url].filter(Boolean).join("\n");
}

function clip(s, max) {
  const t = String(s).replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + "…";
}

function alreadyInPin(text, n) {
  return (
    text.includes(`#${n} · `) ||
    text.includes(`#${n}  ·`) ||
    new RegExp(`#${n}\\s*·`).test(text)
  );
}

async function loadPinState(chatId) {
  try {
    const res = await caches.default.match(pinCacheKey(chatId));
    if (!res) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function savePinState(chatId, state) {
  try {
    await caches.default.put(
      pinCacheKey(chatId),
      new Response(JSON.stringify(state), {
        headers: { "Content-Type": "application/json", "Cache-Control": "max-age=1209600" },
      })
    );
  } catch {
    // non-fatal
  }
}

function pinCacheKey(chatId) {
  return new Request(`https://scout-pin-state.local/${chatId}`);
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
  // pinChatMessage: caller checks data.ok and reports to chat
  if (!data.ok && method !== "answerCallbackQuery" && method !== "pinChatMessage") {
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
