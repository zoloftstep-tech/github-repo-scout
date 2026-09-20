# Дайджест репозиториев — 2026-09-20

Кратко: рекомендовано 27 / отклонено 124 в 9 категориях.
Окно прогона: старт 2026-09-20 17:03 / публикация 2026-09-20 17:11 (Minsk).

## Рекомендованные

### AI-агенты и LLM

#### [1f916-ai/1f916](https://github.com/1f916-ai/1f916) — ⭐ 75, обновлён 0 дн. назад
**Что это:** Экспериментальная платформа «общества» AI-агентов без человеческого UI: агенты взаимодействуют между собой через собственные интерфейсы/протоколы. README описывает agent-to-agent среду, а не готовый бизнес-продукт.

**Почему может подойти:** Полезно как исследование multi-agent паттернов; для БОКСМАРТ применимость слабая — нет готового CRM/калькулятора. Имеет смысл смотреть идеи оркестрации, не внедрять as-is.

**Кейсы использования:**
1. Изучить паттерны общения агентов без человека в контуре.
2. Сравнить с self-hosted оркестраторами вроде 5dive.
3. Не ставить в прод без отдельного security review (AGPL-3.0).

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

#### [5dive-ai/5dive](https://github.com/5dive-ai/5dive) — ⭐ 60, обновлён 0 дн. назад
**Что это:** Self-hosted runtime для «компании» AI-агентов на своём сервере: именованные агенты (Claude Code, Codex и др.), оргструктура, общий backlog, handoff между агентами; человека пингуют только когда нужно решение. MIT.

**Почему может подойти:** Прямо под стек Ростислава (Cursor/Claude Code) и сценарий one-person company: агенты ведут задачи по упаковке/ботам/вебу, эскалируя только решения.

**Кейсы использования:**
1. Поднять на VPS очередь задач по доработкам калькулятора упаковки.
2. Разделить роли: код / ревью / документация с handoff.
3. Настроить уведомления только на human-in-the-loop шаги.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

#### [ZSeven-W/rish-app](https://github.com/ZSeven-W/rish-app) — ⭐ 135, обновлён 0 дн. назад
**Что это:** Local-first мобильный клиент AI-агентов (iOS/Android): workspace, выполнение с approvals, выбор модели (DSH, Claude Code, Codex, GLM). README позиционирует как «pocket agent».

**Почему может подойти:** Удобно контролировать агентов с телефона вне рабочего Mac — для выездов на производство/склад. Не замена десктопному Cursor, а мобильный пульт.

**Кейсы использования:**
1. Approve/reject действий агента по дороге.
2. Быстрый запрос статуса задач без ноутбука.
3. Тест local-first агентов на устройстве без облачного UI.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

### Автоматизация бизнеса

#### [macro-inc/macro](https://github.com/macro-inc/macro) — ⭐ 4364, обновлён 0 дн. назад
**Что это:** Open-source unified workspace: почта, чат, доки, задачи, звонки, CRM и агенты с общей AI-памятью (Rust/TS). Альтернатива связке Slack+Notion+CRM.

**Почему может подойти:** Закрывает интерес к CRM и автоматизации в одном контуре; для малого производства может заменить разрозненные чаты/таблицы, но миграция почты/CRM — отдельный проект. AGPL-3.0.

**Кейсы использования:**
1. Пилот внутреннего workspace для менеджеров БОКСМАРТ.
2. CRM-карточки клиентов рядом с перепиской и задачами.
3. Оценить agent memory для типовых запросов по заказам.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

#### [erp-mafia/accounted](https://github.com/erp-mafia/accounted) — ⭐ 369, обновлён 0 дн. назад
**Что это:** Agent-native open-source ERP: учёт/операции рассчитаны на работу через AI-агентов, а не только классические формы (по README/описанию).

**Почему может подойти:** Интересен как лёгкая альтернатива тяжёлому Odoo для экспериментов «ERP + агенты»; зрелость экосистемы ниже классических ERP — пилот, не мгновенная замена.

**Кейсы использования:**
1. Прототип учёта заказов/складских движений с агентным UI.
2. Сравнить модель данных с ObjectStack/Odoo.
3. Проверить лицензию (NOASSERTION в GitHub) перед коммерческим использованием.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

#### [objectstack-ai/objectstack](https://github.com/objectstack-ai/objectstack) — ⭐ 63, обновлён 0 дн. назад
**Что это:** Metadata-driven платформа: data model, UI, workflows и permissions как типизированные метаданные; заявлен полный CRM в одном context window для агентов. Apache-2.0.

**Почему может подойти:** Сильный fit к идее «агенты правят бизнес-приложением»: можно описать заказы/КП/статусы упаковки компактно и дать агенту рефакторить целиком.

**Кейсы использования:**
1. Собрать тонкий CRM заказов гофротары на метаданных.
2. Дать агенту читать всю модель приложения целиком.
3. Прототип permissions для менеджер/производство.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

### Упаковка и производство

#### [qcadoo/mes](https://github.com/qcadoo/mes) — ⭐ 941, обновлён 2 дн. назад
**Что это:** qcadoo MES — веб-система управления производством (Manufacturing Execution): заказы, технологии, цеховой учёт. Дружелюбный open-source MES.

**Почему может подойти:** Прямое попадание в производство упаковки: MES нужен для тиражей, смен, статусов на цехе — ближе к БОКСМАРТ, чем generic CRM.

**Кейсы использования:**
1. Пилот учёта производственных заказов на гофроящики.
2. Связка статусов «в работе / готово / отгружено».
3. Оценить, хватает ли модулей под раскрой/спецификации.

**Проверка безопасности:** Scorecard score=3; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

#### [celerp/celerp](https://github.com/celerp/celerp) — ⭐ 31, обновлён 0 дн. назад
**Что это:** Self-hosted desktop ERP для операций бизнеса: модульное ядро, MIT-модули, без обязательного облака (по описанию).

**Почему может подойти:** Лёгкий ERP без тяжёлого веб-внедрения; подходит для пробы контуров склад/продажи на локальной машине. Звёзд мало — смотреть активность и модули внимательно.

**Кейсы использования:**
1. Локальный пилот склада и продаж.
2. Сравнить модульность с NotrinosERP/qcadoo.
3. Проверить, есть ли manufacturing-модули под тиражи.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

#### [notrinos/NotrinosERP](https://github.com/notrinos/NotrinosERP) — ⭐ 161, обновлён 0 дн. назад
**Что это:** Веб-ERP на PHP/MySQL: CRM, продажи, закупки, склад, производство, payroll; multi-user, multi-currency, workflow согласований.

**Почему может подойти:** Классический self-hosted ERP с manufacturing — реалистичный кандидат на контур ООО «БОКСМАРТ», если не тянуть полный Odoo.

**Кейсы использования:**
1. Склад готовой упаковки и отгрузки.
2. CRM B2B-клиентов и КП.
3. Manufacturing под спецификации тиражей.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: GPL-3.0.

### Telegram-боты

#### [fedorabakumets/telegram-bot-builder](https://github.com/fedorabakumets/telegram-bot-builder) — ⭐ 35, обновлён 2 дн. назад
**Что это:** Визуальный drag-and-drop конструктор Telegram-ботов: генерирует Python/aiogram код. React+TS frontend, Express, PostgreSQL; медиа, клавиатуры, ветвления, аналитика.

**Почему может подойти:** Быстро собрать бота уведомлений/поддержки для клиентов БОКСМАРТ без ручного каркаса aiogram; код можно допилить в Cursor.

**Кейсы использования:**
1. Бот статуса заказа для клиентов.
2. Внутренние алерты менеджерам о готовности тиража.
3. Прототип FAQ по типам упаковки с клавиатурами.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

#### [kirillDevPro/cloud-control-bot](https://github.com/kirillDevPro/cloud-control-bot) — ⭐ 35, обновлён 6 дн. назад
**Что это:** Telegram-бот мониторинга и управления облачными серверами (Vultr/Hetzner/AWS): uptime, start/stop/reboot, балансы и costs, multi-account, RU/EN.

**Почему может подойти:** Практично для инфраструктуры (Vercel/VPS рядом с ботами и CRM): контроль с телефона и затрат. Не клиентский shop-бот, а ops-инструмент.

**Кейсы использования:**
1. Алерты падения VPS с ботом/CRM.
2. Ребут инстанса из Telegram.
3. Контроль расходов Hetzner/AWS.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

#### [danog/MadelineProto](https://github.com/danog/MadelineProto) — ⭐ 3518, обновлён 0 дн. назад
**Что это:** Зрелый async PHP MTProto API-клиент для Telegram: низкоуровневая работа с API (не только Bot API), боты и userbots.

**Почему может подойти:** Если нужен PHP-стек или сценарии шире Bot API — база для кастомных интеграций. Для типичного aiogram/TS-бота может быть избыточен.

**Кейсы использования:**
1. PHP-сервис уведомлений в Telegram.
2. Интеграция ERP → Telegram без Bot-only ограничений.
3. Изучить MTProto-паттерны перед выбором стека.

**Проверка безопасности:** Scorecard score=5.9; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

### Next.js и веб

#### [SenteLabsAI/OpenExecutive](https://github.com/SenteLabsAI/OpenExecutive) — ⭐ 5045, обновлён 0 дн. назад
**Что это:** AI «виртуальный executive team»: единая executive-персона на базе нескольких specialist-агентов (по описанию репозитория).

**Почему может подойти:** Идея «совета директоров из агентов» полезна для приоритизации продуктов БОКСМАРТ; проверять, есть ли Next.js/self-host и какие ключи/облака требуются. Применимость к коду — косвенная.

**Кейсы использования:**
1. Еженедельный разбор приоритетов продуктов через агентов.
2. Сценарии go-to-market для новых SKU упаковки.
3. Сравнить с self-hosted 5dive по контролю данных.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

#### [spree/storefront](https://github.com/spree/storefront) — ⭐ 62, обновлён 0 дн. назад
**Что это:** Open-source Next.js storefront для Spree Commerce: DTC и B2B, Stripe/Adyen/PayPal, multi-region, one-page checkout. MIT.

**Почему может подойти:** Готовый Next.js B2B/DTC витринный каркас под возможный e-commerce упаковки; стыкуется с интересом к Next/Vercel.

**Кейсы использования:**
1. Витрина стандартных коробок с checkout.
2. B2B-каталог для постоянных клиентов.
3. Основа для кастомного калькулятора на App Router.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

#### [eren23/openflipbook](https://github.com/eren23/openflipbook) — ⭐ 197, обновлён 0 дн. назад
**Что это:** Open-source клон flipbook.page на Next.js + FastAPI: страницы — AI-иллюстрации, интерактивное углубление. BYO API keys.

**Почему может подойти:** Слабая прямая связь с упаковкой/CRM; полезен как пример Next.js+AI UI и генеративного контента. Для коммерции БОКСМАРТ — скорее учебный/маркетинговый эксперимент.

**Кейсы использования:**
1. Сделать AI-буклет с линейкой упаковки.
2. Изучить паттерн Next.js + FastAPI + Modal.
3. Не брать как основу ERP/CRM.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

### Кибербезопасность

#### [tokenfuzz/tokenfuzz](https://github.com/tokenfuzz/tokenfuzz) — ⭐ 19, обновлён 0 дн. назад
**Что это:** Платформа LLM-based vulnerability research: фаззинг/поиск уязвимостей с помощью моделей (по README/описанию).

**Почему может подойти:** Для кибербезопасности инфраструктуры и agent-стека — способ искать дыры в своих сервисах. Мало звёзд — осторожный пилот.

**Кейсы использования:**
1. Прогон своих API/ботов на типичные дыры.
2. Сравнить находки с классическими сканерами (Trivy).
3. Не использовать на чужих системах без разрешения.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

#### [AISecurityLab/hackagent](https://github.com/AISecurityLab/hackagent) — ⭐ 515, обновлён 0 дн. назад
**Что это:** Open-source toolkit для поиска уязвимостей в AI-агентах (prompt injection, tool abuse и т.п. — по позиционированию).

**Почему может подойти:** Прямо под интерес к AI-агентам + security: перед продом агентов на данных БОКСМАРТ стоит прогнать такие проверки.

**Кейсы использования:**
1. Тест своих coding/ops-агентов на injection.
2. Регрессия после добавления новых tools.
3. Чеклист перед доступом агента к CRM/секретам.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

#### [mitchellkrogza/apache-ultimate-bad-bot-blocker](https://github.com/mitchellkrogza/apache-ultimate-bad-bot-blocker) — ⭐ 981, обновлён 0 дн. назад
**Что это:** Набор правил для Apache: блок плохих ботов, spam referrer, vulnerability scanners, malware/adware user-agents.

**Почему может подойти:** Практичная защита веб/админок (ERP, storefront, панели) на self-hosted Apache. Для Nginx нужны аналоги/конвертация.

**Кейсы использования:**
1. Закрыть админку MES/ERP от сканеров.
2. Снизить мусорный трафик на витрине.
3. Дополнить WAF/fail2ban.

**Проверка безопасности:** Scorecard score=2.5; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

### 3D и печать

#### [pzfreo/draftwright](https://github.com/pzfreo/draftwright) — ⭐ 66, обновлён 0 дн. назад
**Что это:** Автогенерация технических чертежей из build123d и STEP-файлов.

**Почему может подойти:** Для оснастки/3D-печати деталей и шаблонов упаковки/вспомогательной оснастки — быстрые чертежи из CAD-модели.

**Кейсы использования:**
1. Чертежи из STEP для подрядчика.
2. Документация parametric-моделей build123d.
3. Связка с печатью прототипов оснастки.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

#### [andymai/brepjs](https://github.com/andymai/brepjs) — ⭐ 109, обновлён 0 дн. назад
**Что это:** Web CAD библиотека с точной B-Rep геометрией в браузере.

**Почему может подойти:** Потенциал встроить простой CAD/просмотр геометрии в веб-калькулятор или конфигуратор упаковки (если пойдёте в 3D-превью).

**Кейсы использования:**
1. Прототип web-превью коробки.
2. Исследование B-Rep в браузере без тяжёлого desktop CAD.
3. Интеграция в Next.js-конфигуратор (потребует R&D).

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

#### [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) — ⭐ 15731, обновлён 0 дн. назад
**Что это:** Популярный G-code слайсер для 3D-принтеров (Bambu, Prusa, Voron и др.) — форк/развитие Bambu-ориентированных слайсеров.

**Почему может подойти:** Базовый инструмент, если Ростислав печатает оснастку/прототипы; уже стандарт в экосистеме печати.

**Кейсы использования:**
1. Слайсинг прототипов оснастки.
2. Профили под Bambu/Prusa.
3. Связка с API принтера для итераций.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

### Музыкальное производство

#### [RustAudio/baseview](https://github.com/RustAudio/baseview) — ⭐ 388, обновлён 0 дн. назад
**Что это:** Низкоуровневый window-system интерфейс для UI аудиоплагинов (Rust).

**Почему может подойти:** Для разработки собственных VST/аудио-плагинов — инфраструктурный слой UI. Не DAW и не готовый инструмент музыканта.

**Кейсы использования:**
1. Свой плагин с кастомным UI на Rust.
2. Изучить стек Rust audio plugin.
3. Комбинировать с CLAP/VST обёртками.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

#### [zynthian/zynthian-ui](https://github.com/zynthian/zynthian-ui) — ⭐ 215, обновлён 0 дн. назад
**Что это:** UI открытой платформы Zynthian (модульный Linux-синтезатор/семплер на Pi-подобном железе).

**Почему может подойти:** Практичный путь в электронную музыку на железе: open synth-станция. Нужно железо Zynthian или совместимое.

**Кейсы использования:**
1. Собрать/прошить Zynthian-станцию.
2. Кастомизация UI под свой live-set.
3. Изучить open synth workflow.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: GPL-3.0.

#### [FluidSynth/fluidsynth](https://github.com/FluidSynth/fluidsynth) — ⭐ 2492, обновлён 0 дн. назад
**Что это:** Software synthesizer по спецификации SoundFont 2 — рендер MIDI через SF2.

**Почему может подойти:** Классика для электронной музыки и эмбеда синтеза в свои тулы/ботов/DAW-цепочки без тяжёлых проприетарных движков.

**Кейсы использования:**
1. Офлайн-рендер MIDI → WAV в пайплайне.
2. Саундфонты для sketch-треков.
3. Встроить synth в свой инструмент.

**Проверка безопасности:** Scorecard score=5.1; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: LGPL-2.1.

### Коммерческие SaaS-заготовки

#### [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) — ⭐ 56, обновлён 0 дн. назад
**Что это:** Плагин usage billing dashboard для DeepSeek Harness: метрики стоимости в сайдбаре, агрегация usage из session logs, каталог цен провайдеров.

**Почему может подойти:** Узкий, но полезный кусок billing UX для agent-стека; не полный SaaS boilerplate. Можно подсмотреть паттерны учёта токенов/стоимости.

**Кейсы использования:**
1. Контроль расходов на LLM в команде агентов.
2. Идеи UI для биллинга в своём SaaS.
3. Не использовать как единственную SaaS-основу.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

#### [blockmatic/basilic](https://github.com/blockmatic/basilic) — ⭐ 89, обновлён 0 дн. назад
**Что это:** Full-stack API-first agentic TypeScript starter (AI SDK / generative UI по topics).

**Почему может подойти:** Стартер под агентные приложения на TS — ближе к коммерциализации AI-фич, чем пустой CRUD boilerplate. Проверить auth/billing в README перед выбором.

**Кейсы использования:**
1. Каркас AI-ассистента для менеджеров упаковки.
2. API-first сервис с generative UI.
3. Сравнить с классическим Next SaaS starter.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

#### [stickerdaniel/saas-starter](https://github.com/stickerdaniel/saas-starter) — ⭐ 55, обновлён 0 дн. назад
**Что это:** SvelteKit + Convex SaaS starter: auth, billing, admin — оптимизирован под coding agents.

**Почему может подойти:** Полный SaaS-каркас с биллингом; стек SvelteKit (не Next.js) — учитывать, если хотите остаться на Next/Vercel. Хорош как референс структуры auth/billing.

**Кейсы использования:**
1. Быстрый пилот платного мини-SaaS.
2. Подсмотреть модель billing/admin.
3. Портировать идеи на Next.js при необходимости.

**Проверка безопасности:** нет данных Scorecard; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: нет.

## Отклонённые

Кандидаты, которых смотрели, но не взяли в рекомендованные. Без «почему подойдёт».

| Категория | Репозиторий | Описание | Причина отклонения |
|-----------|-------------|----------|--------------------|
| AI-агенты и LLM | [WeThinkIn/AIGC-Interview-Book](https://github.com/WeThinkIn/AIGC-Interview-Book) | отсеян при ручной релевантности | релевантность: Emacs/interview, не бизнес-агенты |
| AI-агенты и LLM | [xenodium/agent-shell](https://github.com/xenodium/agent-shell) | отсеян при ручной релевантности | релевантность: Emacs/interview, не бизнес-агенты |
| AI-агенты и LLM | [h5i-dev/h5i](https://github.com/h5i-dev/h5i) | Fast, red-teaming browser built for AI agents, with direct HTTP traffic control, | слой4: скам-маркер matched |
| AI-агенты и LLM | [godot-fun/gai](https://github.com/godot-fun/gai) | A lightweight AI agent and skill workflow framework built with Godot. | релевантность: Godot framework, не бизнес LLM-стек |
| AI-агенты и LLM | [boxlite-ai/boxlite](https://github.com/boxlite-ai/boxlite) | The micro-VM for AI agents — light enough to embed on your laptop, elastic enoug | слой4: скам-маркер matched |
| AI-агенты и LLM | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA | лимит: уже 3 рекомендованных |
| AI-агенты и LLM | [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | OpenSquilla — Token-Efficient AI Agent with same budget, higher intelligence den | лимит: уже 3 рекомендованных |
| AI-агенты и LLM | [activepieces/activepieces](https://github.com/activepieces/activepieces) | AI Agents & MCPs & AI Workflow Automation • (~400 MCP servers for AI agents) • A | слой1: n8n |
| AI-агенты и LLM | [mrpulor-gh/nuphus](https://github.com/mrpulor-gh/nuphus) | Nuphus — 本地优先的 AI Agent：真实桌面执行力 + 手机第二块屏幕。Local-first AI agent with real desktop | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA | слой4: скам-маркер matched |
| Автоматизация бизнеса | [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) | Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https:// | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [Hash-7777/HashCortX](https://github.com/Hash-7777/HashCortX) | A local-first AI workspace — multi-provider chat, an autonomous coding agent, 3D | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr) | Dolibarr ERP CRM is a modern software package to manage your company or foundati | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [SolidInvoice/SolidInvoice](https://github.com/SolidInvoice/SolidInvoice) | Simple and elegant invoicing solution. | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [dynamics365ninja/d365fo-mcp-server](https://github.com/dynamics365ninja/d365fo-mcp-server) | Exposes MCP tools that prove every method, field, label and form pattern against | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for AI. | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [Chengchcc/my-agent-team](https://github.com/Chengchcc/my-agent-team) | Monorepo for a multi-agent workspace: protocol-first agent runtime with plugin h | лимит: уже 3 рекомендованных |
| Автоматизация бизнеса | [fidetolabs/qanat](https://github.com/fidetolabs/qanat) | Agent-native workflow engine for building and backtesting alphas as DAGs. | слой1: автор <30д и единственный репо |
| Упаковка и производство | [moff-station/moff-station-14](https://github.com/moff-station/moff-station-14) | A fork of upstream Space Station 14 with a focus on silly antics, custom content | релевантность: false positive (VPN/BLAS/игра, не упаковка) |
| Упаковка и производство | [cool-japan/oxiblas](https://github.com/cool-japan/oxiblas) | OxiBLAS is a production-grade, pure Rust implementation of BLAS (Basic Linear Al | релевантность: false positive (VPN/BLAS/игра, не упаковка) |
| Упаковка и производство | [821869798/carton](https://github.com/821869798/carton) | A Windows and Linux GUI client for sing-box.(主打高性能和易用性，非electron tauri等web套皮) | релевантность: false positive (VPN/BLAS/игра, не упаковка) |
| Упаковка и производство | [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) | Semi-automatic OSINT framework and package manager | релевантность: не про упаковку/производство |
| Упаковка и производство | [NixOS/nixpkgs](https://github.com/NixOS/nixpkgs) | Nix Packages collection & NixOS | релевантность: package manager / не упаковка |
| Упаковка и производство | [abakh/nbsdgames](https://github.com/abakh/nbsdgames) | A package of 21 new, improved, text-based games. Some are entirely original idea | релевантность: не про упаковку/производство |
| Упаковка и производство | [alpinelinux/aports](https://github.com/alpinelinux/aports) | [MIRROR] Alpine packages build scripts | релевантность: не про упаковку/производство |
| Упаковка и производство | [nix-community/NUR](https://github.com/nix-community/NUR) | Nix User Repository: User contributed nix packages [maintainer=@Pandapip1] | релевантность: package manager / не упаковка |
| Упаковка и производство | [Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core) | 🍻 Default and OSS formulae (built-from-source packages) for the package manager  | релевантность: package manager / не упаковка |
| Упаковка и производство | [ebrasha/abdal-proxy-hub](https://github.com/ebrasha/abdal-proxy-hub) | A curated list of free, tested proxies by EbraSha — updated every 10 minutes for | релевантность: не про упаковку/производство |
| Упаковка и производство | [Homebrew/homebrew-cask](https://github.com/Homebrew/homebrew-cask) | 🍻 Default casks (upstream binary packages) for the package manager for everywher | релевантность: package manager / не упаковка |
| Упаковка и производство | [ebrasha/free-v2ray-public-list](https://github.com/ebrasha/free-v2ray-public-list) | A simple and always-updated list of free, working V2Ray servers. including SS, S | релевантность: VPN/crypto/proxy junk |
| Упаковка и производство | [psd-tools/psd-tools](https://github.com/psd-tools/psd-tools) | Python package for reading Adobe Photoshop PSD files | релевантность: не про упаковку/производство |
| Упаковка и производство | [Colorado-Mesh/mesh-client](https://github.com/Colorado-Mesh/mesh-client) | Cross-platform Electron desktop client for Meshtastic, MeshCore, and Reticulum o | релевантность: не про упаковку/производство |
| Упаковка и производство | [termux/termux-packages](https://github.com/termux/termux-packages) | A package build system for Termux. | релевантность: не про упаковку/производство |
| Упаковка и производство | [dpangestuw/Free-Proxy](https://github.com/dpangestuw/Free-Proxy) | Free Proxy List 🔄 Update Every 5 Minutes | релевантность: не про упаковку/производство |
| Упаковка и производство | [hashgraph-online/awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) | A curated list of awesome OpenAI Codex / ChatGPT plugins, skills, and resources. | релевантность: не про упаковку/производство |
| Упаковка и производство | [Piebald-AI/awesome-gemini-cli](https://github.com/Piebald-AI/awesome-gemini-cli) | A curated list of awesome tools, extensions, and resources for Gemini CLI. | релевантность: не про упаковку/производство |
| Упаковка и производство | [mthcht/awesome-lists](https://github.com/mthcht/awesome-lists) | Awesome Security lists for SOC/CERT/CTI | релевантность: не про упаковку/производство |
| Упаковка и производство | [boring-o11y/awesome-horizon](https://github.com/boring-o11y/awesome-horizon) | Curated list of awesome Laravel Horizon related resources | релевантность: не про упаковку/производство |
| Упаковка и производство | [Piebald-AI/awesome-gemini-cli-extensions](https://github.com/Piebald-AI/awesome-gemini-cli-extensions) | A curated list of awesome Gemini CLI extensions. | релевантность: не про упаковку/производство |
| Упаковка и производство | [ErcinDedeoglu/proxies](https://github.com/ErcinDedeoglu/proxies) | 🔍💻🔒🌀🔄🌟🚀📂📈 Need a daily updated proxy list? Look no further! Our PROXY list offer | релевантность: не про упаковку/производство |
| Упаковка и производство | [sudhakar3697/awesome-electron-alternatives](https://github.com/sudhakar3697/awesome-electron-alternatives) | A curated list of awesome Electron alternatives. | релевантность: не про упаковку/производство |
| Упаковка и производство | [babalae/bettergi-scripts-list](https://github.com/babalae/bettergi-scripts-list) | BetterGI 的脚本仓库，内含BetterGI 的JS脚本、路径追踪、战斗策略、七圣召唤策略。 | релевантность: не про упаковку/производство |
| Упаковка и производство | [hashgraph-online/awesome-ai-plugins](https://github.com/hashgraph-online/awesome-ai-plugins) | A curated list of the best awesome AI plugins for AI assistants including Claude | релевантность: не про упаковку/производство |
| Упаковка и производство | [DraconDev/pi-goal-list-loop-audit](https://github.com/DraconDev/pi-goal-list-loop-audit) | Goal. Loop. Audit. Done. A pi-coding-agent extension that supervises long-runnin | релевантность: не про упаковку/производство |
| Упаковка и производство | [sm-monirulislam/Upcoming-and-Live-Sports-Data](https://github.com/sm-monirulislam/Upcoming-and-Live-Sports-Data) | Automatically updated list of Sports   Matches data and Links (provided as json- | релевантность: не про упаковку/производство |
| Telegram-боты | [Mak5er/Downloader-Bot](https://github.com/Mak5er/Downloader-Bot) | Social media downloader Bot on Telegram | релевантность: media downloader, слабо для бизнес-ботов БОКСМАРТ |
| Telegram-боты | [Cleverfuxaqo1668/Polymarket-Telegram-Bot](https://github.com/Cleverfuxaqo1668/Polymarket-Telegram-Bot) | A handy Polymarket prediction bot for Telegram. | релевантность: VPN/crypto/proxy junk |
| Telegram-боты | [MateEke/picture-frame](https://github.com/MateEke/picture-frame) | A self-hosted digital picture frame for the Raspberry Pi: a single Go binary tha | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [brandonp2412/Quitter](https://github.com/brandonp2412/Quitter) | Private, offline addiction-recovery and sobriety tracker with milestones, journa | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [easylist/easylist](https://github.com/easylist/easylist) | EasyList filter subscription (EasyList, EasyPrivacy, EasyList Cookie, Fanboy's S | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [schorschii/CustomerDB-Android](https://github.com/schorschii/CustomerDB-Android) | Customer Database Android App | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [max-baz/yubikey-touch-detector](https://github.com/max-baz/yubikey-touch-detector) | A tool to detect when your YubiKey is waiting for a touch (to send notification  | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [juwairiyah09/spike-angular-pro-starter](https://github.com/juwairiyah09/spike-angular-pro-starter) | Spike Angular 2026: Ultimate Free Material Admin Template for Modern Dashboards | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [Tecso-Dev/SorinFlow-DaTA-mAmager](https://github.com/Tecso-Dev/SorinFlow-DaTA-mAmager) | Divar property scraping, inventory and real-estate CRM in one Persian/RTL worksp | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [appsinacup/gamend](https://github.com/appsinacup/gamend) | Open source Elixir game server with authentication, users, lobbies, groups, part | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [starlake-ai/quack-on-demand](https://github.com/starlake-ai/quack-on-demand) | Production-grade Arrow FlightSQL gateway in front of DuckDB Quack + DuckLake. Mu | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [tsugiproject/tsugi](https://github.com/tsugiproject/tsugi) | Tsugi Admin, Developer, and Management Console (pls join the dev list) | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [wshm-dev/wshm](https://github.com/wshm-dev/wshm) | AI-powered repository agent for GitHub, GitLab, Gitea, Azure DevOps. Issue triag | релевантность: нет признаков Telegram-бота |
| Telegram-боты | [BEDOLAGA-DEV/remnawave-bedolaga-telegram-bot](https://github.com/BEDOLAGA-DEV/remnawave-bedolaga-telegram-bot) | Система для продажи подписок в тг и вебе с вебадминкой интегрированный c Remnawa | gate: relevance |
| Telegram-боты | [aiogram/aiogram](https://github.com/aiogram/aiogram) | aiogram is a modern and fully asynchronous framework for Telegram Bot API writte | gate: dw |
| Next.js и веб | [lingdojo/kana-dojo](https://github.com/lingdojo/kana-dojo) | Aesthetic, minimalist platform for learning Japanese inspired by Duolingo and Mo | релевантность: учебный/игровой проект, не SaaS/dashboard |
| Next.js и веб | [rahmanef63/mso](https://github.com/rahmanef63/mso) | Browser-based graphical shell and control plane for a Linux server you own — rea | слой4: скам-маркер matched |
| Next.js и веб | [BanManagement/BanManager-WebUI](https://github.com/BanManagement/BanManager-WebUI) | Web interface for BanManager using Next.js/React/GraphQL | релевантность: учебный/игровой проект, не SaaS/dashboard |
| Next.js и веб | [AnYiEE/touhou-mystia-izakaya-assistant](https://github.com/AnYiEE/touhou-mystia-izakaya-assistant) | 为游戏《东方夜雀食堂》所打造的辅助工具，旨在为玩家的游玩过程提供帮助。使用React、Tailwind CSS和Next.js开发和构建。 | релевантность: учебный/игровой проект, не SaaS/dashboard |
| Next.js и веб | [react18-tools/turborepo-template](https://github.com/react18-tools/turborepo-template) | Template for creating React 19 / Next.js 15 libraries | лимит: уже 3 рекомендованных |
| Next.js и веб | [prisma/fullstack-prisma-nextjs-blog](https://github.com/prisma/fullstack-prisma-nextjs-blog) | Fullstack Blog with Next.js and Prisma | лимит: уже 3 рекомендованных |
| Next.js и веб | [tutur3u/platform](https://github.com/tutur3u/platform) | Tuturuuu is an AI-native, open-source workspace that unifies tasks, scheduling,  | лимит: уже 3 рекомендованных |
| Next.js и веб | [spree/spree](https://github.com/spree/spree) | Open Source Platform for DTC, B2B Commerce, Marketplaces & Omnichannel. REST API | лимит: уже 3 рекомендованных |
| Next.js и веб | [tostesdaniel/rust-conveyor-filters](https://github.com/tostesdaniel/rust-conveyor-filters) | Web app built with Next.js for managing Conveyor Filters for video game Rust by  | лимит: уже 3 рекомендованных |
| Кибербезопасность | [xiayu1987/noobot](https://github.com/xiayu1987/noobot) | Cheapest Money-Saving Self-hosted AI agent workspace with tool calling, MCP, mul | релевантность: нет security-сигнала |
| Кибербезопасность | [ShlomiPorush/mailcow-logs-viewer](https://github.com/ShlomiPorush/mailcow-logs-viewer) | A modern, self-hosted dashboard for viewing and analyzing mailcow mail server lo | релевантность: нет security-сигнала |
| Кибербезопасность | [matze/wastebin](https://github.com/matze/wastebin) | wastebin is a pastebin 📝 | релевантность: нет security-сигнала |
| Кибербезопасность | [realchendahuang/FlareMo](https://github.com/realchendahuang/FlareMo) | Cloudflare 原生的团队知识库：一个人用是私人笔记，一个团队用是共享知识库；提供 Memos 兼容 API 与 MCP。 | релевантность: нет security-сигнала |
| Кибербезопасность | [kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app) | AI-powered flashcards app built for serious daily study on iOS, Android, and the | релевантность: нет security-сигнала |
| Кибербезопасность | [rommapp/romm](https://github.com/rommapp/romm) | A beautiful, powerful, self-hosted ROM manager and player. | релевантность: нет security-сигнала |
| Кибербезопасность | [FreeOpenSourcePOS/FloCafe](https://github.com/FreeOpenSourcePOS/FloCafe) | Free, open-source, offline-first Point of Sale for cafes, restaurants, and food  | релевантность: нет security-сигнала |
| Кибербезопасность | [cfal/garcon](https://github.com/cfal/garcon) | Self-hosted browser workspace to run coding agents in parallel, steer work as it | релевантность: нет security-сигнала |
| Кибербезопасность | [HarnessRouter/harnessrouter](https://github.com/HarnessRouter/harnessrouter) | HarnessRouter Community Edition: the self-hosted, Apache-2.0 edition of the unif | релевантность: нет security-сигнала |
| Кибербезопасность | [eullm/eullm](https://github.com/eullm/eullm) | Open-source platform for creating, distributing and running sovereign EU-complia | релевантность: нет security-сигнала |
| Кибербезопасность | [preloopdev/preloop](https://github.com/preloopdev/preloop) | agent-native, drop-in Github Actions that can run locally or self-hosted in micr | релевантность: нет security-сигнала |
| Кибербезопасность | [dgtlmoon/changedetection.io](https://github.com/dgtlmoon/changedetection.io) | Best and simplest tool for website change detection, web page monitoring, and we | релевантность: нет security-сигнала |
| Кибербезопасность | [bug-ops/deps-lsp](https://github.com/bug-ops/deps-lsp) | Universal LSP server for dependency management — autocomplete, version hints, di | слой4: скам-маркер matched |
| Кибербезопасность | [hackerai-tech/hackerai](https://github.com/hackerai-tech/hackerai) | Find and fix vulnerabilities by chatting with AI | лимит: уже 3 рекомендованных |
| Кибербезопасность | [berylliumsec/nebula](https://github.com/berylliumsec/nebula) | AI-powered penetration testing assistant for automating recon, note-taking, and  | лимит: уже 3 рекомендованных |
| Кибербезопасность | [SecObserve/SecObserve](https://github.com/SecObserve/SecObserve) | SecObserve is an open source vulnerability and license management system for sof | лимит: уже 3 рекомендованных |
| Кибербезопасность | [nomi-sec/PoC-in-GitHub](https://github.com/nomi-sec/PoC-in-GitHub) | 📡 PoC auto collect from GitHub. ⚠️ Be careful Malware. | лимит: уже 3 рекомендованных |
| Кибербезопасность | [vigolium/vigolium](https://github.com/vigolium/vigolium) | Vigolium - High-fidelity vulnerability scanner fusing agentic AI with native spe | лимит: уже 3 рекомендованных |
| Кибербезопасность | [sec0ps/va-pt](https://github.com/sec0ps/va-pt) | The VAPT Toolkit provides a streamlined way to install, configure, and maintain  | лимит: уже 3 рекомендованных |
| Кибербезопасность | [dependency-check/dependency-check-gradle](https://github.com/dependency-check/dependency-check-gradle) | The dependency-check gradle plugin is a Software Composition Analysis (SCA) tool | лимит: уже 3 рекомендованных |
| Кибербезопасность | [0xMarcio/pocindex](https://github.com/0xMarcio/pocindex) | Search 82,000+ public CVE proof-of-concept exploits from GitHub, Nuclei, Exploit | лимит: уже 3 рекомендованных |
| 3D и печать | [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | polymath harness | релевантность: agent harness, слабо как 3D-инструмент |
| 3D и печать | [Forbes-Automotive/OpenHaldex-C6](https://github.com/Forbes-Automotive/OpenHaldex-C6) | OpenHaldex - an opensource Haldex AWD controller firmware for ESP32-C6 supportin | релевантность: авто-прошивка, не 3D/CAD |
| 3D и печать | [kellerlabs/homeracker](https://github.com/kellerlabs/homeracker) | A fully modular 3D-printable rack-building system | лимит: уже 3 рекомендованных |
| 3D и печать | [Edwardhehe/batchPrintZWCAD](https://github.com/Edwardhehe/batchPrintZWCAD) | cad批量打印 | лимит: уже 3 рекомендованных |
| 3D и печать | [Subash1017/ArchiCAD-Workflow-Tools](https://github.com/Subash1017/ArchiCAD-Workflow-Tools) | BIM Architectural Design Software 2026 Free Trial Full Features | лимит: уже 3 рекомендованных |
| 3D и печать | [fanhao375/microduck-replica](https://github.com/fanhao375/microduck-replica) | Microduck 复刻 · 从官方 MJCF 与 Rust 源码反推出的装配图、CAD 装配体与完整电控方案 / Mechanical + electroni | лимит: уже 3 рекомендованных |
| 3D и печать | [Eraxty/Atlas](https://github.com/Eraxty/Atlas) | opensource indexer for usenet | релевантность: не 3D/CAD/печать |
| 3D и печать | [asyncvlsi/act](https://github.com/asyncvlsi/act) | ACT hardware description language and core tools. | лимит: уже 3 рекомендованных |
| 3D и печать | [andrich-software/asERP](https://github.com/andrich-software/asERP) | OpenSource, self-hosted, client/server-based ERP system with multiplatform GUI w | релевантность: не 3D/CAD/печать |
| Музыкальное производство | [AdaLovelace1304/cubase-score-sync](https://github.com/AdaLovelace1304/cubase-score-sync) | отсеян | релевантность: не музыка / SEO-спам |
| Музыкальное производство | [Freika/dawarich](https://github.com/Freika/dawarich) | отсеян | релевантность: не музыка / SEO-спам |
| Музыкальное производство | [MillenniumDawn/Millennium-Dawn](https://github.com/MillenniumDawn/Millennium-Dawn) | Millennium Dawn and it's codebase. | релевантность: не музыка |
| Музыкальное производство | [TryGhost/Dawn](https://github.com/TryGhost/Dawn) | A minimal newsletter theme for Ghost | релевантность: не музыка |
| Музыкальное производство | [williamchristian273/Reason-Studio-Rack-Toolkit](https://github.com/williamchristian273/Reason-Studio-Rack-Toolkit) | Top Reason Studios Rack DAW Plugins & Workflow Tools 2026 | лимит: уже 3 рекомендованных |
| Музыкальное производство | [song39641-spec/Reaper-DAW-Workstation-Pro](https://github.com/song39641-spec/Reaper-DAW-Workstation-Pro) | Cockos REAPER Pro 2026 Free Download Full Version Lightweight Audio DAW | лимит: уже 3 рекомендованных |
| Музыкальное производство | [rizki-haridputra/Melody-Forge-Engine](https://github.com/rizki-haridputra/Melody-Forge-Engine) | AI-Powered Music Production & Live Coding Software 2026 | лимит: уже 3 рекомендованных |
| Музыкальное производство | [jtr21300/MAGIX-Music-Maker-Quickstart](https://github.com/jtr21300/MAGIX-Music-Maker-Quickstart) | Best MAGIX Music Maker Premium Setup 2026 AI Music Production Suite | лимит: уже 3 рекомендованных |
| Музыкальное производство | [google/dawn](https://github.com/google/dawn) | Native WebGPU implementation. Mirror of https://dawn.googlesource.com/dawn. File | лимит: уже 3 рекомендованных |
| Музыкальное производство | [johnnovak/Nuked-SC55-CLAP](https://github.com/johnnovak/Nuked-SC55-CLAP) | Nuked SC-55 CLAP audio plugin | лимит: уже 3 рекомендованных |
| Коммерческие SaaS-заготовки | [caura-ai/caura](https://github.com/caura-ai/caura) | governed shared memory for AI agent fleets | релевантность: agent memory infra, не SaaS boilerplate |
| Коммерческие SaaS-заготовки | [Yanyutin753/LambChat](https://github.com/Yanyutin753/LambChat) | agent infra | релевантность: agent infra, не SaaS boilerplate |
| Коммерческие SaaS-заготовки | [leadita/tech-stack-datasets](https://github.com/leadita/tech-stack-datasets) | Open datasets of companies & websites grouped by technologies they use (CSV & JS | релевантность: датасет, не SaaS-заготовка |
| Коммерческие SaaS-заготовки | [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | Open-source AI Trading OS, agent trading, and vibe trading, with Jev System One  | слой4: скам-маркер matched |
| Коммерческие SaaS-заготовки | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA | слой4: скам-маркер matched |
| Коммерческие SaaS-заготовки | [starlake-ai/quack-on-demand](https://github.com/starlake-ai/quack-on-demand) | Production-grade Arrow FlightSQL gateway in front of DuckDB Quack + DuckLake. Mu | релевантность: infra/DB gateway, не SaaS boilerplate |
| Коммерческие SaaS-заготовки | [whispem/minikv](https://github.com/whispem/minikv) | Distributed, multi-tenant key-value and object store in Rust, with Raft consensu | лимит: уже 3 рекомендованных |
| Коммерческие SaaS-заготовки | [slothflowlabs/duckle](https://github.com/slothflowlabs/duckle) | Open-source ETL/ELT you deploy on your own servers or cloud. Built on DuckDB: no | лимит: уже 3 рекомендованных |
| Коммерческие SaaS-заготовки | [Lifecycle-Innovations-Limited/claude-ops](https://github.com/Lifecycle-Innovations-Limited/claude-ops) | Business operating system for Claude Code — 57 skills, 21 agents, smart daemon.  | лимит: уже 3 рекомендованных |
| Коммерческие SaaS-заготовки | [DEEIX-AI/DEEIX-Chat](https://github.com/DEEIX-AI/DEEIX-Chat) | An enterprise AI workspace for model routing, multimodal chat, files, tools, bil | лимит: уже 3 рекомендованных |
