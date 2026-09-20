# Чеклист настройки (после секретов и merge дайджеста)

Статус на 2026-09-20:
- [x] `PROMPT.md` / `interests.json` на `main`
- [x] Дайджест в `main` (`latest.md`, `digests/2026-09-20.md`) — PR #3 merged
- [x] Секреты `TG_BOT_TOKEN`, `TG_CHAT_ID` в Cloud Agents Secrets
- [ ] **Проверка отправки** — создать send-automation → **Run now** (этот уже запущенный агент секреты не видит)
- [ ] Scout: cron + webhook + автомерж
- [ ] Bridge `/scout` (опционально)

---

## A. Automation «repo-scout-send» (вс 11:00 Minsk)

1. [cursor.com/automations/new](https://cursor.com/automations/new)
2. Name: `repo-scout-send`
3. Repo: `zoloftstep-tech/github-repo-scout` @ `main`
4. Trigger: Scheduled → Custom cron: `0 8 * * 0` (UTC = 11:00 Minsk)
5. Prompt: **вставь целиком** файл [`automations/SEND_PROMPT.md`](./automations/SEND_PROMPT.md)
6. Save → **Run now** → проверь Telegram

Ожидание: несколько сообщений `(1/N)…` с содержимым `latest.md` (~30 KB ≈ 9 кусков).

---

## B. Automation «Weekly GitHub Scout» (уже есть)

Открой https://cursor.com/automations/9828f931-b44a-11f1-bb68-864e54d14197

1. Prompt замени на содержимое [`automations/SCOUT_PROMPT.md`](./automations/SCOUT_PROMPT.md) (или оставь `PROMPT.md`, но явно: «после PR сразу `gh pr ready` + `gh pr merge --squash --delete-branch`»).
2. Schedule: `0 3 * * 0` (вс 06:00 Minsk).
3. Добавь trigger **Webhook** → скопируй URL и API key.
4. Убедись, что агент может merge (права GitHub App).

---

## C. Ручной `/scout` из Telegram

1. Задеплой [`bridge/telegram-cursor-worker.js`](./bridge/telegram-cursor-worker.js) как Cloudflare Worker.
2. Secrets Worker: `TG_BOT_TOKEN`, `TG_CHAT_ID`, `CURSOR_SCOUT_WEBHOOK_URL`, `CURSOR_SCOUT_WEBHOOK_KEY` (+ опционально send webhook).
3. `setWebhook` на URL воркера.
4. BotFather: `/setjoingroups` → **Disable** (только личка).
5. В личке боту: `/scout`, `/digest`.

Без Worker: команда `/digest` не нужна — достаточно Run now у send; `/scout` — Run now у scout в UI.

---

## D. Быстрая проверка скрипта (новый Cloud Agent run)

После того как Secrets точно в environment, новый агент может выполнить:

```bash
bash scripts/send_latest_to_telegram.sh
```

Если в **этом** старом чате переменных нет — это нормально: секреты подхватываются при **новом** старте агента/automation.
