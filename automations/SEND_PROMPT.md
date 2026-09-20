# Режим SEND — только Telegram

Ты cloud agent в `zoloftstep-tech/github-repo-scout`. **Не ищи репозитории. Не меняй git.**

## Задача

1. Убедись, что на `main` есть актуальный `latest.md` (`git pull` / `git checkout main`).
2. Запусти: `bash scripts/send_latest_to_telegram.sh`
3. Если скрипт упал — отправь вручную через `curl` к `https://api.telegram.org/bot$TG_BOT_TOKEN/sendMessage`, нарезая текст ≤3500 символов.
4. Секреты: `TG_BOT_TOKEN`, `TG_CHAT_ID` (уже в окружении). Не печатай токен в лог.
5. В конце коротко напиши: сколько сообщений ушло / ошибка API.

Если `latest.md` — заглушка («Пока нет дайджеста») — одним сообщением в TG: «Дайджеста ещё нет, дождись scout».
