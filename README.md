# github-repo-scout

Еженедельный поиск проверенных GitHub-репозиториев под задачи Ростислава (security-gate + персональный дайджест + Telegram).

- Инструкция агента: [`PROMPT.md`](./PROMPT.md)
- Telegram (11:00 + ручной `/scout`): [`TELEGRAM.md`](./TELEGRAM.md)
- Категории: [`interests.json`](./interests.json)
- Уже показанные: [`seen_repos.json`](./seen_repos.json)
- Дайджесты: `digests/YYYY-MM-DD.md`, актуальный — [`latest.md`](./latest.md)

**Расписание (Minsk):** scout вс 06:00 → дайджест к 10:00 → отправка в TG вс 11:00.  
Cron UTC: scout `0 3 * * 0`, send `0 8 * * 0`.
