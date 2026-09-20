# Telegram: отправка дайджеста и ручной запуск

У Cursor Automations **нет** нативного Telegram. Схема ниже — через Bot API + Webhook.

## Секреты

В Cloud Agent / Automations добавь:

| Secret | Значение |
|--------|----------|
| `TG_BOT_TOKEN` | токен от [@BotFather](https://t.me/BotFather) |
| `TG_CHAT_ID` | id чата (личный или группа), куда слать дайджест |

Узнать `chat_id`: напиши боту, затем  
`curl "https://api.telegram.org/bot$TG_BOT_TOKEN/getUpdates"`  
и возьми `message.chat.id`.

## Две автоматизации

### 1) `repo-scout` — поиск

- Trigger: Schedule `0 3 * * 0` (вс 06:00 Minsk) **и** Webhook  
- Prompt: содержимое `PROMPT.md`, режим **scout**  
- Repo: `zoloftstep-tech/github-repo-scout` @ `main`  
- После save скопируй **Webhook URL** и **API key**

### 2) `repo-scout-send` — рассылка в 11:00

- Trigger: Schedule `0 8 * * 0` (вс 11:00 Minsk)  
- Prompt: «Режим **send** по `PROMPT.md`: прочитай `latest.md` и отправь в Telegram. Поиск не запускай.»  
- Те же repo + секреты TG_*

## Ручной запуск из Telegram

Нужен тонкий bridge (Cloudflare Worker / маленький VPS / n8n* / любой хостинг), который:

1. Принимает updates от Telegram (webhook бота или long polling).
2. На команду `/scout` делает:

```http
POST <CURSOR_SCOUT_WEBHOOK_URL>
Authorization: Bearer <CURSOR_WEBHOOK_API_KEY>
Content-Type: application/json

{"prompt":"Режим scout: выполни PROMPT.md, затем кратко ответь в Telegram что дайджест готов."}
```

3. На `/digest` — либо POST на webhook **send**-автоматизации, либо сам читает  
   `https://raw.githubusercontent.com/zoloftstep-tech/github-repo-scout/main/latest.md`  
   и шлёт в чат через `sendMessage`.

\* n8n как продукт в дайджесте репозиториев запрещён; как личный bridge для бота — на твоё усмотрение, к scout-логике не относится.

Минимальный псевдокод bridge:

```text
on Telegram message:
  if text == "/scout":
    POST cursor scout webhook
    reply "Запустил поиск, обычно готов за 30–90 мин; дайджест в git + /digest"
  if text == "/digest":
    POST cursor send webhook  OR  send latest.md now
```

## Проверка

1. Добавь секреты TG_* в окружение / automation.  
2. Run now у send — должно прийти сообщение в чат.  
3. Run now у scout — появятся `digests/…`, `latest.md`.  
4. `/scout` из TG — в Cursor run history новый run.
