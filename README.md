# github-repo-scout

Еженедельный поиск проверенных GitHub-репозиториев + дайджест в Telegram.

| Файл | Зачем |
|------|--------|
| [`SETUP.md`](./SETUP.md) | **чеклист: что нажать дальше** |
| [`automations/SEND_PROMPT.md`](./automations/SEND_PROMPT.md) | prompt для рассылки вс 11:00 |
| [`automations/SCOUT_PROMPT.md`](./automations/SCOUT_PROMPT.md) | prompt для поиска вс 06:00 |
| [`PROMPT.md`](./PROMPT.md) | полная инструкция |
| [`scripts/send_latest_to_telegram.sh`](./scripts/send_latest_to_telegram.sh) | отправка `latest.md` |
| [`bridge/telegram-cursor-worker.js`](./bridge/telegram-cursor-worker.js) | `/scout` `/digest` из TG |

**Сейчас на `main`:** дайджест `2026-09-20` в [`latest.md`](./latest.md).
