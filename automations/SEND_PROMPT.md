# Режим SEND — только Telegram

Ты cloud agent в `zoloftstep-tech/github-repo-scout`. **Не ищи репозитории. Не меняй git.**

## Задача

1. Убедись, что на `main` есть актуальные `latest.md` и `digest_cards.json` (`git pull` / `git checkout main`).
2. Запусти: `bash scripts/send_latest_to_telegram.sh`
3. Скрипт шлёт куски дайджеста + сообщение с кнопками номеров. Не печатай токен в лог.
4. Секреты: `TG_BOT_TOKEN`, `TG_CHAT_ID` (группа).
5. В конце: сколько сообщений ушло / ошибка API.

Если `latest.md` — заглушка («Пока нет дайджеста») — одним сообщением: «Дайджеста ещё нет, дождись scout».
