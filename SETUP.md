# Чеклист настройки

Статус:
- [x] Prompt / interests / дайджест на `main`
- [x] Секреты `TG_*` (нужны и send, и scout)
- [x] Формат дайджеста + `digest_cards.json` + кнопки/закреп в bridge
- [ ] Deploy Worker (`bridge/`) + `setWebhook` + бот-админ с Pin
- [ ] Webhook URL/key scout → secrets Worker
- [ ] В группе: `/digest` → кнопки; `/run` → scout

Подробности: [`TELEGRAM.md`](./TELEGRAM.md).

## A. Send (вс 11:00 Minsk)

- Cron UTC: `0 8 * * 0`
- Prompt: [`automations/SEND_PROMPT.md`](./automations/SEND_PROMPT.md)
- Repo: `zoloftstep-tech/github-repo-scout` @ `main`
- Tools: только shell/git; Slack/PR/MCP — выкл
- Secrets: `TG_BOT_TOKEN`, `TG_CHAT_ID` (группа)

## B. Scout (вс 06:00 Minsk)

- Cron UTC: `0 3 * * 0` + Webhook
- Prompt: [`automations/SCOUT_PROMPT.md`](./automations/SCOUT_PROMPT.md)
- После ручного `/run` — сам шлёт дайджест скриптом

## C. Группа одной командой

`/run` = scout → после merge автоматическая рассылка с кнопками.  
`/digest` = только текущий дайджест.
