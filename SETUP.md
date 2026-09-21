# Чеклист настройки

Статус:
- [x] Prompt / interests / дайджест на `main`
- [x] Секреты `TG_*` (нужны send; scout для /run достаточно merge)
- [x] Формат дайджеста + `digest_cards.json` + кнопки/закреп в bridge
- [ ] **Redeploy Worker** с cron `*/2` (`cd bridge && npx wrangler deploy`)
- [ ] Webhook URL/key scout → secrets Worker
- [ ] В группе: `/digest` → кнопки; `/run` → scout → авто-дайджест после merge

Подробности: [`TELEGRAM.md`](./TELEGRAM.md).

## A. Send (вс 11:00 Minsk)

- Cron UTC: `0 8 * * 0`
- Prompt: [`automations/SEND_PROMPT.md`](./automations/SEND_PROMPT.md)
- Repo: `zoloftstep-tech/github-repo-scout` @ `main`
- Secrets: `TG_BOT_TOKEN`, `TG_CHAT_ID` (группа)

## B. Scout (вс 06:00 Minsk)

- Cron UTC: `0 3 * * 0` + Webhook
- Prompt: [`automations/SCOUT_PROMPT.md`](./automations/SCOUT_PROMPT.md)
- После ручного `/run` рассылку делает **Worker cron** (не агент)

## C. Группа

`/run` = scout → merge на main → Worker каждые 2 мин видит новый `latest.md` → дайджест в группу.  
`/digest` = только текущий дайджест.
