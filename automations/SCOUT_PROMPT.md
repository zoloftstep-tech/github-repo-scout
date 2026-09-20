# Режим SCOUT — поиск + дайджест + автомерж

Следуй файлу `PROMPT.md` в корне репозитория (**режим scout**).

Кратко:
1. Поиск по `interests.json` + security-gate (порядок и лимиты API — в `PROMPT.md`).
2. Запиши `digests/YYYY-MM-DD.md`, `latest.md`, `digest_cards.json`, `seen_repos.json`.
3. Формат: сквозная нумерация `#1…#N`, разделители, иконки; кейсы = Коротко / Простыми словами / Пример; **без личных имён**.
4. Commit → PR → **сразу merge** (`gh pr merge --squash --delete-branch`; если draft — сначала `gh pr ready`).
5. На schedule 06:00 Minsk полный дайджест в TG **не** шли (это send в 11:00). Можно одну строку «scout готов».
6. Если запуск с webhook `/run` или `/scout` — после merge сразу: `bash scripts/send_latest_to_telegram.sh`.

Коммить только дайджест-файлы (+ `digest_cards.json`). Вспомогательные скрипты в `/tmp` не в git.
