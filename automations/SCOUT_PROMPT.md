# Режим SCOUT — поиск + дайджест + автомерж

Следуй файлу `PROMPT.md` в корне репозитория (**режим scout**).

Кратко:
1. Поиск по `interests.json` + security-gate (порядок и лимиты API — в `PROMPT.md`).
2. Запиши `digests/YYYY-MM-DD.md` (дата Europe/Minsk), `latest.md`, `seen_repos.json`.
3. В дайджесте: **Рекомендованные** + таблица **Отклонённые**.
4. Commit → PR → **сразу merge** (`gh pr merge --squash --delete-branch`; если draft — сначала `gh pr ready`). Не оставляй PR на ручной мерж.
5. На schedule 06:00 Minsk полный дайджест в TG **не** шли (это send в 11:00). Можно одну строку «scout готов».
6. Если запуск с webhook `/scout` — после merge коротко сообщи в TG через `scripts/send_latest_to_telegram.sh` или одно status-сообщение.

Коммить только дайджест-файлы. Вспомогательные скрипты в `/tmp` не в git.
