# Режим SCOUT — поиск + дайджест + автомерж

Следуй файлу `PROMPT.md` в корне репозитория (**режим scout**).

Кратко:
1. Поиск по `interests.json` + security-gate (порядок и лимиты API — в `PROMPT.md`).
2. Запиши `digests/YYYY-MM-DD.md`, `latest.md`, `digest_cards.json`, `seen_repos.json`.
3. Формат: сквозная нумерация `#1…#N`, разделители, иконки; кейсы = Коротко / Простыми словами / Пример; **без личных имён**.
4. Commit → PR → **сразу merge** (`gh pr ready` при необходимости, затем `gh pr merge --squash --delete-branch`). Не оставляй draft.
5. **Рассылка в Telegram:**
   - Schedule вс 06:00 Minsk — полный дайджест **не** шли (send-automation в 11:00).
   - Ручной `/run` или `/scout` из Telegram — после merge **тоже не шли** в TG: Worker сам пришлёт дайджест, когда увидит обновление `latest.md` на `main`. Достаточно смержить.
6. Если merge не удался — напиши ошибку в итоге run (без PR-висит).

Коммить только дайджест-файлы (+ `digest_cards.json`). Вспомогательные скрипты в `/tmp` не в git.
