# 📋 Дайджест репозиториев — 2026-10-18

Кратко: рекомендовано 27 / отклонено 114 в 9 категориях.
Окно прогона: старт 2026-10-18 12:22 / публикация 2026-10-18 12:29 (Minsk).

## ✅ Рекомендованные

### 📁 AI-агенты и LLM

━━━━━━━━━━━━━━━━━━━━
### #1 · [tomtom-international/tomtom-maps-mcp](https://github.com/tomtom-international/tomtom-maps-mcp)
⭐ 57 · обновлён 0 дн. назад

💡 **Что это**
MCP-сервер TomTom Maps: поиск мест, маршруты и трафик через Model Context Protocol — агент в Cursor/Claude вызывает геосервисы без самописных HTTP-обёрток.

🎯 **Зачем может подойти**
Под стек Cursor/MCP, если нужны адреса доставки, склады или маршруты выездных менеджеров. К калькулятору коробки напрямую не привязан — это геослой для агентов.

🛠 **Как применить**
1. **Коротко:** Адрес клиента в агенте
   **Простыми словами:** Агент сам проверяет адрес и ETA без ручного копирования в Maps.
   **Пример:** Менеджер диктует адрес доставки — агент возвращает координаты и время в пути.
2. **Коротко:** Маршрут выезда
   **Простыми словами:** Собрать оптимальный порядок точек для курьера/водителя.
   **Пример:** Три склада и два клиента — агент строит маршрут на день.
3. **Коротко:** Не путать с CRM
   **Простыми словами:** Это только карты, не учёт заказов.
   **Пример:** Держать рядом с CRM, не вместо неё.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #2 · [dzhng/yap](https://github.com/dzhng/yap)
⭐ 90 · обновлён 0 дн. назад

💡 **Что это**
Yap — локальная запись экрана/камеры и агентский монтаж видео для Claude Code, Codex и других AI-агентов: показал баг или демо — агент собирает понятный ролик.

🎯 **Зачем может подойти**
Ускоряет внутренние демо и баг-репорты без отдельного видеомонтажёра. Для производства полезнее в eng/маркетинге, чем на цехе.

🛠 **Как применить**
1. **Коротко:** Баг вместо стен текста
   **Простыми словами:** Записали экран ошибки — агент оформил короткое видео для тикета.
   **Пример:** Сломался превью калькулятора — ролик в issue за минуту.
2. **Коротко:** Демо фичи команде
   **Простыми словами:** Показал сценарий заказа — агент смонтировал понятный клип.
   **Пример:** Онбординг нового менеджера по CRM-экрану.
3. **Коротко:** Локально
   **Простыми словами:** Запись и правки на своей машине, не облачный SaaS-монтаж.
   **Пример:** Чувствительные экраны заказов не уезжают на чужой хостинг.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NONE.

━━━━━━━━━━━━━━━━━━━━
### #3 · [iannuttall/seo](https://github.com/iannuttall/seo)
⭐ 578 · обновлён 0 дн. назад

💡 **Что это**
SEO skill/MCP для агентов: CLI и сервер читают Search Console, GA4/Bing и (опционально) Ahrefs/DataForSEO — аудиты и ответы по реальным данным сайта.

🎯 **Зачем может подойти**
Для команды, которая крутит Next.js/витрины и лендинги: агент смотрит живую аналитику, а не выдумывает SEO. Слабее для цехового MES.

🛠 **Как применить**
1. **Коротко:** Аудит посадочной
   **Простыми словами:** Агент сверяет трафик и ошибки индексации по своим данным.
   **Пример:** Страница «коробочный калькулятор» просела — агент находит причину в GSC.
2. **Коротко:** Еженедельный отчёт
   **Простыми словами:** Команда получает сводку по запросам без ручного экспорта.
   **Пример:** Воскресный дайджест топ-запросов в Telegram.
3. **Коротко:** Ключи свои
   **Простыми словами:** Платные SEO API — только со своими ключами.
   **Пример:** Ahrefs подключён локально, данные не у стороннего «SEO-агента».

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

### 📁 Автоматизация бизнеса

━━━━━━━━━━━━━━━━━━━━
### #4 · [windmill-labs/windmill](https://github.com/windmill-labs/windmill)
⭐ 18217 · обновлён 0 дн. назад

💡 **Что это**
Windmill — self-hosted платформа: скрипты → вебхуки, воркфлоу и авто-UI. Альтернатива Retool/Pipedream/Temporal для внутренних автоматизаций.

🎯 **Зачем может подойти**
Сильный кандидат под автоматизацию бизнеса БОКСМАРТ: прайс, уведомления, сверки, интеграции без тяжёлого n8n (который в дайджесте исключён).

🛠 **Как применить**
1. **Коротко:** Скрипт → внутренняя кнопка
   **Простыми словами:** Python/TS-скрипт сразу получает форму запуска для менеджеров.
   **Пример:** Кнопка «пересчитать прайс по курсу» без отдельного фронта.
2. **Коротко:** Воркфлоу по заказу
   **Простыми словами:** Цепочка шагов: склад → КП → Telegram-пинг.
   **Пример:** Новый заказ в CRM триггерит проверку остатков и сообщение в группу.
3. **Коротко:** Self-hosted
   **Простыми словами:** Данные и секреты на своей инфраструктуре.
   **Пример:** Прайс и клиенты не уезжают в чужой SaaS-оркестратор.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #5 · [nbt4/rentalcore](https://github.com/nbt4/rentalcore)
⭐ 69 · обновлён 0 дн. назад

💡 **Что это**
RentalCore — учёт аренды оборудования/ивентов: jobs, устройства, OCR счетов, синхронизация с M365. Узкая ниша event rental, не универсальный ERP.

🎯 **Зачем может подойти**
Как референс UX/учёта позиций и документов. Прямая применимость к упаковке слабая — ближе как идея «job + позиции + OCR», чем готовый MES.

🛠 **Как применить**
1. **Коротко:** Референс учёта позиций
   **Простыми словами:** Посмотреть, как ведут jobs и повторное назначение продуктов.
   **Пример:** Спроектировать «заказ → позиции тиража» по похожей модели.
2. **Коротко:** OCR счетов
   **Простыми словами:** Идея авторазбора входящих инвойсов.
   **Пример:** Пилот: фото счёта поставщика → черновик в учёт.
3. **Коротко:** Честно про нишу
   **Простыми словами:** Это rental/events, не картон.
   **Пример:** Брать паттерны, не внедрять целиком на цех.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NONE.

━━━━━━━━━━━━━━━━━━━━
### #6 · [ivanarama/onebase](https://github.com/ivanarama/onebase)
⭐ 123 · обновлён 0 дн. назад

💡 **Что это**
OneBase — открытая бизнес-платформа на Go с учётным DSL: один бинарь + SQLite/PostgreSQL, конфигурация прикладной логики без тяжёлого стека.

🎯 **Зачем может подойти**
Близко к задачам учёта для малого производства: можно пробовать DSL под прайс/остатки. Документация и демо на русском — плюс для команды.

🛠 **Как применить**
1. **Коротко:** Учётный контур на одном бинаре
   **Простыми словами:** Подняли локально и крутим справочники без микросервисов.
   **Пример:** Пилот склада гофротары на PostgreSQL.
2. **Коротко:** DSL вместо кода форм
   **Простыми словами:** Бизнес-правила описываются конфигурацией.
   **Пример:** Правило скидки от тиража — в DSL, не в разрозненных скриптах.
3. **Коротко:** Сравнить с ERP
   **Простыми словами:** Легче LedgerSMB/Odoo, но меньше «из коробки» для производства.
   **Пример:** Неделя spike: хватит ли DSL под калькулятор+заказы.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 Упаковка и производство

━━━━━━━━━━━━━━━━━━━━
### #7 · [getrebuild/rebuild](https://github.com/getrebuild/rebuild)
⭐ 1083 · обновлён 0 дн. назад

💡 **Что это**
REBUILD — низкокод/AI корпоративная платформа (WMS/MES/CRM и др.): натуральный язык к данным, Skills/MCP. Ориентация на китайский рынок; для коммерции вне компании смотреть лицензию.

🎯 **Зачем может подойти**
Редкий открытый кандидат с явным MES/WMS в описании — полезно смотреть как референс модулей склада/производства. Внедрение «как есть» для БОКСМАРТ — под вопросом (язык UI, лицензия).

🛠 **Как применить**
1. **Коротко:** Референс MES/WMS модулей
   **Простыми словами:** Посмотреть, как собраны склад и производственный отчёт.
   **Пример:** Сравнить с qcadoo/OpenMes идеями экранов.
2. **Коротко:** AI к бизнес-данным
   **Простыми словами:** Запрос на естественном языке к сущностям.
   **Пример:** «Покажи тиражи за неделю» внутри пилота.
3. **Коротко:** Лицензия
   **Простыми словами:** GPL + коммерческие условия — читать до продакшена.
   **Пример:** Юрпроверка перед любым внешним доступом клиентов.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: GPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #8 · [ledgersmb/LedgerSMB](https://github.com/ledgersmb/LedgerSMB)
⭐ 570 · обновлён 0 дн. назад

💡 **Что это**
LedgerSMB — веб ERP/бухгалтерия с двойной записью для малого и среднего бизнеса: счета, контрагенты, складской учёт.

🎯 **Зачем может подойти**
Для производства упаковки — зрелый учётный контур (деньги/остатки), не digester картонок. Имеет смысл как self-hosted бухгалтерия рядом с калькулятором.

🛠 **Как применить**
1. **Коротко:** Учёт продаж и остатков
   **Простыми словами:** Вести контрагентов и склад без 1С-обязаловки.
   **Пример:** Пилот: отгрузки коробок и входящие счета.
2. **Коротко:** Рядом с калькулятором
   **Простыми словами:** Цена из калькулятора → документ в ERP.
   **Пример:** КП посчитано → черновик инвойса в LedgerSMB.
3. **Коротко:** Не MES
   **Простыми словами:** Нет высечки/маршрутов цеха из коробки.
   **Пример:** Цеховой план оставлять в отдельном инструменте.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #9 · [PrimeFoldTools/Andon](https://github.com/PrimeFoldTools/Andon)
⭐ 166 · обновлён 0 дн. назад

💡 **Что это**
Andon — Lean-система качества для AI-работы: повторяющиеся дефекты агента превращают в постоянные countermeasures (по мотивам andon/poka-yoke с производства).

🎯 **Зачем может подойти**
Автор — из manufacturing; для команды на Cursor/Claude Code это дисциплина «не чинить одну и ту же ошибку агента дважды». К картону — метафора качества, не станок.

🛠 **Как применить**
1. **Коротко:** Стоп-кран на ошибку агента
   **Простыми словами:** Один раз поймали баг в формуле — закрепили правило.
   **Пример:** Агент снова ломает НДС — andon-контрмера в AGENTS.md.
2. **Коротко:** Lean для промптов
   **Простыми словами:** Дефекты → чеклист, как на линии.
   **Пример:** Чеклист перед merge правок калькулятора.
3. **Коротко:** Не MES-софт
   **Простыми словами:** Это DX/качество агентов, не учёт тиражей.
   **Пример:** Держать в eng-контуре рядом с Cursor.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 Telegram-боты

━━━━━━━━━━━━━━━━━━━━
### #10 · [apimorphism/telegramium](https://github.com/apimorphism/telegramium)
⭐ 94 · обновлён 0 дн. назад

💡 **Что это**
Telegramium — чисто функциональная реализация Telegram Bot API для Scala (Cats Effect и друзья).

🎯 **Зачем может подойти**
Имеет смысл только если в стеке есть Scala. Для типичного TypeScript/Python-бота команды — слабо; оставляем как опцию для JVM-контура.

🛠 **Как применить**
1. **Коротко:** Scala-бот
   **Простыми словами:** Типобезопасный клиент Bot API на JVM.
   **Пример:** Внутренний notify-бот рядом с Scala-сервисами.
2. **Коротко:** Не aiogram
   **Простыми словами:** Другой язык — другой онбординг.
   **Пример:** Если команда на Python — лучше aiogram/grammy.
3. **Коротко:** Обновления API
   **Простыми словами:** Следит за свежим Bot API.
   **Пример:** Новые методы Telegram без ручных биндингов.

🔒 **Безопасность**
Scorecard 4.5; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #11 · [timoncool/telegram-api-mcp](https://github.com/timoncool/telegram-api-mcp)
⭐ 32 · обновлён 0 дн. назад

💡 **Что это**
MCP-сервер полного Telegram Bot API (сотни методов, rate limit, circuit breaker): агент в Cursor может управлять ботом через MCP.

🎯 **Зачем может подойти**
Прямо под стек Cursor + бизнес-боты: прототипировать ответы, рассылки и админ-команды голосом агента. Проверять секреты бота локально.

🛠 **Как применить**
1. **Коротко:** Агент правит бота
   **Простыми словами:** Через MCP вызвать sendMessage/меню без ручного скрипта.
   **Пример:** Черновик уведомления о готовности тиража в тестовый чат.
2. **Коротко:** Rate limit из коробки
   **Простыми словами:** Меньше шансов словить бан за флуд.
   **Пример:** Массовый пинг менеджерам пакетами.
3. **Коротко:** Секреты
   **Простыми словами:** Токен бота только в env агента.
   **Пример:** Не коммитить bot token в репозиторий дайджеста.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #12 · [PaulSonOfLars/gotgbot](https://github.com/PaulSonOfLars/gotgbot)
⭐ 722 · обновлён 0 дн. назад

💡 **Что это**
gotgbot — кодогенерируемая Go-обёртка Telegram Bot API с updater/dispatcher по мотивам python-telegram-bot.

🎯 **Зачем может подойти**
Если боты/воркеры на Go (как OneBase) — удобный каноничный клиент. Для Python/TS команды ценность ниже.

🛠 **Как применить**
1. **Коротко:** Go notify-бот
   **Простыми словами:** Сервис на Go шлёт статусы заказов в Telegram.
   **Пример:** Складской воркер → сообщение «тираж готов».
2. **Коротко:** Автоген API
   **Простыми словами:** Обёртка синхронизируется с Bot API.
   **Пример:** Меньше ручных DTO при обновлении Telegram.
3. **Коротко:** Выбор стека
   **Простыми словами:** Не тащить Go ради одного бота, если всё на TS.
   **Пример:** При TS — grammy; при Go — gotgbot.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 Next.js и веб

━━━━━━━━━━━━━━━━━━━━
### #13 · [mantinedev/next-app-min-template](https://github.com/mantinedev/next-app-min-template)
⭐ 67 · обновлён 0 дн. назад

💡 **Что это**
Официальный минимальный шаблон Mantine + Next.js App Router — быстрый старт UI без самосборки провайдеров.

🎯 **Зачем может подойти**
Для внутренних дашбордов и калькуляторов на Next.js: меньшеboilerplate на тему стилей. Это стартер, не бизнес-логика.

🛠 **Как применить**
1. **Коротко:** Скелет админки
   **Простыми словами:** Новый Next-проект сразу с Mantine.
   **Пример:** Экран калькулятора коробки за вечер.
2. **Коротко:** App Router
   **Простыми словами:** Актуальный роутинг Next без pages legacy.
   **Пример:** Новый кабинет менеджера с RSC.
3. **Коротко:** Только UI
   **Простыми словами:** Auth/billing нужно добавлять отдельно.
   **Пример:** Дальше смотреть SaaS-заготовки из этого дайджеста.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NONE.

━━━━━━━━━━━━━━━━━━━━
### #14 · [heidsoft/itsm](https://github.com/heidsoft/itsm)
⭐ 80 · обновлён 0 дн. назад

💡 **Что это**
AI-native ITSM на Go/Gin + Next.js: ITIL-процессы, BPMN, CMDB, SLA, база знаний, мультитенант.

🎯 **Зачем может подойти**
Для инфраструктуры и внутренних заявок команды (не цех картона). Полезно, если зреет helpdesk/учёт IT-активов рядом с Vercel/self-hosted.

🛠 **Как применить**
1. **Коротко:** Внутренний helpdesk
   **Простыми словами:** Заявки на доступы и инциденты в одном месте.
   **Пример:** «Упал принтер этикеток» — тикет со SLA.
2. **Коротко:** CMDB лёгкий
   **Простыми словами:** Учёт серверов/сервисов.
   **Пример:** Список VPS и кто владелец.
3. **Коротко:** Не CRM продаж
   **Простыми словами:** Это ITIL, не сделки с клиентами.
   **Пример:** Продажи оставлять в CRM/ERP.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #15 · [c15t/c15t](https://github.com/c15t/c15t)
⭐ 1986 · обновлён 0 дн. назад

💡 **Что это**
c15t — open-source cookie consent / CMP для React, Next.js, Vue и др.: баннер, preference dialog, consent-gated скрипты.

🎯 **Зачем может подойти**
Любой публичный Next.js/SaaS/витрина в ЕС/РБ-ориентире упирается в cookies/аналитику — готовый баннер без тяжёлого платного CMP.

🛠 **Как применить**
1. **Коротко:** Баннер на лендинг
   **Простыми словами:** Поставить consent до GA/метрик.
   **Пример:** Сайт калькулятора упаковки с корректным opt-in.
2. **Коротко:** Consent-gated scripts
   **Простыми словами:** Скрипты грузятся только после согласия.
   **Пример:** Чат-виджет не стартует без cookie OK.
3. **Коротко:** Self-serve
   **Простыми словами:** Не платить за базовый CMP на старте.
   **Пример:** MVP SaaS до выбора коммерческого CMP.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

### 📁 Кибербезопасность

━━━━━━━━━━━━━━━━━━━━
### #16 · [mthcht/awesome-lists](https://github.com/mthcht/awesome-lists)
⭐ 1947 · обновлён 0 дн. назад

💡 **Что это**
Подборки security-списков для SOC/DFIR/CTI: keyword hunting, IOC и связанные ресурсы.

🎯 **Зачем может подойти**
Для кибербезопасности инфраструктуры — быстрый вход в threat hunting без изобретения списков с нуля. Не сканер уязвимостей сам по себе.

🛠 **Как применить**
1. **Коротко:** База ключевых слов
   **Простыми словами:** Готовые списки для поиска аномалий в логах.
   **Пример:** Правила охоты на подозрительные процессы на VPS.
2. **Коротко:** Онбординг SOC
   **Простыми словами:** С чего начать детектам новому человеку.
   **Пример:** Чеклист источников CTI на первую неделю.
3. **Коротко:** Дополнить сканерами
   **Простыми словами:** Рядом держать Trivy/gitleaks из прошлых дайджестов.
   **Пример:** Списки + сканер образов в CI.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #17 · [timescale/rsigma](https://github.com/timescale/rsigma)
⭐ 168 · обновлён 0 дн. назад

💡 **Что это**
RSigma — полный toolkit для Sigma: парсер, линтер, evaluator, корреляции, конвертеры, CLI и MCP.

🎯 **Зачем может подойти**
Если пишете/гоняете detection rules (SIEM/логи) — удобный инженерный контур, в т.ч. из агента через MCP.

🛠 **Как применить**
1. **Коротко:** Линт Sigma-правил
   **Простыми словами:** Проверить правило до выкладки в SIEM.
   **Пример:** Правило на брут SSH не падает на синтаксисе.
2. **Коротко:** MCP для детектов
   **Простыми словами:** Агент помогает писать/проверять правила.
   **Пример:** В Cursor: «добавь детект на массовый fail2ban».
3. **Коротко:** Не замена WAF
   **Простыми словами:** Это detection engineering, не периметр.
   **Пример:** Рядом с Falco/Wazuh, не вместо firewall.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #18 · [phishdestroy/nicenic-evidence](https://github.com/phishdestroy/nicenic-evidence)
⭐ 124 · обновлён 0 дн. назад

💡 **Что это**
Снимок zone-scan регистратора NICENIC (IANA #3765): сотни тысяч доменов как evidence-набор для phishing/CTI исследований.

🎯 **Зачем может подойти**
Узкий CTI-артефакт. Для обычного hardening серверов БОКСМАРТ применимость слабая — скорее для тех, кто расследует фишинг/доменный абьюз.

🛠 **Как применить**
1. **Коротко:** CTI-исследование
   **Простыми словами:** Корпус доменов для анализа регистратора.
   **Пример:** Сверка с индикаторами фишинга в почте.
2. **Коротко:** Не tool сканирования
   **Простыми словами:** Это датасет/evidence, не runtime-защита.
   **Пример:** Не ставить «на сервер» как сервис.
3. **Коротко:** Осторожно с объёмом
   **Простыми словами:** Большой дамп — место и политика данных.
   **Пример:** Качать только нужные срезы.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 3D и печать

━━━━━━━━━━━━━━━━━━━━
### #19 · [connorslade/mslicer](https://github.com/connorslade/mslicer)
⭐ 87 · обновлён 0 дн. назад

💡 **Что это**
mslicer — быстрый open-source слайсер для MSLA/resin-принтеров (Chitu/Elegoo/NanoDLP/SVG), заметно шустрее многих конкурентов по бенчмаркам автора.

🎯 **Зачем может подойти**
Если в контуре есть смоляная печать прототипов оснастки/макетов — практичный инструмент. Для FDM Ender смотреть прошивки/другие слайсеры.

🛠 **Как применить**
1. **Коротко:** Срез модели под resin
   **Простыми словами:** STL → файл для MSLA-принтера.
   **Пример:** Прототип зажима/оснастки для цеха.
2. **Коротко:** Скорость итераций
   **Простыми словами:** Быстрый ре-слайс при правках модели.
   **Пример:** Три итерации крепления за вечер.
3. **Коротко:** Форматы
   **Простыми словами:** Поддержка популярных vendor-форматов.
   **Пример:** Elegoo/Chitu без проприетарного GUI.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: GPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #20 · [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)
⭐ 2418 · обновлён 0 дн. назад

💡 **Что это**
BOSL2 — библиотека OpenSCAD: формы, маски, матпомощники и манипуляторы, чтобы параметрические модели писать короче.

🎯 **Зачем может подойти**
Под параметрические детали/макеты для печати без тяжёлого CAD. Хорошо стыкуется с OpenSCAD из прошлых дайджестов.

🛠 **Как применить**
1. **Коротко:** Параметрическая деталь
   **Простыми словами:** Коробка/крышка/крепёж кодом с параметрами.
   **Пример:** Втулка под вал нужного диаметра за 10 минут.
2. **Коротко:** Меньше бойлерплейта
   **Простыми словами:** Готовые примитивы вместо сотен строк.
   **Пример:** Скругления, резьбы, маски отверстий из библиотеки.
3. **Коротко:** Beta API
   **Простыми словами:** API ещё шевелится — фиксировать версию.
   **Пример:** Пин в проекте оснастки, не latest вслепую.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: BSD-2-Clause.

━━━━━━━━━━━━━━━━━━━━
### #21 · [zisismaras/ender_3_4.2.2_firmware](https://github.com/zisismaras/ender_3_4.2.2_firmware)
⭐ 82 · обновлён 0 дн. назад

💡 **Что это**
Автосборки Marlin для Ender-3 на стоковой плате Creality 4.2.2 (512K): stable и nightly в Releases.

🎯 **Зачем может подойти**
Практично, если дома/в мастерской стоит Ender-3: прошивка без ручной возни с PlatformIO. Проверять ревизию платы до прошивки.

🛠 **Как применить**
1. **Коротко:** Обновить Marlin
   **Простыми словами:** Скачать готовый билд под 4.2.2 и прошить.
   **Пример:** Включить нужные фичи без локальной сборки.
2. **Коротко:** Проверить плату
   **Простыми словами:** 512K vs другие ревизии — критично.
   **Пример:** Сверить маркировку до flash.
3. **Коротко:** Не универсальный слайсер
   **Простыми словами:** Это firmware, не Cura/Orca.
   **Пример:** Слайсинг моделей — отдельно (Orca/mslicer).

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: AGPL-3.0.

### 📁 Музыкальное производство

━━━━━━━━━━━━━━━━━━━━
### #22 · [MongLong0214/logic-pro-mcp](https://github.com/MongLong0214/logic-pro-mcp)
⭐ 132 · обновлён 0 дн. назад

💡 **Что это**
Локальный MCP-сервер для Logic Pro: агент (Cursor/Claude) управляет сессией и читает состояние проекта в fail-closed режиме.

🎯 **Зачем может подойти**
Под музыкальное производство на Mac + агентный стек. Для Windows/Linux DAW не поможет.

🛠 **Как применить**
1. **Коротко:** Агент крутит сессию
   **Простыми словами:** Голосом/чатом подвинуть регионы, проверить треки.
   **Пример:** «Солируй второй куплет» без ручного клика по всем дорожкам.
2. **Коротко:** Fail-closed
   **Простыми словами:** Опасные действия по умолчанию закрыты.
   **Пример:** Агент не грохает проект без явного разрешения.
3. **Коротко:** Только Logic
   **Простыми словами:** Нужен Logic Pro на Mac.
   **Пример:** На Linux смотреть Nota/Nama из этого дайджеста.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #23 · [nota-daw/nota](https://github.com/nota-daw/nota)
⭐ 91 · обновлён 0 дн. назад

💡 **Что это**
Nota — бесплатная кроссплатформенная DAW (macOS/Windows/Linux): без подписки и аккаунта, arrangement, устройства, демо с звуком.

🎯 **Зачем может подойти**
Прямой open-source кандидат для электронного продакшена без аренды облачной DAW. Свежий проект — ожидать шероховатости.

🛠 **Как применить**
1. **Коротко:** Сессия без подписки
   **Простыми словами:** Поставили и пишете трек офлайн.
   **Пример:** Черновик эмбиент-лупа вечером без SaaS.
2. **Коротко:** Кроссплатформа
   **Простыми словами:** Один инструмент на разных ОС команды.
   **Пример:** Скетч на Linux, доводка на Mac.
3. **Коротко:** Сравнить с Ardour
   **Простыми словами:** Ardour зрелее; Nota проще войти.
   **Пример:** Пилот недели — хватит ли функций под ваш жанр.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: AGPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #24 · [bolangi/nama](https://github.com/bolangi/nama)
⭐ 28 · обновлён 0 дн. назад

💡 **Что это**
Nama — мультитрековый рекордер/DAW на Ecasound: LADSPA/LV2, эффекты, хорошо живёт под JACK на Linux.

🎯 **Зачем может подойти**
Для Linux-аудиопайплайна и «железного» JACK-сетапа. UX старше современных GUI DAW — честно считать нишевым.

🛠 **Как применить**
1. **Коротко:** Запись под JACK
   **Простыми словами:** Мультитрек с плагинами LV2.
   **Пример:** Подкаст/черновик трека на студийном Linux-PC.
2. **Коротко:** Скриптуемый пайплайн
   **Простыми словами:** Ближе к инженерии звука, чем к «кнопочной» DAW.
   **Пример:** Батч-обработка дорожек эффектами.
3. **Коротко:** Кривая обучения
   **Простыми словами:** Не самый дружелюбный UI для новичка.
   **Пример:** Если нужен простой GUI — сначала Nota.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Artistic-2.0.

### 📁 Коммерческие SaaS-заготовки

━━━━━━━━━━━━━━━━━━━━
### #25 · [revokslab/ShipFree](https://github.com/revokslab/ShipFree)
⭐ 1704 · обновлён 0 дн. назад

💡 **Что это**
ShipFree — open-source Next.js SaaS boilerplate (auth, Stripe/Polar и др. биллинг, Drizzle/Postgres, Tailwind): бесплатная альтернатива ShipFast-подходу.

🎯 **Зачем может подойти**
Быстрый старт коммерческого веб-продукта на знакомом стеке. Проверять актуальность зависимостей и что именно включено в V2.

🛠 **Как применить**
1. **Коротко:** Каркас SaaS за день
   **Простыми словами:** Auth+биллинг+лендинг из коробки.
   **Пример:** MVP «калькулятор как сервис» с оплатой.
2. **Коротко:** Свой Postgres
   **Простыми словами:** Данные в своей БД через Drizzle.
   **Пример:** Тенанты пилотных клиентов на Vercel+Neon.
3. **Коротко:** Аудит перед продом
   **Простыми словами:** Чужой starter — review auth/webhook.
   **Пример:** Проверить Stripe webhooks и RLS до денег.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #26 · [metavert-io/lastsaas](https://github.com/metavert-io/lastsaas)
⭐ 176 · обновлён 1 дн. назад

💡 **Что это**
LastSaaS — SaaS starter на Go + React: Stripe, multi-tenant, CI/codecov — более «бэкенд-тяжёлый» каркас, чем чистый Next boilerplate.

🎯 **Зачем может подойти**
Если нужен сильный Go API рядом с React-админкой (как у OneBase/ITSM). Для чистого Next/Vercel стека может быть избыточен.

🛠 **Как применить**
1. **Коротко:** Multi-tenant API
   **Простыми словами:** Готовая модель арендаторов + Stripe.
   **Пример:** B2B-кабинет для дилеров упаковки.
2. **Коротко:** Строгий бэкенд
   **Простыми словами:** Go-сервис с тестами/CI.
   **Пример:** Биллинг и квоты API отдельно от Next UI.
3. **Коротко:** Стек
   **Простыми словами:** Не Next-only — учесть ops Go-сервиса.
   **Пример:** Деплой API + фронт двумя единицами.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #27 · [makerkit/nextjs-saas-starter-kit-lite](https://github.com/makerkit/nextjs-saas-starter-kit-lite)
⭐ 462 · обновлён 2 дн. назад

💡 **Что это**
Makerkit Lite — облегчённый SaaS starter на Next.js + Supabase (есть полная коммерческая версия).

🎯 **Зачем может подойти**
Быстрый Next+Supabase каркас под кабинет/биллинг. Lite намеренно урезан — для серьёзного прода смотреть full Makerkit или ShipFree.

🛠 **Как применить**
1. **Коротко:** Supabase auth из коробки
   **Простыми словами:** Регистрация/сессии без самописной возни.
   **Пример:** Личный кабинет клиента с заказами-черновиками.
2. **Коротко:** Lite = меньше фич
   **Простыми словами:** Не ждать полного enterprise из lite.
   **Пример:** Прототип → решение: допилить или взять full.
3. **Коротко:** Стек команды
   **Простыми словами:** Next + Supabase хорошо стыкуется с Vercel.
   **Пример:** Поставить рядом с Mantine-шаблоном UI.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

## ⛔ Отклонённые

| # | Категория | Репозиторий | Описание | Причина |
|---|-----------|-------------|----------|---------|
| — | AI-агенты и LLM | [coollabsio/jean](https://github.com/coollabsio/jean) | A dev environment for AI agents. | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [makecindy/cindy](https://github.com/makecindy/cindy) | Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。 | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [dust-tt/dust](https://github.com/dust-tt/dust) | Custom AI agent platform to speed up your work. | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [team-reflect/reflect-open](https://github.com/team-reflect/reflect-open) | Open-source Reflect rewrite: A local-first AI agent-friendly Markdown note-taking app | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [TheMorpheus407/RepoLens](https://github.com/TheMorpheus407/RepoLens) | Multi-lens code audit tool — 280 expert AI agents for code review, security testing, and infrastr… | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [mauripsale/doc-adk-training](https://github.com/mauripsale/doc-adk-training) | Learn to build, test, and deploy production-ready AI agents with this complete "From Zero to Hero… | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [croffasia/itsaplan](https://github.com/croffasia/itsaplan) | Open-source, self-hosted alternative to Linear and Plane. Project management and issue tracking w… | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [shibing624/ai-paper-analysis](https://github.com/shibing624/ai-paper-analysis) | Daily in-depth Chinese analyses of frontier AI research papers, including topics such as LLMs, ag… | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [linny006/trending-claude-skills](https://github.com/linny006/trending-claude-skills) | Auto-updated leaderboard of trending claude-skills and AI agent repos, refreshed every 15 minutes | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [Goncafer47/Stablecoin-Payment-Gateway](https://github.com/Goncafer47/Stablecoin-Payment-Gateway) | Self-hosted, non-custodial stablecoin payment gateway with x402 and invoice checkout. Accepts USD… | релевантность: crypto/web3 payments |
| — | Автоматизация бизнеса | [obeli-sk/obelisk](https://github.com/obeli-sk/obelisk) | Durable & Deterministic Workflow Engine | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [HelpCode-ai/anythingmcp](https://github.com/HelpCode-ai/anythingmcp) | MCP gateway for AI agents: turn any REST/OpenAPI, GraphQL, SOAP or SQL API into MCP tools. 474 re… | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [moira-mcp/moira](https://github.com/moira-mcp/moira) | Agent Workflow Engine for AI agents over MCP — per-step directives, completion conditions, and JS… | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [ItalyPaleAle/francis](https://github.com/ItalyPaleAle/francis) | The simple & low-maintenance Go distributed actor framework and workflow engine | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [getrebuild/rebuild](https://github.com/getrebuild/rebuild) | 最新版全面支持AI智能！通过自然语言操作业务数据，支持 Skills/工具/知识库/MCP。高度可配置化的国产企业管理系统，企业内部可免费商用！零代码/低代码快速搭建WMS库存管理、MES生产报… | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [ChurchCRM/CRM](https://github.com/ChurchCRM/CRM) | Free, open-source church management software for people, families, groups, events, attendance, gi… | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [mert28kar-stack/Wave-Bookkeeping-Setup-Guide](https://github.com/mert28kar-stack/Wave-Bookkeeping-Setup-Guide) | Wave Accounting 2026 for Windows 11 and 10: Install, Set Up, and Run Your Books | не проверяли глубоко: уже 3 допущенных |
| — | Автоматизация бизнеса | [InvoicePlane/InvoicePlane](https://github.com/InvoicePlane/InvoicePlane) | A self-hosted open source application for managing your invoices, clients and payments. | не проверяли глубоко: уже 3 допущенных |
| — | Упаковка и производство | [BkashJEE/hermes-bot-forge](https://github.com/BkashJEE/hermes-bot-forge) | Hermes Agent plugin: say 'make me a <role>' and your agent builds a complete, working Bot — name,… | релевантность: не упаковка/производство |
| — | Упаковка и производство | [avivsinai/agent-message-queue](https://github.com/avivsinai/agent-message-queue) | File-based message queue for local agent-to-agent communication (Maildir-style) | релевантность: не упаковка/производство |
| — | Упаковка и производство | [serhii-londar/open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) | 🚀 Awesome list of open source applications for macOS. https://t.me/s/opensourcemacosapps | релевантность: не упаковка/производство |
| — | Упаковка и производство | [symfony/amqp-messenger](https://github.com/symfony/amqp-messenger) | Symfony AMQP extension Messenger Bridge | релевантность: не упаковка/производство |
| — | Упаковка и производство | [symfony/messenger](https://github.com/symfony/messenger) | Helps applications send and receive messages to/from other applications or via message queues | релевантность: не упаковка/производство |
| — | Упаковка и производство | [6WildGurr9/blox-blitz-adopt-me-power-play](https://github.com/6WildGurr9/blox-blitz-adopt-me-power-play) | Ultimate Adopt Me Blox Blitz Power Guide 2026 | релевантность: не упаковка/производство |
| — | Упаковка и производство | [itgoyo/itgoyo](https://github.com/itgoyo/itgoyo) | a beautiful template make your github profile look awesome ，give me a star , plz orz | релевантность: не упаковка/производство |
| — | Упаковка и производство | [Nyankomintsu/world-execute-me-lyric-mv](https://github.com/Nyankomintsu/world-execute-me-lyric-mv) | world.execute(me); — an unofficial fan-made lyric MV told as a chat with Claude, rendered frame b… | релевантность: не упаковка/производство |
| — | Упаковка и производство | [obentoo/bentoo](https://github.com/obentoo/bentoo) | A user-friendly Stage5 of Gentoo Linux. https://t.me/bentoolinux | релевантность: не упаковка/производство |
| — | Упаковка и производство | [meshery/meshery.io](https://github.com/meshery/meshery.io) | Website for Meshery | релевантность: не упаковка/производство |
| — | Упаковка и производство | [Syed-Imran88/MT5-Exposure-Mesh-Analyzer](https://github.com/Syed-Imran88/MT5-Exposure-Mesh-Analyzer) | Best Multi-Asset Correlation Heatmap & Risk Matrix for MetaTrader 2026 | релевантность: не упаковка/производство |
| — | Telegram-боты | [Cleverfuxaqo1668/Polymarket-Telegram-Bot](https://github.com/Cleverfuxaqo1668/Polymarket-Telegram-Bot) | A handy Polymarket prediction bot for Telegram. | релевантность: crypto/trading/VPN/leech/download |
| — | Telegram-боты | [anasty17/mirror-leech-telegram-bot](https://github.com/anasty17/mirror-leech-telegram-bot) | Official Repository: Telegram bot which can download direct links, torrents, nzb, google drive, t… | релевантность: crypto/trading/VPN/leech/download |
| — | Telegram-боты | [python-telegram-bot/python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) | We have made you a wrapper you can't refuse | слой2: Scorecard Vulnerabilities=None Dangerous-Workflow=0 при stars=29522 |
| — | Telegram-боты | [aiskendi/pencarimovie-server](https://github.com/aiskendi/pencarimovie-server) | It creates a Telegram bot server that can download or stream files directly from the Telegram clo… | слой4: скам-маркер (curl\s+[^\n/]*\/\s*(ba)?sh) |
| — | Telegram-боты | [bcmk/siren](https://github.com/bcmk/siren) | Telegram bot for webcast alerts | не проверяли глубоко: уже 3 допущенных |
| — | Telegram-боты | [osint-and-search/telegram_bot_Sherlock](https://github.com/osint-and-search/telegram_bot_Sherlock) | Ссылка на бот Шерлок для поиска информации и сам бот Sherlock для пробива в интернете. | не проверяли глубоко: уже 3 допущенных |
| — | Telegram-боты | [linuz90/claude-telegram-bot](https://github.com/linuz90/claude-telegram-bot) | — | не проверяли глубоко: уже 3 допущенных |
| — | Telegram-боты | [Desiders/telers](https://github.com/Desiders/telers) | An asynchronous framework for Telegram Bot API written in Rust | не проверяли глубоко: уже 3 допущенных |
| — | Telegram-боты | [timoniq/telegrinder](https://github.com/timoniq/telegrinder) | Modern visionary telegram bot framework | не проверяли глубоко: уже 3 допущенных |
| — | Next.js и веб | [lingdojo/kana-dojo](https://github.com/lingdojo/kana-dojo) | Aesthetic, minimalist platform for learning Japanese inspired by Duolingo and Monkeytype, built w… | релевантность: portfolio/hobby/manga/language-app |
| — | Next.js и веб | [ubedshah/manga-vault-nexus](https://github.com/ubedshah/manga-vault-nexus) | Next.js MangaDex CBZ Reader & Downloader 2026 | релевантность: portfolio/hobby/manga/language-app |
| — | Next.js и веб | [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | The largest open-source library of animated, interactive, and customizable React & Next.js compon… | не проверяли глубоко: уже 3 допущенных |
| — | Next.js и веб | [kirill-konshin/next-electron-rsc](https://github.com/kirill-konshin/next-electron-rsc) | Next.js running in Electron: the best way to develop desktop apps | не проверяли глубоко: уже 3 допущенных |
| — | Next.js и веб | [v-adhithyan/crack-interviews](https://github.com/v-adhithyan/crack-interviews) | Django - Next.js monorepo to scratch my own itch of building a hacker rank style platform for my … | не проверяли глубоко: уже 3 допущенных |
| — | Next.js и веб | [jakubwarkusz/themes](https://github.com/jakubwarkusz/themes) | A modern, fully-featured theme management library for Next.js | не проверяли глубоко: уже 3 допущенных |
| — | Next.js и веб | [mwakidenis/mwakidenis.com](https://github.com/mwakidenis/mwakidenis.com) | ⚡mwakidenis.com — Modern Next.js Creative Portfolio & Blog Platform with GSAP Animations, Markdow… | релевантность: portfolio/hobby/manga/language-app |
| — | Next.js и веб | [rahmanef63/mso](https://github.com/rahmanef63/mso) | Browser-based graphical shell and control plane for a Linux server you own — real terminal, file … | не проверяли глубоко: уже 3 допущенных |
| — | Next.js и веб | [buildlabs-io/next-ecommerce](https://github.com/buildlabs-io/next-ecommerce) | Free, modern, and accessible e-commerce platform built with Next.js 16 and Payload CMS. Features … | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [phishdestroy/namesilo-evidence](https://github.com/phishdestroy/namesilo-evidence) | NameSilo (IANA #1479) registrar abuse investigation — 5,281,151 domains scanned, 204,460 classifi… | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [phishdestroy/trustname-evidence](https://github.com/phishdestroy/trustname-evidence) | Phase II evidence package: complete-zone scan of ICANN registrar #4318 Trustname.com / Fewmoretap… | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [SailorMo0nEpic/soc-automation-update-channel](https://github.com/SailorMo0nEpic/soc-automation-update-channel) | SOC Automation Security Suite Installer and Update Hub 2026 | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [SigmaHQ/sigma](https://github.com/SigmaHQ/sigma) | Main Sigma Rule Repository | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [wazuh/wazuh](https://github.com/wazuh/wazuh) | Wazuh - The Open Source Security Platform. Unified XDR and SIEM protection for endpoints and clou… | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [beenuar/AiSOC](https://github.com/beenuar/AiSOC) | Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investiga… | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [Vigil-SOC/vigil](https://github.com/Vigil-SOC/vigil) | Vigil: The leading open source AI SOC. Apache 2.0. Runs against your own LLM, local or remote.  | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [fabriziosalmi/wildbox](https://github.com/fabriziosalmi/wildbox) | An open-source security platform for the community. Unified SIEM, SOAR, WAF, and more in a single… | не проверяли глубоко: уже 3 допущенных |
| — | Кибербезопасность | [VictoriaMetrics/VictoriaLogs](https://github.com/VictoriaMetrics/VictoriaLogs) | Fast and easy to use database for logs, which can efficiently handle terabytes of logs | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [partcad/partcad](https://github.com/partcad/partcad) | Package manager for things. Start designing modular hardware! PartCAD is the standard for documen… | слой4: скам-маркер (curl\s+[^\n/]*\/\s*(ba)?sh) |
| — | 3D и печать | [TautvydasDerzinskas/Thingport](https://github.com/TautvydasDerzinskas/Thingport) | Collect, organize, preview, and manage your 3D printing models from the places where you discover… | слой4: скам-маркер (curl\s+[^\n/]*\/\s*(ba)?sh) |
| — | 3D и печать | [arpruss/miscellaneous-scad](https://github.com/arpruss/miscellaneous-scad) | Miscellaneous OpenSCAD file | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [Kyoril/mmo](https://github.com/Kyoril/mmo) | This repository contains the prototype of an mmorpg with a custom engine, built entirely in C++. … | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [marcoturi/fastify-boilerplate](https://github.com/marcoturi/fastify-boilerplate) | Fastify 5 application boilerplate based on clean architecture, domain-driven design, CQRS, functi… | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [aveniridm/envion](https://github.com/aveniridm/envion) | Ecosystem in Pure Data designed for algorithmic and procedural composition, musique concrète, and… | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [pacman82/atoi-rs](https://github.com/pacman82/atoi-rs) | Parse integers directly from `[u8]` slices in safe code | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [paketo-buildpacks/spring-boot](https://github.com/paketo-buildpacks/spring-boot) | A Cloud Native Buildpack that contributes Spring Boot dependency information and slices an applic… | не проверяли глубоко: уже 3 допущенных |
| — | 3D и печать | [seungmanchoi/react-native-fsd-agent-template](https://github.com/seungmanchoi/react-native-fsd-agent-template) | React Native + Expo template with Feature-Sliced Design (FSD) architecture and AI Agent Harness f… | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [shicooo/Output-Thermal-Windows-Edition](https://github.com/shicooo/Output-Thermal-Windows-Edition) | Thermal Audio Mastering Suite 2026: Pro Desktop App for Windows 10 and 11 | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [zafekoker/Zebra2-Synth-Archive-Win](https://github.com/zafekoker/Zebra2-Synth-Archive-Win) | U-he Zebra 2026 VST Setup Guide for Windows 11 and 10 | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [quamplex/geonkick](https://github.com/quamplex/geonkick) | Geonkick is a free software synthesizer capable of generating a wide range of percussive sounds, … | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [betweentwomidnights/gary4juce](https://github.com/betweentwomidnights/gary4juce) | a bunch of open source ai music models inside the DAW | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [MrGueu/HALion-Sonic-Forge](https://github.com/MrGueu/HALion-Sonic-Forge) | Steinberg HALion 2026 Setup Guide for Windows 11 and 10 | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [praveen14143/SampleTank-4-Sound-Library-Setup](https://github.com/praveen14143/SampleTank-4-Sound-Library-Setup) | IK Multimedia SampleTank 4 Full Version Installer for Windows 2026 | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [rashedbp2024-sudo/Sylenth-Sound-Forge](https://github.com/rashedbp2024-sudo/Sylenth-Sound-Forge) | Sylenth1 VST for Windows 11 and 10: 2026 Install and Setup Guide | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [akinlayomartins/Tracktion-Waveform-Setup-Guide](https://github.com/akinlayomartins/Tracktion-Waveform-Setup-Guide) | Tracktion Waveform DAW Setup Guide for Windows 11 and 10 in 2026 | не проверяли глубоко: уже 3 допущенных |
| — | Музыкальное производство | [sarveashvaitheeswaran-stack/Dawn-Mod-Companion](https://github.com/sarveashvaitheeswaran-stack/Dawn-Mod-Companion) | Back to the Dawn Trainer Hub 2026: Cheats, Mods and Save Editor for Animal City | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [convex/ents-saas-starter](https://github.com/convex/ents-saas-starter) | Convex, Clerk, Next.js, Convex Ents | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [Blazity/next-saas-starter](https://github.com/Blazity/next-saas-starter) | ⚡️ Free Next.js responsive landing page template for SaaS products made using JAMStack architecture. | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [liberusoftware/boilerplate-laravel](https://github.com/liberusoftware/boilerplate-laravel) | Laravel 13, PHP 8.5, Filament 5 and Livewire 4 SaaS boilerplate application with Jetstream and So… | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [EinGuterWaran/awesome-opensource-boilerplates](https://github.com/EinGuterWaran/awesome-opensource-boilerplates) | A curated list of production-ready and free SaaS boilerplates and starter templates. Build your n… | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [alan345/AI-Fullstack-SaaS-Boilerplate](https://github.com/alan345/AI-Fullstack-SaaS-Boilerplate) | Fullstack SaaS Boilerplate built with tRPC, Fastify and React | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [saaspegasus/django-boilerplate](https://github.com/saaspegasus/django-boilerplate) | The original SaaS Boilerplate for Django, trusted by thousands. | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [cangeorgecode/Django_Boilerplate_Free](https://github.com/cangeorgecode/Django_Boilerplate_Free) | A free Django SaaS Boilerplate. Get the paid version here 👇 | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [yezz123/ai-template](https://github.com/yezz123/ai-template) | Multi-tenant SaaS boilerplate built on FastAPI & Authx :sparkles: | не проверяли глубоко: уже 3 допущенных |
| — | Коммерческие SaaS-заготовки | [fogbender/b2b-saaskit](https://github.com/fogbender/b2b-saaskit) | B2B SaaS Starter Kit - create a B2B web app: quickly and for free | не проверяли глубоко: уже 3 допущенных |
| — | AI-агенты и LLM | [godot-fun/gai](https://github.com/godot-fun/gai) | A lightweight AI agent and skill workflow framework built with Godot. | пост-фильтр: Godot/game framework — слабо под стек |
| — | Telegram-боты | [timoncool/Bulka](https://github.com/timoncool/Bulka) | Live-coding music platform with AI agent — browser-based Strudel fork with Telegram bot and Russi… | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | Telegram-боты | [lextalens/math-drill-bot](https://github.com/lextalens/math-drill-bot) | Best ZNO Math Trainer Telegram Bot 2026 Adaptive Task Practice Guide | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | Next.js и веб | [llun/activities.next](https://github.com/llun/activities.next) | A Next.JS ActivityPub server. | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | 3D и печать | [haris-musa/excel-mcp-server](https://github.com/haris-musa/excel-mcp-server) | Excel MCP server: let AI (Claude, Cursor, Codex) create and edit Excel files with charts, PivotTa… | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | 3D и печать | [AallamR/RobloxForge-Intelligence](https://github.com/AallamR/RobloxForge-Intelligence) | RobloxForge Docs 2026: Official MCP Vertical Slice Verification Layer for Studio | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | Музыкальное производство | [Fex-21/Dawnwalker-Override-Menu](https://github.com/Fex-21/Dawnwalker-Override-Menu) | The Blood of Dawnwalker Trainer Menu 2026: God Mode, Damage Boost, Fly Mode and More | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | Музыкальное производство | [bin272006-collab/Cronos-Dawn-Trainer-Companion](https://github.com/bin272006-collab/Cronos-Dawn-Trainer-Companion) | Cronos New Dawn Trainer 2026 Setup Guide Hub for Windows 11 and 10 | пост-фильтр: нерелевантный/игровой/warez-adjacent контент |
| — | AI-агенты и LLM | [patrickchugh/terravision](https://github.com/patrickchugh/terravision) | Cloud architecture diagrams in both directions: AI prompt or JSON to diagram, diagram to Terrafor… | слой4: скам-маркер (curl\s+[^\n/]*\/\s*(ba)?sh) |
| — | Упаковка и производство | [emqx/emqx](https://github.com/emqx/emqx) | The most scalable and reliable MQTT broker for AI, IoT, IIoT and connected vehicles | релевантность: не упаковка/производство |
| — | Упаковка и производство | [united-manufacturing-hub/united-manufacturing-hub](https://github.com/united-manufacturing-hub/united-manufacturing-hub) | The data platform for manufacturing | релевантность: не упаковка/производство |
| — | Next.js и веб | [mwakidenis/Mpesa-Based_Wi-Fi-Hotspot_Billing_System](https://github.com/mwakidenis/Mpesa-Based_Wi-Fi-Hotspot_Billing_System) | 📶 A fast, automated Hotspot Billing system powered by M-Pesa STK Push for instant, secure user ac… | релевантность: portfolio/hobby/manga/language-app |
| — | 3D и печать | [baranacikgoz/modular-monolith-ddd-vsa-webapi](https://github.com/baranacikgoz/modular-monolith-ddd-vsa-webapi) | A .NET 10 Webapi boilerplate with Modular Monolith approach, Domain-Driven Design and Vertical Sl… | пост-фильтр: не 3D/печать |
| — | Музыкальное производство | [wgd-modular/loewenzahnhonig-firmware](https://github.com/wgd-modular/loewenzahnhonig-firmware) | A repository to collect different firmwares for the daisy-based löwenzahnhonig module. | пост-фильтр: не музыка |
| — | Telegram-боты | [EhsanShahbazii/Usefull-Telegram-Bots](https://github.com/EhsanShahbazii/Usefull-Telegram-Bots) | 🤖 Curated, 100% verified directory of 200+ useful Telegram bots across 17 categories (AI, media d… | релевантность: каталог с downloaders/youtube-dl |
| — | 3D и печать | [Slicer/ExtensionsIndex](https://github.com/Slicer/ExtensionsIndex) | Slicer extensions index | релевантность: medical 3D Slicer, не печать |
| — | Музыкальное производство | [Jjjjjjjjjsjszjzj/modular-synth-suite](https://github.com/Jjjjjjjjjsjszjzj/modular-synth-suite) | Cherry Voltage 2026 Modular Synth Installer for Windows 10 and 11 | слой4/пост: warez-инсталлер (full version download topics) |
| — | Музыкальное производство | [soumyadeeproy859-cpu/meta-morserin0](https://github.com/soumyadeeproy859-cpu/meta-morserin0) | Open Source Metamorserino ESP32 Firmware and Modular Synth Toolkit 2026 | пост-фильтр: не музыкальное производство (morse/trainer landing) |
| — | 3D и печать | [OpenIPC/firmware](https://github.com/OpenIPC/firmware) | Alternative IP Camera firmware from an open community | пост: не 3D |
| — | 3D и печать | [dormancygrace/NanoKVM-OS](https://github.com/dormancygrace/NanoKVM-OS) | Community firmware for NanoKVM: 4K video, WebRTC and Direct streaming, USB virtual media and netw… | пост: не 3D |
| — | 3D и печать | [lab-401/icopy-x](https://github.com/lab-401/icopy-x) | iCopy-X Open Source UI & Firmware | пост: не 3D |
| — | 3D и печать | [Abdess/retrobios](https://github.com/Abdess/retrobios) | Source-verified BIOS and firmware packs for RetroArch, Batocera, Recalbox, Lakka, RetroPie, EmuDe… | слой4: скам-маркер (curl\s+[^\n/]*\/\s*(ba)?sh) |
| — | 3D и печать | [syssi/esphome-yeelight-ceiling-light](https://github.com/syssi/esphome-yeelight-ceiling-light) | ESPHome custom firmware for ESP32 based Yeelight Ceiling Lights | пост: не 3D |
| — | 3D и печать | [charlesvestal/fm1-x0x](https://github.com/charlesvestal/fm1-x0x) | X0X: groovebox firmware for the M-VAVE FM-1 (909, 808, two 303s with TB-3PO, breakbeat generator,… | пост: не 3D |
| — | 3D и печать | [DNNABI/SamFirmware-Orchestrator](https://github.com/DNNABI/SamFirmware-Orchestrator) | SamFirm Pro 2026: Windows 11 Samsung Firmware Flash and Device Management Suite | пост: warez/download topics |
| — | 3D и печать | [attify/firmware-analysis-toolkit](https://github.com/attify/firmware-analysis-toolkit) | Firmware security research platform combining binary analysis, taint tracing, and emulation acros… | пост: не 3D |
| — | 3D и печать | [aroum/fm1-custom-fw](https://github.com/aroum/fm1-custom-fw) | M-VAVE FM-1 resource hub: custom firmwares directory, docs, MIDI SysEx protocol tools & firmware … | пост: не 3D |
| — | Музыкальное производство | [kawsar8155/TAL-U-NO-Synth-Emulation-Suite](https://github.com/kawsar8155/TAL-U-NO-Synth-Emulation-Suite) | TAL-U-NO-LX Synth Plugin Full Setup for Windows 11 and 10 in 2026 | слой4: warez synth full-installer topics |
| — | Telegram-боты | [dovebedi-ux/rl-bumper-tactics](https://github.com/dovebedi-ux/rl-bumper-tactics) | Ultimate Rocket League AI Bot Framework 2026 – RLBot Python SDK & Optimization Suite | релевантность: Rocket League bot, не Telegram |
| — | Telegram-боты | [BEDOLAGA-DEV/remnawave-bedolaga-telegram-bot](https://github.com/BEDOLAGA-DEV/remnawave-bedolaga-telegram-bot) | Система для продажи подписок в тг и вебе с вебадминкой интегрированный c Remnawave 3.0.0+ (https:… | пост: junk |
| — | Музыкальное производство | [munich-quantum-toolkit/syrec](https://github.com/munich-quantum-toolkit/syrec) | MQT SyReC Synthesizer - A Tool for HDL-based Synthesis of Reversible Circuits | релевантность: quantum circuit synthesis, не музыка |
