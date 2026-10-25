# 📋 Дайджест репозиториев — 2026-10-25

Кратко: рекомендовано 27 / отклонено 88 в 9 категориях.
Окно прогона: старт 2026-10-25 12:05 / публикация 2026-10-25 12:10 (Minsk).

## ✅ Рекомендованные

### 📁 AI-агенты и LLM

━━━━━━━━━━━━━━━━━━━━
### #1 · [aipoch/open-science](https://github.com/aipoch/open-science)
⭐ 5359 · обновлён 0 дн. назад

💡 **Что это**
AIPOCH Open-Science — локальный AI-workbench для исследований: агенты читают файлы, гоняют Python/R, тянут научные источники и собирают отчёты с прослеживаемым provenance.

🎯 **Зачем может подойти**
Сильный кандидат, если команда экспериментирует с агентными пайплайнами «данные → код → отчёт» без облачного notebook-SaaS. К цеховому MES/калькулятору коробки слабо привязан — это research/agent слой.

🛠 **Как применить**
1. **Коротко:** Локальный агентный стенд
   **Простыми словами:** Описать задачу текстом — агент крутит код и данные на своей машине.
   **Пример:** Свести выгрузку заказов и курс — агент строит таблицу без Colab.
2. **Коротко:** Воспроизводимый отчёт
   **Простыми словами:** Шаги и источники остаются в проекте, не «магия чата».
   **Пример:** Еженедельный разбор брака по CSV с понятной цепочкой шагов.
3. **Коротко:** Не ERP
   **Простыми словами:** Это workbench, не учёт производства.
   **Пример:** Держать рядом с CRM/MES, не вместо них.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #2 · [jwuthri-cloud/Tracely-ai](https://github.com/jwuthri-cloud/Tracely-ai)
⭐ 1170 · обновлён 0 дн. назад

💡 **Что это**
Tracely — CI/CD для AI-агентов: оценивает production-трассы, кластеризует сбои, замораживает их в replayable regression-кейсы и блокирует PR, который снова их принесёт.

🎯 **Зачем может подойти**
Под стек Cursor/агентов: когда бот меняет прайс или CRM-логику, нужна «память» о прошлых поломках в CI. Для цеха полезнее в eng, чем на станке.

🛠 **Как применить**
1. **Коротко:** Регрессии агента в CI
   **Простыми словами:** Плохой прогон агента становится тестом, а не разовым тикетом.
   **Пример:** Агент снова ломает скидку на коробку — PR не проходит gate.
2. **Коротко:** Кластер сбоев
   **Простыми словами:** Похожие ошибки группируются, а не тонут в логах.
   **Пример:** Десять падений «нет остатка» → один issue.
3. **Коротко:** Self-hosted observability
   **Простыми словами:** Трассы агентов можно держать у себя.
   **Пример:** Чувствительные заказы не уезжают в чужой SaaS-eval.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #3 · [TensorBlock/awesome-mcp-servers](https://github.com/TensorBlock/awesome-mcp-servers)
⭐ 948 · обновлён 0 дн. назад

💡 **Что это**
Каталог MCP-серверов (awesome-list): подборки серверов Model Context Protocol для подключения инструментов к агентам в Cursor/Claude.

🎯 **Зачем может подойти**
Быстрый обзор экосистемы MCP под стек команды. Это кураторский список, не продукт — применимость высокая как справочник, низкая как «поставить и забыть».

🛠 **Как применить**
1. **Коротко:** Подобрать MCP
   **Простыми словами:** Найти готовый сервер под карты, БД, тикеты без изобретения протокола.
   **Пример:** Нужен MCP к Postgres/CRM — смотрим раздел в списке.
2. **Коротко:** Онбординг агентов
   **Простыми словами:** Новый разработчик видит карту экосистемы.
   **Пример:** Чеклист «какие MCP ставим на ноут для БОКСМАРТ».
3. **Коротко:** Не код
   **Простыми словами:** Форкать список не обязательно — это навигация.
   **Пример:** Закладка в Notion рядом с PROMPT.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 Автоматизация бизнеса

━━━━━━━━━━━━━━━━━━━━
### #4 · [twentyhq/twenty](https://github.com/twentyhq/twenty)
⭐ 59681 · обновлён 0 дн. назад

💡 **Что это**
Twenty — open-source CRM (альтернатива Salesforce): объекты, поля и views как код, GraphQL/NestJS/React, cloud или self-host.

🎯 **Зачем может подойти**
Прямой кандидат под CRM для продаж упаковки: сделки, клиенты, кастомные объекты без тяжёлого Salesforce. Стек современный, заточен под технические команды.

🛠 **Как применить**
1. **Коротко:** CRM как код
   **Простыми словами:** Схема сделки и полей версионируется вместе с репо.
   **Пример:** Поле «тираж/материал» добавляется PR-ом, не руками админа.
2. **Коротко:** Воронка КП
   **Простыми словами:** Вести лиды и стадии от запроса до отгрузки.
   **Пример:** Менеджер видит, где зависли коробки «ждём макет».
3. **Коротко:** Self-host
   **Простыми словами:** Клиентская база на своей инфраструктуре.
   **Пример:** Данные БОКСМАРТ не обязаны жить только в чужом SaaS-CRM.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #5 · [HelpCode-ai/anythingmcp](https://github.com/HelpCode-ai/anythingmcp)
⭐ 742 · обновлён 0 дн. назад

💡 **Что это**
AnythingMCP — self-hosted MCP-gateway: превращает REST/OpenAPI, GraphQL, SOAP, SQL в MCP-tools для Claude/ChatGPT; сотни готовых коннекторов (SAP, маркетплейсы и др.).

🎯 **Зачем может подойти**
Сильный мост «агент ↔ существующие API» без написания MCP с нуля. Для автоматизации бизнеса и интеграций с ERP/складом — высокая применимость.

🛠 **Как применить**
1. **Коротко:** ERP в Cursor
   **Простыми словами:** Агент вызывает ваш OpenAPI как tool, без обёртки.
   **Пример:** «Покажи остаток гофры» → запрос в складской API.
2. **Коротко:** Готовые коннекторы
   **Простыми словами:** Часть систем подключается из коробки.
   **Пример:** Прототип связки маркетплейс + внутренний прайс.
3. **Коротко:** Self-hosted secrets
   **Простыми словами:** Ключи и JWT на своём Docker.
   **Пример:** Токены 1С/CRM не светятся в чужом gateway.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: AGPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #6 · [NitorCreations/nflow](https://github.com/NitorCreations/nflow)
⭐ 239 · обновлён 0 дн. назад

💡 **Что это**
nFlow — встраиваемый JVM workflow-engine: оркестрация бизнес-процессов как FSM/saga, отказоустойчивость, несколько БД, без тяжёлого BPM-XML.

🎯 **Зачем может подойти**
Если стек Java/Kotlin и нужны гарантированные многошаговые процессы (заказ → склад → счёт). Для Next.js-only команды применимость слабее — нужен JVM-рантайм.

🛠 **Как применить**
1. **Коротко:** Saga заказа
   **Простыми словами:** Шаги с ретраями и состояниями в БД.
   **Пример:** Оплата прошла, печать этикетки упала — процесс дожмёт сам.
2. **Коротко:** Замена BPM
   **Простыми словами:** Логика в коде, не в визуальном монстре.
   **Пример:** Статусы «макет/тираж/отгрузка» как явные состояния.
3. **Коротко:** Только JVM
   **Простыми словами:** Честно: не Node-native.
   **Пример:** Имеет смысл рядом с Java-бэкендом, не вместо Next.js API.

🔒 **Безопасность**
Scorecard 4.6; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NOASSERTION.

### 📁 Упаковка и производство

━━━━━━━━━━━━━━━━━━━━
### #7 · [BLB3DPrinting/filaops](https://github.com/BLB3DPrinting/filaops)
⭐ 81 · обновлён 0 дн. назад

💡 **Что это**
FilaOps — open-source ERP для 3D print farms: склад, производство, продажи, закупки, MRP и учёт под аддитивное производство (Docker).

🎯 **Зачем может подойти**
Как референс цехового ERP/MRP и учёта партий. Прямая применимость к гофроупаковке слабая — ниша 3D-ферм; идеи склада/MRP переносимы.

🛠 **Как применить**
1. **Коротко:** Референс MRP
   **Простыми словами:** Посмотреть, как связывают заказы, остатки и производство.
   **Пример:** Сверка «заказ → материал → очередь» для своей модели.
2. **Коротко:** Self-host ERP
   **Простыми словами:** Полный контур в Docker без SaaS.
   **Пример:** Пилот учёта на своей ВМ, не чужой подписке.
3. **Коротко:** Не картон
   **Простыми словами:** Заточено под filament/принты, не гофру.
   **Пример:** Брать паттерны, не копировать сущности 1-в-1.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #8 · [data3oil/factory-ontology](https://github.com/data3oil/factory-ontology)
⭐ 17 · обновлён 2 дн. назад

💡 **Что это**
factory-ontology — фреймворк Q&A по заводским данным: CSV/MES/ERP → семантический граф, ответы на естественном языке с доказательствами, данные локально.

🎯 **Зачем может подойти**
Интересен для команды, у которой куча таблиц (остатки, станки, заказы) и хочется спрашивать «сколько брака» без SQL. Для БОКСМАРТ — сильный прототип «справочник цеха», не готовый MES.

🛠 **Как применить**
1. **Коротко:** Спросить склад текстом
   **Простыми словами:** Бизнес задаёт вопрос, система отвечает с уликами.
   **Пример:** «Сколько рулонов крафт-лайнера?» без выгрузки в Excel.
2. **Коротко:** Данные не уезжают
   **Простыми словами:** Модель и ответы на своей площадке.
   **Пример:** Прайс и клиенты остаются внутри контура.
3. **Коротко:** Словарь отрасли
   **Простыми словами:** Меняется онтология под нишу.
   **Пример:** Подставить термины гофры вместо нефтяных.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #9 · [factorysemantics/factorysemantics-mes](https://github.com/factorysemantics/factorysemantics-mes)
⭐ 11 · обновлён 1 дн. назад

💡 **Что это**
FactorySemantics MES — модульный agent-native MES: OPC UA, OEE, качество/SPC, ТОиР, планирование, MCP-поверхность (~95 tools), коннектор ERPNext. Статус pre-alpha, симуляции.

🎯 **Зачем может подойти**
Редкий open-source MES с агентным API — смотреть как референс цеха и MCP-инструментов. Для продакшена рано (pre-alpha), но для изучения MES+агенты — высокая ценность.

🛠 **Как применить**
1. **Коротко:** Демо bottling
   **Простыми словами:** Поднять симуляцию линии и посмотреть OEE/остановки.
   **Пример:** Команда смотрит, как MES честно объясняет простой.
2. **Коротко:** MCP к цеху
   **Простыми словами:** Агент в Cursor дергает MES-tools.
   **Пример:** «Почему встала линия?» → tool по timeline останова.
3. **Коротко:** Pre-alpha
   **Простыми словами:** Не ставить на живой цех без ручного review.
   **Пример:** Пилот на песочнице, не на отгрузке.

🔒 **Безопасность**
Scorecard 5.4; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

### 📁 Telegram-боты

━━━━━━━━━━━━━━━━━━━━
### #10 · [backmeupplz/voicy](https://github.com/backmeupplz/voicy)
⭐ 914 · обновлён 0 дн. назад

💡 **Что это**
Voicy — Telegram-бот speech-to-text для голосовых в группах (код популярного @voicybot); локали EN/RU.

🎯 **Зачем может подойти**
Готовый паттерн бизнес-бота: голос менеджера → текст в чате. Для производства удобно в оперативных группах; не CRM сам по себе.

🛠 **Как применить**
1. **Коротко:** Голос → задача
   **Простыми словами:** Менеджер надиктовал — в чате появился текст.
   **Пример:** «Нужен тираж 5к FEFCO» не теряется в voice.
2. **Коротко:** Форк под себя
   **Простыми словами:** Открытый код, можно добавить свою ASR.
   **Пример:** Подключить локальный Whisper для чувствительных чатов.
3. **Коротко:** Не поддержка тикетов
   **Простыми словами:** Это транскрипция, не helpdesk.
   **Пример:** Дополняет support-bot, не заменяет.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #11 · [EdJoPaTo/grammy-inline-menu](https://github.com/EdJoPaTo/grammy-inline-menu)
⭐ 382 · обновлён 24 дн. назад

💡 **Что это**
grammy-inline-menu — библиотека inline-меню для Telegram-ботов на grammY (наследник telegraf-inline-menu).

🎯 **Зачем может подойти**
Ускоряет сборку бизнес-ботов с кнопками (статусы заказа, каталог, админка) на TypeScript. Это библиотека, не готовый бот.

🛠 **Как применить**
1. **Коротко:** Меню статусов
   **Простыми словами:** Кнопки вместо стены команд.
   **Пример:** Клиент жмёт «где заказ» → ветка статусов.
2. **Коротко:** Админ-панель в TG
   **Простыми словами:** Nested menus для операторов.
   **Пример:** Склад → материал → остаток.
3. **Коротко:** Со стеком grammY
   **Простыми словами:** Ставится рядом с grammy-ботом.
   **Пример:** Шаблон TS-бота + эта библиотека.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #12 · [nessshon/support-bot](https://github.com/nessshon/support-bot)
⭐ 135 · обновлён 5 дн. назад

💡 **Что это**
Support Bot — Telegram feedback-бот: у каждого пользователя свой topic в forum-группе, ответы админов двусторонние, очередь недоставленных, block/silent.

🎯 **Зачем может подойти**
Прямо под бизнес-поддержку без Zendesk: заявки клиентов в Telegram-группе команды. Высокая применимость для БОКСМАРТ.

🛠 **Как применить**
1. **Коротко:** Тикет = topic
   **Простыми словами:** Каждый клиент — отдельная ветка в группе.
   **Пример:** Вопрос по макету коробки не смешивается с другими.
2. **Коротко:** Двусторонняя переписка
   **Простыми словами:** Правки и реакции доходят обеим сторонам.
   **Пример:** Менеджер отвечает из группы — клиент видит в боте.
3. **Коротко:** Docker + Redis
   **Простыми словами:** Поднимается своим контуром.
   **Пример:** Self-host рядом с остальными ботами.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 Next.js и веб

━━━━━━━━━━━━━━━━━━━━
### #13 · [haoyiyin/basjoo](https://github.com/haoyiyin/basjoo)
⭐ 164 · обновлён 0 дн. назад

💡 **Что это**
Basjoo — open-source AI customer support: RAG-база, LLM-агенты, embeddable виджет; FastAPI + Next.js admin + Qdrant.

🎯 **Зачем может подойти**
Готовый контур «база знаний + чат на сайт» на Next.js. Подходит для витрины/калькулятора и FAQ по упаковке.

🛠 **Как применить**
1. **Коротко:** FAQ на сайт
   **Простыми словами:** Виджет отвечает из вашей базы, не из фантазии.
   **Пример:** «Какой FEFCO для…» из загруженных PDF.
2. **Коротко:** Админка Next.js
   **Простыми словами:** Управление агентами и индексацией в привычном стеке.
   **Пример:** Контент-менеджер обновляет статьи без деплоя бота.
3. **Коротко:** Self-host RAG
   **Простыми словами:** Векторы и доки у себя.
   **Пример:** Внутренние прайсы не в чужом helpdesk-SaaS.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #14 · [nextlyhq/nextly](https://github.com/nextlyhq/nextly)
⭐ 63 · обновлён 0 дн. назад

💡 **Что это**
Nextly — open-source CMS и visual page builder внутри Next.js: схема в TypeScript/админке, page builder, локализация, версии; alpha, self-hosted.

🎯 **Зачем может подойти**
Для лендингов и контентных страниц на Next.js без отдельного headless-CMS. Alpha — с осторожностью в прод.

🛠 **Как применить**
1. **Коротко:** Страницы в своём Next
   **Простыми словами:** CMS живёт в приложении, не на стороне.
   **Пример:** Посадочная «калькулятор коробок» правится редактором.
2. **Коротко:** Схема как код
   **Простыми словами:** Коллекции в TypeScript или визуально.
   **Пример:** Поле «материал» добавляет разработчик PR-ом.
3. **Коротко:** Alpha
   **Простыми словами:** API может меняться до 1.0.
   **Пример:** Пилот маркетинг-сайта, не критичный биллинг.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #15 · [Boom-Vitt/boombignose-erp](https://github.com/Boom-Vitt/boombignose-erp)
⭐ 53 · обновлён 1 дн. назад

💡 **Что это**
BoomBigNose ERP — AI-native Company OS на Next.js 16 + Supabase: CRM, сделки, проекты, финансы, автоматизация и дашборды (AGPL).

🎯 **Зачем может подойти**
Компактный ERP/CRM на знакомом стеке Next.js — удобный референс или старт внутренней системы. Заточен под THB/VAT; для BY нужна адаптация локализации.

🛠 **Как применить**
1. **Коротко:** Единая база студии
   **Простыми словами:** Продажи, склад и счета в одном Next-приложении.
   **Пример:** Пилот учёта заказов без зоопарка таблиц.
2. **Коротко:** Supabase RLS
   **Простыми словами:** Права на уровне строк из коробки.
   **Пример:** Менеджер видит свои сделки, не чужие.
3. **Коротко:** Локаль
   **Простыми словами:** Изначально Таиланд/VAT — править под BY.
   **Пример:** Заменить налоговые формы под местные правила.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: AGPL-3.0.

### 📁 Кибербезопасность

━━━━━━━━━━━━━━━━━━━━
### #16 · [falcosecurity/falcosidekick](https://github.com/falcosecurity/falcosidekick)
⭐ 697 · обновлён 1 дн. назад

💡 **Что это**
Falcosidekick — демон fan-out: принимает события Falco и шлёт их во множество интеграций (мессенджеры, SIEM, webhooks).

🎯 **Зачем может подойти**
Если уже смотрите runtime-безопасность контейнеров (Falco) — это клей до Telegram/Slack/алертов. Для БОКСМАРТ-инфры полезен как слой уведомлений.

🛠 **Как применить**
1. **Коротко:** Falco → Telegram
   **Простыми словами:** Подозрительный syscall → сообщение в группу.
   **Пример:** Shell в prod-контейнере — сразу пинг on-call.
2. **Коротко:** Много выходов
   **Простыми словами:** Один endpoint на несколько Falco и каналов.
   **Пример:** Дублировать в SIEM и в чат.
3. **Коротко:** Нужен Falco
   **Простыми словами:** Сам по себе не сканер.
   **Пример:** Ставить вместе с falco/falcoctl.

🔒 **Безопасность**
Scorecard 8.3; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #17 · [falcosecurity/falcoctl](https://github.com/falcosecurity/falcoctl)
⭐ 131 · обновлён 0 дн. назад

💡 **Что это**
falcoctl — официальный CLI экосистемы Falco: установка/управление правилами, плагинами и компонентами.

🎯 **Зачем может подойти**
Операционный инструмент, если внедряете Falco. Снижает ручную возню с артефактами; не заменяет WAF/secrets-scanner.

🛠 **Как применить**
1. **Коротко:** Поставить правила
   **Простыми словами:** CLI тянет и обновляет rulesets.
   **Пример:** Единый способ обновлять detection на нодах.
2. **Коротко:** Плагины
   **Простыми словами:** Управление экосистемными плагинами.
   **Пример:** Подключить нужный input без ручного копирования.
3. **Коротко:** Только ops Falco
   **Простыми словами:** Не универсальный security suite.
   **Пример:** Рядом с Trivy/gitleaks, не вместо.

🔒 **Безопасность**
Scorecard 7.8; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #18 · [falcosecurity/plugins](https://github.com/falcosecurity/plugins)
⭐ 120 · обновлён 0 дн. назад

💡 **Что это**
Реестр и monorepo плагинов Falco: каталог известных plugins + официальные плагины проекта.

🎯 **Зачем может подойти**
Справочник расширений runtime-detection. Полезен при выборе, чем кормить Falco (логи, облака, k8s).

🛠 **Как применить**
1. **Коротко:** Выбрать плагин
   **Простыми словами:** Смотреть реестр перед самописом.
   **Пример:** Нужен источник событий k8s audit — ищем в registry.
2. **Коротко:** Официальные сборки
   **Простыми словами:** Плагины с релизным процессом Falco.
   **Пример:** Меньше «случайных» бинарников с GitHub.
3. **Коротко:** Не standalone
   **Простыми словами:** Работает в связке с Falco.
   **Пример:** Читать docs plugins + falcoctl.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

### 📁 3D и печать

━━━━━━━━━━━━━━━━━━━━
### #19 · [Fluid-CAD/FluidCAD](https://github.com/Fluid-CAD/FluidCAD)
⭐ 673 · обновлён 0 дн. назад

💡 **Что это**
FluidCAD — open-source parametric CAD на JavaScript: GUI и код правят одну модель (sketch, extrude, patterns). Активная разработка, PR пока ограничены.

🎯 **Зачем может подойти**
Для прототипов оснастки/вкладышей и обучения параметрике в вебе. До зрелого SolidWorks далеко, но стек JS близок команде.

🛠 **Как применить**
1. **Коротко:** Параметрическая деталь
   **Простыми словами:** Меняешь размер — модель пересобирается.
   **Пример:** Вкладыш под другую высоту коробки.
2. **Коротко:** Код = модель
   **Простыми словами:** Можно править JS и видеть тот же файл.
   **Пример:** Повторить паттерн отверстий скриптом.
3. **Коротко:** Ранняя стадия
   **Простыми словами:** API ещё плывёт.
   **Пример:** Пилоты, не единственный CAD на цехе.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #20 · [DrunkOnJava/rvt-rs](https://github.com/DrunkOnJava/rvt-rs)
⭐ 73 · обновлён 0 дн. назад

💡 **Что это**
rvt-rs — clean-room читатель файлов Autodesk Revit без Revit: метаданные, элементы, экспорт IFC/glTF/SVG/CSV; CLI, Rust/Python и browser viewer.

🎯 **Зачем может подойти**
Если появляются BIM/Revit-модели помещений складов/офисов — можно смотреть и выгружать без лицензии Revit. К 3D-печати коробок слабо; к инфраструктуре зданий — сильно.

🛠 **Как применить**
1. **Коротко:** Открыть .rvt в браузере
   **Простыми словами:** Дропнул файл — увидел модель.
   **Пример:** Быстрый взгляд на план склада от подрядчика.
2. **Коротко:** Экспорт IFC/glTF
   **Простыми словами:** Унести геометрию в открытые форматы.
   **Пример:** Передать фрагмент в свой viewer.
3. **Коротко:** Не слайсер
   **Простыми словами:** Это BIM-reader, не печать.
   **Пример:** Не путать с OrcaSlicer/OpenSCAD.

🔒 **Безопасность**
Scorecard 7.9; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #21 · [andymai/occt-wasm](https://github.com/andymai/occt-wasm)
⭐ 66 · обновлён 0 дн. назад

💡 **Что это**
occt-wasm — OpenCascade (OCCT) в WebAssembly с TypeScript API: компактный бандл, arena memory; база для браузерного CAD (см. также brepjs).

🎯 **Зачем может подойти**
Низкоуровневый кирпич для веб-калькулятора/превью 3D-геометрии на Next.js. Сам по себе не UI CAD — библиотека ядра.

🛠 **Как применить**
1. **Коротко:** BREP в браузере
   **Простыми словами:** Считать твёрдые тела без нативного OCCT.
   **Пример:** Превью высечки на лендинге калькулятора.
2. **Коротко:** Свой CAD UI
   **Простыми словами:** Надстройка (brepjs) или свой фронт.
   **Пример:** Параметрическая коробка в TypeScript.
3. **Коротко:** Лицензии WASM
   **Простыми словами:** Смотреть LGPL на wasm-выход.
   **Пример:** Юрист/лицензии перед коммерческим бандлом.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

### 📁 Музыкальное производство

━━━━━━━━━━━━━━━━━━━━
### #22 · [zrythm/zrythm](https://github.com/zrythm/zrythm)
⭐ 3171 · обновлён 0 дн. назад

💡 **Что это**
Zrythm — свободная DAW (C++23, Qt/QML, JUCE): клипы, автоматизация, микс, chord tools, плагины; официальный mirror.

🎯 **Зачем может подойти**
Полноценная open-source DAW для электронного продакшена без подписки. Прямо под интерес «музыкальное производство».

🛠 **Как применить**
1. **Коротко:** Домашняя студия
   **Простыми словами:** Писать и сводить без proprietary DAW.
   **Пример:** Скетч трека вечером на Linux/Win/macOS.
2. **Коротко:** Автоматизация
   **Простыми словами:** Гибкие automation lanes.
   **Пример:** Движение фильтра на весь дроп.
3. **Коротко:** Плагины
   **Простыми словами:** Поддержка распространённых форматов (см. docs).
   **Пример:** Свой VST-стек рядом с штатными tools.

🔒 **Безопасность**
Scorecard 2.8; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #23 · [joakimeriksson/fm1-emu](https://github.com/joakimeriksson/fm1-emu)
⭐ 89 · обновлён 0 дн. назад

💡 **Что это**
Эмулятор карманного FM-сина M-VAVE FM-1: прошивки сообщества бегут в браузере/нативе и как AU/VST3 без железа.

🎯 **Зачем может подойти**
Игрушечный/обучающий FM и кастомные firmware без покупки девайса. Узкая ниша, но честный open synth-проект.

🛠 **Как применить**
1. **Коротко:** Пробовать firmware
   **Простыми словами:** Открыл страницу — поиграл.
   **Пример:** Сравнить drum-machine прошивки до прошивки железа.
2. **Коротко:** VST3 в DAW
   **Простыми словами:** Эмулятор как инструмент в сессии.
   **Пример:** Положить FM-1 рядом с Zrythm/другой DAW.
3. **Коротко:** Узкий девайс
   **Простыми словами:** Не универсальный synth framework.
   **Пример:** Хобби/обучение, не замена Serum.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #24 · [Ka1-S/LYNX](https://github.com/Ka1-S/LYNX)
⭐ 50 · обновлён 0 дн. назад

💡 **Что это**
LYNX — лёгкая open-source DAW на C++20/JUCE с workflow в духе FL Studio (Channel Rack, Piano Roll, Playlist, Mixer), свои плагины и fallback.

🎯 **Зачем может подойти**
Ещё один свободный DAW-кандидат ближе к FL-привычкам. Ранний проект — смотреть статус/roadmap перед опорой в работе.

🛠 **Как применить**
1. **Коротко:** FL-подобный workflow
   **Простыми словами:** Channel Rack + Piano Roll без пиратского FL.
   **Пример:** Набросать бит в знакомой раскладке.
2. **Коротко:** Кроссплатформа
   **Простыми словами:** Win/macOS/Linux.
   **Пример:** Один проект на ноуте и десктопе.
3. **Коротко:** Ранняя версия
   **Простыми словами:** Сверять roadmap и баги.
   **Пример:** Параллельно держать Zrythm/другую DAW.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: AGPL-3.0.

### 📁 Коммерческие SaaS-заготовки

━━━━━━━━━━━━━━━━━━━━
### #25 · [Blazity/next-saas-starter](https://github.com/Blazity/next-saas-starter)
⭐ 1702 · обновлён 1 дн. назад

💡 **Что это**
Бесплатный Next.js шаблон маркетингового сайта для SaaS: лендинг, SEO/Web Vitals, чистый Jamstack-код (не полный billing-boilerplate).

🎯 **Зачем может подойти**
Быстрый старт лендинга продукта/калькулятора. Это marketing starter, не multi-tenant billing — честно слабее как «полный SaaS».

🛠 **Как применить**
1. **Коротко:** Лендинг за день
   **Простыми словами:** Секции, SEO и перф из коробки.
   **Пример:** Страница нового B2B-сервиса упаковки.
2. **Коротко:** Vercel-friendly
   **Простыми словами:** Статичный/Jamstack деплой.
   **Пример:** Превью на Vercel для маркетинга.
3. **Коротко:** Не биллинг
   **Простыми словами:** Нет Stripe/teams из коробки.
   **Пример:** Дополнять отдельным SaaS-boilerplate.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #26 · [alan345/AI-Fullstack-SaaS-Boilerplate](https://github.com/alan345/AI-Fullstack-SaaS-Boilerplate)
⭐ 1438 · обновлён 1 дн. назад

💡 **Что это**
Fullstack SaaS boilerplate с AI: Fastify + tRPC + React, чат/агентные заготовки, демо на Render.

🎯 **Зачем может подойти**
Стартовая кодовая база под свой SaaS с AI-фичами. Не Next.js App Router — React+Fastify; для команды на Next.js — референс API/tRPC.

🛠 **Как применить**
1. **Коротко:** Каркас SaaS+AI
   **Простыми словами:** Auth/API/чат уже связаны.
   **Пример:** Прототип «ассистент по заказу».
2. **Коротко:** tRPC end-to-end
   **Простыми словами:** Типы от сервера до клиента.
   **Пример:** Меньше рассинхрона DTO прайса.
3. **Коротко:** Другой фронт-стек
   **Простыми словами:** Не Next.js starter.
   **Пример:** Брать идеи, или мигрировать под Next отдельно.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #27 · [saaspegasus/django-boilerplate](https://github.com/saaspegasus/django-boilerplate)
⭐ 177 · обновлён 1 дн. назад

💡 **Что это**
Open-source edition SaaS Pegasus: Django 6 foundation с auth и современным фронтом; Pro добавляет Stripe/teams (здесь — бесплатная база).

🎯 **Зачем может подойти**
Если допустим Django — зрелый каркас SaaS. Для строгого Next.js/Vercel стека применимость средняя (другой бэкенд).

🛠 **Как применить**
1. **Коротко:** Быстрый Django SaaS
   **Простыми словами:** Регистрация и структура проекта готовы.
   **Пример:** Внутренний кабинет клиента на Django.
2. **Коротко:** AI-era структура
   **Простыми словами:** Заточено под работу с агентами-кодерами.
   **Пример:** Агент в Cursor продолжает конвенции Pegasus.
3. **Коротко:** Pro отдельно
   **Простыми словами:** Биллинг/multi-tenant — в платной версии.
   **Пример:** Сначала OSS, потом решение по Pro.

🔒 **Безопасность**
Scorecard нет данных; fake stars — нет данных (API stargazers 403); скам-маркеров не найдено. Лицензия: MIT.

## ⛔ Отклонённые

| # | Категория | Репозиторий | Описание | Причина |
|---|-----------|-------------|----------|---------|
| — | AI-агенты и LLM | [hahwul/gori](https://github.com/hahwul/gori) | A fast, keyboard-driven HTTP intercepting proxy and hacking & pentesting toolkit | релевантность: proxy/VPN list |
| — | AI-агенты и LLM | [MiniMax-AI/OpenAgentCore](https://github.com/MiniMax-AI/OpenAgentCore) | The OpenAI Agents API, open source and self-hosted. Run Codex, Claude Code or Mi | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | AI-агенты и LLM | [xerj-org/xerj](https://github.com/xerj-org/xerj) | Local-first search engine and MCP server for AI agents. One Rust binary indexes  | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [UCS-Care-Group/mailcraft](https://github.com/UCS-Care-Group/mailcraft) | MailCraft: an open-source, clean-room mail, calendar and contacts program in pur | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [n8n-io/n8n](https://github.com/n8n-io/n8n) | Fair-code workflow automation platform with native AI capabilities. Combine visu | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [hproxy-com/free-proxy-list](https://github.com/hproxy-com/free-proxy-list) | Free proxy list, verified around the clock: HTTP, HTTPS, SOCKS4 and SOCKS5 proxi | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [PostHog/posthog](https://github.com/PostHog/posthog) | :hedgehog: PostHog is the leading platform for building self-driving products. O | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [foxminchan/BookWorm](https://github.com/foxminchan/BookWorm) | An Aspire reference architecture for cloud-native microservices and agentic AI w | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [siddsachar/row-bot](https://github.com/siddsachar/row-bot) | Row-Bot - Personal AI Sovereignty. A local-first AI assistant with integrated to | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [nocobase/nocobase](https://github.com/nocobase/nocobase) | NocoBase is an open-source AI + no-code platform for building business systems f | слой2: Dangerous-Workflow=0 при stars≥500 |
| — | Автоматизация бизнеса | [espoon-voltti/evaka](https://github.com/espoon-voltti/evaka) | eVaka – ERP for early childhood education  | релевантность: вне business/CRM контекста |
| — | Автоматизация бизнеса | [Panelica/pnlcs](https://github.com/Panelica/pnlcs) | 🧾 Open-source WHMCS alternative — self-hosted hosting billing & client portal. L | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [KoalixSwitzerland/koalixcrm](https://github.com/KoalixSwitzerland/koalixcrm) | koalixcrm is an Open Source Python CRM and ERP based on django | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [iota-uz/iota-sdk](https://github.com/iota-uz/iota-sdk) | IOTA-SDK - is an open-source modular ERP. An alternative to SAP, Oracle, Odoo wr | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [DRYTRIX/TimeTracker](https://github.com/DRYTRIX/TimeTracker) | Self-hosted time tracking & invoicing for freelancers and teams: timers, project | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [obeli-sk/obelisk](https://github.com/obeli-sk/obelisk) | Durable & Deterministic Workflow Engine | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [elsa-workflows/elsa-core](https://github.com/elsa-workflows/elsa-core) | The Workflow Engine for .NET | лимит: уже 3 допущенных в категории |
| — | Автоматизация бизнеса | [pdovhomilja/nextcrm-app](https://github.com/pdovhomilja/nextcrm-app) | NextCRM — Open-source CRM built with Next.js 16, React 19, PostgreSQL, Prisma 7, | лимит: уже 3 допущенных в категории |
| — | Упаковка и производство | [RameenMughal/TryHackMeWriteups](https://github.com/RameenMughal/TryHackMeWriteups) | List of free Try Hack Me Rooms with Notes and Writeups for CTFs categorized with | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [ShakataGaNai/awesome-meshtastic](https://github.com/ShakataGaNai/awesome-meshtastic) | A curated list of amazingly awesome Meshtastic resources | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [serhii-londar/open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) | 🚀 Awesome list of open source applications for macOS. https://t.me/s/opensourcem | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [paulpogoda/OSINT-Tools-Kazakhstan](https://github.com/paulpogoda/OSINT-Tools-Kazakhstan) | I have compiled a list of OSINT tools that may be useful to you when conducting  | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [SignalGap/awesome-meshtastic](https://github.com/SignalGap/awesome-meshtastic) | A curated list of useful resources, tools, tutorials, projects, and community co | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [porkcube/meshtastic-diy-nodes](https://github.com/porkcube/meshtastic-diy-nodes) | an awesome list of Meshtastic DIY nodes, PR additions welcome! | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [bobeezy/Video-Store-ATM-Point-Of-Sale-System](https://github.com/bobeezy/Video-Store-ATM-Point-Of-Sale-System) | “My name is Gregory Guy. I have just purchased a video store, and I need an up t | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [mhollink/mesbg-list-builder-v2024](https://github.com/mhollink/mesbg-list-builder-v2024) | (2024 Edition - Unoffiicial) A simple and intuitive tool for building your army  | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [amerfathullah/MyERP](https://github.com/amerfathullah/MyERP) | Full-featured ERP system built with .NET 10, ABP.IO 10.5, Angular 21, and Postgr | лимит: уже 3 допущенных в категории |
| — | Telegram-боты | [pinn-shost/pinn](https://github.com/pinn-shost/pinn) | Self-hosted family organizer for your NAS – shared calendar, meal planning, shop | релевантность: не telegram |
| — | Telegram-боты | [ulsklyc/yuvomi](https://github.com/ulsklyc/yuvomi) | One home instead of many subscriptions. Yuvomi is a self-hosted family planner:  | релевантность: не telegram |
| — | Telegram-боты | [xataio/examples](https://github.com/xataio/examples) | Your one-stop-shop to try Xata out. From packages to apps, whatever you need to  | релевантность: не telegram |
| — | Telegram-боты | [pimcore/pimcore](https://github.com/pimcore/pimcore) | Core Framework for the Open Core Data & Experience Management Platform (PIM, MDM | релевантность: не telegram |
| — | Telegram-боты | [unchainedshop/unchained](https://github.com/unchainedshop/unchained) | High-Performance Headless Node.js ESM E-Commerce Framework | релевантность: не telegram |
| — | Telegram-боты | [SahtoutDev/SahtoutCMS](https://github.com/SahtoutDev/SahtoutCMS) | SahtoutCMS is a free Website CMS made for World of Warcraft private servers. Wor | релевантность: не telegram |
| — | Telegram-боты | [Ankitsingh099/Roblox-Shop-Forge](https://github.com/Ankitsingh099/Roblox-Shop-Forge) | Roblox Shop System Template 2026: Secure Inventory and Server-Validated Purchase | релевантность: не telegram |
| — | Telegram-боты | [melogabriel/tinfoil-shops-status](https://github.com/melogabriel/tinfoil-shops-status) | Tinfoil shops status. Check which tinfoil shops hosts are active and working for | релевантность: не telegram |
| — | Telegram-боты | [grandnode/grandnode2](https://github.com/grandnode/grandnode2) | Open-source eCommerce platform for C# and ASP.NET Core 10 with MongoDB. Build mu | релевантность: не telegram |
| — | Telegram-боты | [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop) | The most comprehensive DeepSeek Harness plugin market — refreshed daily, sourced | релевантность: не telegram |
| — | Telegram-боты | [activecarde-a11y/edd-multilingual-lingua-shop](https://github.com/activecarde-a11y/edd-multilingual-lingua-shop) | EDD Multilingual for WooCommerce 2026: Multi-Language Digital Shop & Delivery Sy | релевантность: не telegram |
| — | Telegram-боты | [Setiawan007/Shopee-Flashsale-BOT](https://github.com/Setiawan007/Shopee-Flashsale-BOT) |  | релевантность: не telegram |
| — | Next.js и веб | [lissy93/domain-locker](https://github.com/lissy93/domain-locker) | 🌐 The all-in-one tool, for keeping track of your domain name portfolio. Got doma | лимит: уже 3 допущенных в категории |
| — | Next.js и веб | [rameerez/profitable](https://github.com/rameerez/profitable) | 💸 Calculate the MRR, ARR, TTM, churn, LTV, ARPU, total revenue & valuation of yo | лимит: уже 3 допущенных в категории |
| — | Next.js и веб | [viewflow/seedkit](https://github.com/viewflow/seedkit) | Build any Django app — from a SaaS to a dashboard to an API — from a single sent | лимит: уже 3 допущенных в категории |
| — | Next.js и веб | [DashboardPack/architectui-vue-theme-free](https://github.com/DashboardPack/architectui-vue-theme-free) | ArchitectUI Vue Lite is a minimal admin dashboard template. It features a simple | лимит: уже 3 допущенных в категории |
| — | Next.js и веб | [coralsio/laraship](https://github.com/coralsio/laraship) | Laraship is a Platform built on Laravel for Rapid Development, it helps Agents,  | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [falconry/falcon](https://github.com/falconry/falcon) | The no-magic web API and microservices framework for Python developers, with a f | релевантность: слабый security сигнал |
| — | Кибербезопасность | [aquasecurity/trivy-operator](https://github.com/aquasecurity/trivy-operator) | Kubernetes-native security toolkit | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [aquasecurity/trivy-db](https://github.com/aquasecurity/trivy-db) |  | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [CrowdStrike/falcon-mcp](https://github.com/CrowdStrike/falcon-mcp) | Connect AI agents to CrowdStrike Falcon for automated security analysis and thre | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [hhftechnology/vps-monitor](https://github.com/hhftechnology/vps-monitor) | A lightweight, Go-based VPS monitoring solution with real-time web dashboard sup | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [FalconForceTeam/FalconFriday](https://github.com/FalconForceTeam/FalconFriday) | Hunting queries and detections | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [falcosecurity/rules](https://github.com/falcosecurity/rules) | Falco rule repository | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [Picovoice/falcon](https://github.com/Picovoice/falcon) | On-device speaker diarization powered by deep learning | лимит: уже 3 допущенных в категории |
| — | Кибербезопасность | [raoulx24/trivy-operator-dashboard](https://github.com/raoulx24/trivy-operator-dashboard) | Trivy Operator Dashboard: A comprehensive tool for Trivy Operator. Offers variou | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Give your agent CAD superpowers. | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | SolidCraft: an open-source parametric 3D CAD application built in pure Rust. Des | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [fanhao375/microduck-replica](https://github.com/fanhao375/microduck-replica) | Microduck 复刻：飞特 HD-1910 整机已实机验证（站立、行走、前滚翻起身）。镜像、Studio 网页中控、CAD/BOM、装配教程、电路工程与训练 | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [mlightcad/cad-viewer](https://github.com/mlightcad/cad-viewer) | The world’s first fully web-based DXF/DWG viewer and editor that runs entirely i | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [PhySpace/SimpleCADAPI](https://github.com/PhySpace/SimpleCADAPI) | An agent-native CAD SDK for language models to create, inspect, and reconstruct  | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [chisomobanzi/Serpentine3D](https://github.com/chisomobanzi/Serpentine3D) | Open-source NURBS surface modeller — a Rhino-style freeform modeller on the Open | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [wangyao1052/Yi3D](https://github.com/wangyao1052/Yi3D) | Yi3D: an open-source parametric 3D CAD application built in c++. | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [tomatorigid/PCB_lightgraph](https://github.com/tomatorigid/PCB_lightgraph) | PCB_lightgraph is a specialized CAD utility that converts illustrations into mul | лимит: уже 3 допущенных в категории |
| — | 3D и печать | [drandyhaas/KiCadRoutingTools](https://github.com/drandyhaas/KiCadRoutingTools) | A set of Python/Rust tools to aid routing in KiCad | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [praveen14143/SampleTank-4-Sound-Library-Setup](https://github.com/praveen14143/SampleTank-4-Sound-Library-Setup) | IK Multimedia SampleTank 4 Full Version Installer for Windows 2026 | релевантность: warez/landing |
| — | Музыкальное производство | [rashedbp2024-sudo/Sylenth-Sound-Forge](https://github.com/rashedbp2024-sudo/Sylenth-Sound-Forge) | Sylenth1 VST for Windows 11 and 10: 2026 Install and Setup Guide | релевантность: warez/landing |
| — | Музыкальное производство | [williamchristian273/Reason-Studio-Rack-Toolkit](https://github.com/williamchristian273/Reason-Studio-Rack-Toolkit) | Top Reason Studios Rack DAW Plugins & Workflow Tools 2026 | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [song39641-spec/Reaper-DAW-Workstation-Pro](https://github.com/song39641-spec/Reaper-DAW-Workstation-Pro) | Cockos REAPER Pro 2026 Free Download Full Version Lightweight Audio DAW | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [rizki-haridputra/Melody-Forge-Engine](https://github.com/rizki-haridputra/Melody-Forge-Engine) | AI-Powered Music Production & Live Coding Software 2026 | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [xoofx/NPlug](https://github.com/xoofx/NPlug) | Develop VST3 audio native plugins with .NET | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [supriya-project/supriya](https://github.com/supriya-project/supriya) | A Python API for SuperCollider | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [dawnop/dawn-lang](https://github.com/dawnop/dawn-lang) | Self-hosted functional language with explicit effects. Compiles to JVM bytecode, | лимит: уже 3 допущенных в категории |
| — | Музыкальное производство | [vesaaa/vsterm](https://github.com/vesaaa/vsterm) | Cross-platform SSH terminal in native Rust — WindTerm + Termius + FinalShell str | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [speedpy/speedpy](https://github.com/speedpy/speedpy) | Free, MIT-licensed Django SaaS boilerplate for the AI era — production-ready API | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [EinGuterWaran/awesome-opensource-boilerplates](https://github.com/EinGuterWaran/awesome-opensource-boilerplates) | A curated list of production-ready and free SaaS boilerplates and starter templa | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [convex/ents-saas-starter](https://github.com/convex/ents-saas-starter) | Convex, Clerk, Next.js, Convex Ents | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [liberusoftware/boilerplate-laravel](https://github.com/liberusoftware/boilerplate-laravel) | Laravel 13, PHP 8.5, Filament 5 and Livewire 4 SaaS boilerplate application with | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [cangeorgecode/Django_Boilerplate_Free](https://github.com/cangeorgecode/Django_Boilerplate_Free) | A free Django SaaS Boilerplate. Get the paid version here 👇 | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [yezz123/ai-template](https://github.com/yezz123/ai-template) | Multi-tenant SaaS boilerplate built on FastAPI & Authx :sparkles: | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [fogbender/b2b-saaskit](https://github.com/fogbender/b2b-saaskit) | B2B SaaS Starter Kit - create a B2B web app: quickly and for free | лимит: уже 3 допущенных в категории |
| — | Коммерческие SaaS-заготовки | [XCO-Agency/Laravel-SAAS-Starter](https://github.com/XCO-Agency/Laravel-SAAS-Starter) | Laravel SAAS Starter kit | лимит: уже 3 допущенных в категории |
| — | AI-агенты и LLM | [nucliweb/webperf-snippets](https://github.com/nucliweb/webperf-snippets) | Tested JavaScript snippets that measure and debug web performance. Your AI agent | релевантность: webperf snippets; слабее как agent platform |
| — | Упаковка и производство | [TheFilipcom4607/tabor](https://github.com/TheFilipcom4607/tabor) | TABOR: a Pokédex for Warsaw's buses and trams. An iOS app that reads a vehicle's | релевантность: die-cut в метафоре (Warsaw bus Pokédex), не производство |
| — | Next.js и веб | [DoliCloud/SellYourSaas](https://github.com/DoliCloud/SellYourSaas) | Sell-Your-Saas is an Open Source solution to automate and sell any Web applicati | релевантность: Dolibarr SaaS reseller, не Next.js starter |
| — | Next.js и веб | [miroslavpejic85/mirotalkwebrtc](https://github.com/miroslavpejic85/mirotalkwebrtc) | 🛠 Open-source, self-hosted WebRTC SaaS platform and video meeting scheduler. Pro | релевантность: WebRTC meetings, слабый Next.js сигнал |
| — | 3D и печать | [tangency-labs/solidcore](https://github.com/tangency-labs/solidcore) | A Rust port of NVIDIA's SMLib B-rep kernel (CAD subset): safe, deterministic, wa | релевантность: низкоуровневый B-rep kernel; заменён на solidcraft |
| — | Музыкальное производство | [akinlayomartins/Tracktion-Waveform-Setup-Guide](https://github.com/akinlayomartins/Tracktion-Waveform-Setup-Guide) | Tracktion Waveform DAW Setup Guide for Windows 11 and 10 in 2026 | релевантность: warez/setup-landing 2026 |
| — | Упаковка и производство | [ryankembrey/FreeCAD-DFM-Workbench](https://github.com/ryankembrey/FreeCAD-DFM-Workbench) | Design for Manufacturing Workbench for FreeCAD | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [ContributionRich/Narwhal3D](https://github.com/ContributionRich/Narwhal3D) | Free, open-source, command-driven NURBS CAD with exact manufacturing geometry | релевантность: нет manufacturing/packaging сигнала |
| — | Упаковка и производство | [partcad/partcad](https://github.com/partcad/partcad) | Package manager for things. Start designing modular hardware! PartCAD is the sta | релевантность: нет manufacturing/packaging сигнала |
