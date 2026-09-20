# Telegram: группа, команды, кнопки

У Cursor Automations **нет** нативного Telegram. Схема: Bot API + Cloudflare Worker (`bridge/`).

## Секреты (Cloud Agents / обе автоматизации)

| Secret | Значение |
|--------|----------|
| `TG_BOT_TOKEN` | токен от [@BotFather](https://t.me/BotFather) |
| `TG_CHAT_ID` | id **группы** (обычно `-100…`) |

Узнать `chat_id` группы: добавь бота, напиши любое сообщение,  
`curl "https://api.telegram.org/bot$TG_BOT_TOKEN/getUpdates"` → `message.chat.id`.

Секреты должны быть доступны **и scout, и send** (общие Secrets или продублировать в обеих автоматизациях).

## Команды в группе (одна точка входа)

| Команда | Что делает |
|---------|------------|
| **`/run`** | Запускает scout (webhook). После merge агент сам шлёт дайджест с кнопками. Это и есть «scout + send одной командой». |
| `/scout` | То же, что `/run` |
| `/digest` | Только рассылка текущего `latest.md` + кнопки (без нового поиска) |
| `/help` | Список команд |

В группе пиши `/run` или `/run@YourBot`.

## Кнопки и закреп

1. Дайджест приходит кусками `(1/N)` — **полный** текст карточек.
2. Ниже — кнопки `1 2 3 …`.
3. Нажатие → в **закреп** пишется короткое **саммари** (номер, репо, ⭐, категория, 1 строка «зачем», ссылка).
4. Следующие номера **того же** дайджеста → дописываются в тот же закреп (edit).
5. **Новый дайджест (новая дата)** → новый закреп. Старые закрепы не трогаем — архив; лишнее открепляешь/правишь сам.
6. Лимит TG ~4096 на одно сообщение; саммари позволяет заметно больше пунктов, чем полный текст.

Бот в группе = **админ** с правом **Pin messages**.

Данные кнопок: `digest_cards.json` на `main`.

## Автоматизации Cursor

### 1) Weekly GitHub Scout

- Schedule `0 3 * * 0` + **Webhook**
- Prompt: `automations/SCOUT_PROMPT.md`
- После Save скопируй Webhook URL и API key → в Worker secrets

### 2) repo-scout-send

- Schedule `0 8 * * 0` (вс 11:00 Minsk)
- Prompt: `automations/SEND_PROMPT.md`
- Те же `TG_*`

## Деплой bridge

```bash
cd bridge
npx wrangler login
npx wrangler deploy
npx wrangler secret put TG_BOT_TOKEN
npx wrangler secret put TG_CHAT_ID
npx wrangler secret put CURSOR_SCOUT_WEBHOOK_URL
npx wrangler secret put CURSOR_SCOUT_WEBHOOK_KEY
# опционально (иначе /digest читает GitHub сам):
npx wrangler secret put CURSOR_SEND_WEBHOOK_URL
npx wrangler secret put CURSOR_SEND_WEBHOOK_KEY
```

Webhook бота:
```bash
curl "https://api.telegram.org/bot$TG_BOT_TOKEN/setWebhook?url=https://YOUR_WORKER.workers.dev"
```

BotFather: группы **включены**; Privacy Mode можно оставить ON (команды всё равно доходят).

## Проверка

1. В группе: `/digest` → куски + кнопки.
2. Жми `1`, потом `2` → одно закреплённое сообщение растёт.
3. `/run` → в Cursor новый scout run; через 30–90 мин дайджест в группе.
