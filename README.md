# github-repo-scout

Еженедельный поиск проверенных GitHub-репозиториев + дайджест в Telegram.

| Файл | Зачем |
|------|--------|
| [`SETUP.md`](./SETUP.md) | чеклист |
| [`TELEGRAM.md`](./TELEGRAM.md) | группа: `/run`, кнопки, закреп |
| [`automations/SEND_PROMPT.md`](./automations/SEND_PROMPT.md) | prompt рассылки вс 11:00 |
| [`automations/SCOUT_PROMPT.md`](./automations/SCOUT_PROMPT.md) | prompt поиска вс 06:00 |
| [`PROMPT.md`](./PROMPT.md) | полная инструкция |
| [`scripts/send_latest_to_telegram.sh`](./scripts/send_latest_to_telegram.sh) | дайджест + кнопки |
| [`bridge/telegram-cursor-worker.js`](./bridge/telegram-cursor-worker.js) | `/run` `/digest` + pick/pin |
| [`digest_cards.json`](./digest_cards.json) | карточки для кнопок |

**Сейчас на `main`:** дайджест `2026-09-20` (+ cards). В группе: `/run` = scout+рассылка после готовности.
