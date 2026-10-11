# 📋 Дайджест репозиториев — 2026-10-11

Кратко: рекомендовано 27 / отклонено 177 в 9 категориях.
Окно прогона: старт 2026-10-11 12:06 / публикация 2026-10-11 12:20 (Minsk).

## ✅ Рекомендованные

### 📁 AI-агенты и LLM

━━━━━━━━━━━━━━━━━━━━
### #1 · [kentcdodds/kody](https://github.com/kentcdodds/kody)
⭐ 763 · обновлён 0 дн. назад

💡 **Что это**
Kody — «облако для агентов» на Cloudflare Workers + MCP: память, ключи, код и автоматизации агента, переносимые между MCP-хостами (Remix UI, Worker-роутинг).

🎯 **Зачем может подойти**
Под стек Cursor/MCP: единое место хранить контекст и автоматизации агента без привязки к одному клиенту. Для производства — инфраструктура разработки, не MES.

🛠 **Как применить**
1. **Коротко:** Память агента между сессиями.
   **Простыми словами:** Агент помнит договорённости по проекту, даже если сменили MCP-хост.
   **Пример:** Контекст калькулятора коробки не теряется при смене клиента.
2. **Коротко:** Секреты и ключи отдельно от чата.
   **Простыми словами:** Ключи API не размазываются по локальным .env на каждой машине.
   **Пример:** Пилот внутреннего агента с общим vault на Workers.
3. **Коротко:** Не путать с ERP.
   **Простыми словами:** Это DX для агентов, не учёт тиражей.
   **Пример:** Держать только в eng-контуре команды.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #2 · [rociiu/talorys](https://github.com/rociiu/talorys)
⭐ 565 · обновлён 0 дн. назад

💡 **Что это**
Talorys — open-source персональный AI-ассистент, который крутится целиком в вашем Cloudflare-аккаунте: чат, память, задачи, заметки, напоминания и routines без чужого бэкенда.

🎯 **Зачем может подойти**
Для автоматизации личных/командных напоминаний и черновиков на своей инфраструктуре. Слабее как цеховой инструмент — сильнее как self-hosted assistant.

🛠 **Как применить**
1. **Коротко:** Self-hosted ассистент на Cloudflare.
   **Простыми словами:** Данные остаются в вашем аккаунте, не у стороннего SaaS.
   **Пример:** Напоминания о сроках КП и сверках с клиентами.
2. **Коротко:** Рутины по расписанию.
   **Простыми словами:** Агент сам поднимает повторяющиеся задачи.
   **Пример:** Утренний список открытых заказов на проверку.
3. **Коротко:** Пилот до интеграции с CRM.
   **Простыми словами:** Сначала личный контур, потом связка с бизнесом.
   **Пример:** Неделя заметок по заявкам без записи в боевую базу.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #3 · [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html)
⭐ 2832 · обновлён 0 дн. назад

💡 **Что это**
Agent skill «Answer me with HTML»: на сложный вопрос модель отдаёт компактную HTML-страницу вместо стены текста — удобнее читать объяснения и гайды.

🎯 **Зачем может подойти**
Ускоряет разбор сложных тем в Cursor/агентах (спеки, стандарты, внутренние процедуры). К упаковке напрямую не привязан — это формат ответа.

🛠 **Как применить**
1. **Коротко:** Читаемые ответы агента.
   **Простыми словами:** Вместо простыни markdown — страница с структурой.
   **Пример:** Объяснение допусков на высечку в виде короткого гайда.
2. **Коротко:** Онбординг по процессу.
   **Простыми словами:** Агент собирает одностраничник «как считаем тираж».
   **Пример:** Памятка для нового менеджера.
3. **Коротко:** Офлайн/один файл.
   **Простыми словами:** Можно сохранить и открыть без сервиса.
   **Пример:** PDF/HTML вложение в внутреннюю wiki.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.


### 📁 Автоматизация бизнеса

━━━━━━━━━━━━━━━━━━━━
### #4 · [invoicerr-app/invoicerr](https://github.com/invoicerr-app/invoicerr)
⭐ 731 · обновлён 0 дн. назад

💡 **Что это**
Invoicerr — self-hosted open-source выставление счетов: quotes, invoices, payments, credit notes, PO и сопутствующий документооборот, включая e-invoicing правила страны.

🎯 **Зачем может подойти**
Для БОКСМАРТ и малого производства — замена зоопарка Excel/почты на единый контур счетов и КП. Не MES, но закрывает финансовый хвост заказа.

🛠 **Как применить**
1. **Коротко:** КП и счета в одном движке.
   **Простыми словами:** Один жизненный цикл документа от quote до оплаты.
   **Пример:** Тираж лотков: КП → счёт → отметка оплаты.
2. **Коротко:** Self-hosted данные.
   **Простыми словами:** Документы у вас, не в чужом облаке.
   **Пример:** Пилот на staging перед бухгалтерией.
3. **Коротко:** Связка с заказом.
   **Простыми словами:** Номер заказа в счёте = номер в производстве.
   **Пример:** Меньше путаницы «какой счёт к какому тиражу».

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #5 · [SolidInvoice/SolidInvoice](https://github.com/SolidInvoice/SolidInvoice)
⭐ 977 · обновлён 0 дн. назад

💡 **Что это**
SolidInvoice — open-source платформа для фрилансеров и малого бизнеса: красивые quotes/invoices, онлайн-оплаты, recurring billing, данные остаются у вас.

🎯 **Зачем может подойти**
Проще invoicing-контур, если нужен классический self-hosted биллинг. Для производства — скорее финансы, чем цех.

🛠 **Как применить**
1. **Коротко:** Повторяющиеся счета.
   **Простыми словами:** Подписка/абонентка без ручного копирования.
   **Пример:** Ежемесячная поддержка сайта клиента.
2. **Коротко:** Онлайн-оплата.
   **Простыми словами:** Клиент платит по ссылке из счёта.
   **Пример:** Предоплата 50% за тираж.
3. **Коротко:** Сравнение с Invoicerr.
   **Простыми словами:** Выбрать один invoicing-стек, не два.
   **Пример:** Пилот на 5 реальных счетах.

🔒 **Безопасность**
Scorecard 5.7; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #6 · [datadrivenconstruction/OpenConstructionERP](https://github.com/datadrivenconstruction/OpenConstructionERP)
⭐ 923 · обновлён 0 дн. назад

💡 **Что это**
OpenConstructionERP — open-source workspace для стройки: BOQ, CAD/BIM takeoff, 4D/5D стоимость и тендеры, модульный self-hosted подход «как WordPress для construction».

🎯 **Зачем может подойти**
Слабая прямая связь с гофроупаковкой, но полезен как референс модульного ERP (сметы, takeoff, стоимость). Для БОКСМАРТ — идеи, не готовый MES.

🛠 **Как применить**
1. **Коротко:** Референс смет/спецификаций.
   **Простыми словами:** Посмотреть, как считают объёмы и стоимость в модулях.
   **Пример:** Аналогия со спецификацией материалов коробки.
2. **Коротко:** Self-hosted модульность.
   **Простыми словами:** Подключать модули, а не монолит «всё сразу».
   **Пример:** Только блок стоимости на пилоте.
3. **Коротко:** Честно про домен.
   **Простыми словами:** Это стройка, не упаковка.
   **Пример:** Не внедрять как основной ERP цеха.

🔒 **Безопасность**
Scorecard 6; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.


### 📁 Упаковка и производство

━━━━━━━━━━━━━━━━━━━━
### #7 · [liuweichaox/Ingot](https://github.com/liuweichaox/Ingot)
⭐ 52 · обновлён 0 дн. назад

💡 **Что это**
Ingot — open-source система прослеживания и оптимизации техпроцесса: превращает реальные прогоны в доказуемые следы, помогает находить отклонения и фиксировать следующую «рецептуру».

🎯 **Зачем может подойти**
Ближе к производству, чем software-packaging шум: идея цифрового следа партии/режима. Для упаковки — пилот прослеживаемости, не готовый калькулятор коробок.

🛠 **Как применить**
1. **Коротко:** След партии/режима.
   **Простыми словами:** Зафиксировать, при каких параметрах шёл тираж.
   **Пример:** Смена клея/скорости → запись причины брака.
2. **Коротко:** Разбор отклонений.
   **Простыми словами:** Сравнить «как было» и «как стало».
   **Пример:** Почему лотки партии B пошли волной.
3. **Коротко:** Пилот на одном участке.
   **Простыми словами:** Не автоматизировать весь цех сразу.
   **Пример:** Только высечка на 2 недели.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #8 · [timschofield/webERP](https://github.com/timschofield/webERP)
⭐ 99 · обновлён 0 дн. назад

💡 **Что это**
webERP — веб-ERP/учёт (PHP/MySQL): финансы, закупки, склад и администрирование бизнеса в классическом open-source ERP стиле.

🎯 **Зачем может подойти**
Для малого производства — каркас учёта заказов и склада. Прямого «гофро-калькулятора» нет; применимость средняя, зато понятный ERP-контур.

🛠 **Как применить**
1. **Коротко:** Склад материалов.
   **Простыми словами:** Остатки картона/клея не только в Excel.
   **Пример:** Списание листа на тираж 1042.
2. **Коротко:** Заказы поставщикам.
   **Простыми словами:** Закупка сырья из той же системы.
   **Пример:** Заказ микрогофро под неделю.
3. **Коротко:** Оценка vs Odoo/ERPNext.
   **Простыми словами:** Сравнить тяжесть внедрения.
   **Пример:** Spike на тестовой базе.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #9 · [tryton/tryton](https://github.com/tryton/tryton)
⭐ 228 · обновлён 0 дн. назад

💡 **Что это**
Tryton — модульный open-source ERP framework (Python): учёт, склад, продажи и расширяемые бизнес-модули без vendor lock-in крупного SaaS.

🎯 **Зачем может подойти**
Серьёзный ERP-каркас под кастомизацию процессов производства. Для упаковки потребует доработки модулей — это платформа, не отраслевой MES «из коробки».

🛠 **Как применить**
1. **Коротко:** Каркас учёта заказов.
   **Простыми словами:** Продажи + склад как база.
   **Пример:** Заказ тиража со статусами.
2. **Коротко:** Кастомный модуль цены.
   **Простыми словами:** Формулу коробки вынести в модуль Tryton.
   **Пример:** Расчёт от размера/материала/тиражности.
3. **Коротко:** Долгий пилот.
   **Простыми словами:** ERP не ставят за выходные.
   **Пример:** Месяц на один процесс «заказ→отгрузка».

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.


### 📁 Telegram-боты

━━━━━━━━━━━━━━━━━━━━
### #10 · [alenpaulvarghese/Web-Screenshot-Bot](https://github.com/alenpaulvarghese/Web-Screenshot-Bot)
⭐ 89 · обновлён 0 дн. назад

💡 **Что это**
Telegram-бот на Playwright: делает скриншоты веб-страниц по запросу из чата.

🎯 **Зачем может подойти**
Узкий utility-бот. Для бизнеса слабо, но может пригодиться для контроля витрин/лендингов. Не CRM и не поддержка заказов.

🛠 **Как применить**
1. **Коротко:** Мониторинг лендинга.
   **Простыми словами:** Быстро увидеть, как страница выглядит сейчас.
   **Пример:** Проверка акции на сайте перед рассылкой.
2. **Коротко:** Скрин в чат менеджерам.
   **Простыми словами:** Не открывать браузер на каждом устройстве.
   **Пример:** «Как выглядит КП-страница у клиента».
3. **Коротко:** Не ядро бизнеса.
   **Простыми словами:** Оставить как вспомогательный бот.
   **Пример:** Не строить на нём приём заказов.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #11 · [aiogram/aiogram](https://github.com/aiogram/aiogram)
⭐ 5890 · обновлён 0 дн. назад

💡 **Что это**
aiogram — зрелый async-фреймворк для Telegram Bot API на Python: роутеры, FSM, удобные хендлеры и активное сообщество.

🎯 **Зачем может подойти**
Базовый выбор под бизнес-ботов (уведомления, поддержка, статусы заказа) в Python-стеке команды.

🛠 **Как применить**
1. **Коротко:** Алерты о заказах.
   **Простыми словами:** Новая заявка сразу в рабочий чат.
   **Пример:** Форма на сайте → сообщение менеджеру.
2. **Коротко:** Статус тиража для клиента.
   **Простыми словами:** Клиент пишет номер — бот отвечает этапом.
   **Пример:** «1042» → «в печати».
3. **Коротко:** FSM для заявок.
   **Простыми словами:** Пошаговый сбор параметров заказа в чате.
   **Пример:** Размер → материал → тираж → контакт.

🔒 **Безопасность**
Scorecard 5.9; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #12 · [grinev/opencode-telegram-bot](https://github.com/grinev/opencode-telegram-bot)
⭐ 1244 · обновлён 0 дн. назад

💡 **Что это**
Telegram-бот для OpenCode: мост между чатом Telegram и coding-агентом/OpenCode workflow.

🎯 **Зачем может подойти**
Для команды на Cursor/агентах — запускать/дергать coding-сценарии из Telegram. К цеху слабо, к DX — близко.

🛠 **Как применить**
1. **Коротко:** Постановка задачи агенту из TG.
   **Простыми словами:** Написал в бот — агент взял в работу.
   **Пример:** «поправь округление в калькуляторе» из телефона.
2. **Коротко:** Статус длинной задачи.
   **Простыми словами:** Не сидеть у IDE, пока агент думает.
   **Пример:** Уведомление «готово PR-черновик».
3. **Коротко:** Ограничить доступ.
   **Простыми словами:** Только свой chat id / allowlist.
   **Пример:** Не светить бота в публичных группах.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.


### 📁 Next.js и веб

━━━━━━━━━━━━━━━━━━━━
### #13 · [salmanshahriar/Next-Elite](https://github.com/salmanshahriar/Next-Elite)
⭐ 118 · обновлён 0 дн. назад

💡 **Что это**
Next Elite — open-source Next.js starter с упором на frontend + API-driven архитектуру и developer experience.

🎯 **Зачем может подойти**
Заготовка под кабинеты/внутренние веб-инструменты на Next.js. Проверить состав модулей перед тем, как брать вместо своего шаблона.

🛠 **Как применить**
1. **Коротко:** Каркас клиентского кабинета.
   **Простыми словами:** Быстрый старт UI+API без пустого create-next-app.
   **Пример:** Кабинет статуса заказов для менеджеров.
2. **Коротко:** Оценка DX.
   **Простыми словами:** Насколько удобны скрипты и структура.
   **Пример:** Сравнить с текущим Next-шаблоном команды.
3. **Коротко:** Не тащить лишнее.
   **Простыми словами:** Вырезать модули, которые не нужны.
   **Пример:** Оставить auth + таблицы.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #14 · [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io)
⭐ 36167 · обновлён 0 дн. назад

💡 **Что это**
Next.js приложение для AI-assisted диаграмм draw.io: генерировать и править схемы в веб-интерфейсе.

🎯 **Зачем может подойти**
Полезно для схем процессов (заказ→печать→отгрузка) и архитектуры внутренних систем. Не SaaS-кабинет продаж, а инструмент визуализации.

🛠 **Как применить**
1. **Коротко:** Схема бизнес-процесса.
   **Простыми словами:** Набросать поток заявки с помощью AI.
   **Пример:** От сайта до склада — одна диаграмма.
2. **Коротко:** Архитектура бота/CRM.
   **Простыми словами:** Быстрее согласовать интеграции визуально.
   **Пример:** Telegram → API → ERP.
3. **Коротко:** Документация для команды.
   **Простыми словами:** Схема в wiki вместо устного пересказа.
   **Пример:** Онбординг нового разработчика.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #15 · [notionnext-org/NotionNext](https://github.com/notionnext-org/NotionNext)
⭐ 11857 · обновлён 0 дн. назад

💡 **Что это**
NotionNext — сайт/блог на Next.js с Notion как CMS: контент ведётся в Notion, публикация через Next.

🎯 **Зачем может подойти**
Для публичных страниц, базы знаний или лёгкого маркетингового сайта без тяжёлой CMS. Слабо для ERP, хорошо для контента.

🛠 **Как применить**
1. **Коротко:** База знаний из Notion.
   **Простыми словами:** Редакторы пишут в Notion — сайт обновляется.
   **Пример:** FAQ по материалам упаковки.
2. **Коротко:** Лендинг услуги.
   **Простыми словами:** Быстро выкатить страницу продукта.
   **Пример:** Страница «лотки под наггетсы».
3. **Коротко:** Не путать с кабинетом.
   **Простыми словами:** Это CMS/сайт, не заказной портал.
   **Пример:** Заказы оставить в другом приложении.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.


### 📁 Кибербезопасность

━━━━━━━━━━━━━━━━━━━━
### #16 · [dbsystel/trivy-vulnerability-explorer](https://github.com/dbsystel/trivy-vulnerability-explorer)
⭐ 180 · обновлён 0 дн. назад

💡 **Что это**
Trivy Vulnerability Explorer — UI для больших отчётов Trivy: удобнее разбирать findings, чем сырой JSON/огромные таблицы.

🎯 **Зачем может подойти**
Если уже смотрите Trivy/сканы образов — ускоряет triage уязвимостей инфраструктуры и CI.

🛠 **Как применить**
1. **Коротко:** Разбор CI-скана.
   **Простыми словами:** Открыть отчёт и отфильтровать критичное.
   **Пример:** Скан образа перед выкладкой кабинета.
2. **Коротко:** Приоритизация патчей.
   **Простыми словами:** Сначала high/critical, потом шум.
   **Пример:** Еженедельный security hygiene.
3. **Коротко:** Не замена Trivy.
   **Простыми словами:** Это explorer, сканер всё ещё Trivy.
   **Пример:** Оставить Trivy в pipeline.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #17 · [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)
⭐ 25885 · обновлён 0 дн. назад

💡 **Что это**
promptfoo — инструмент тестирования и red-teaming LLM/промптов: регрессии качества, проверки безопасности промптов, сравнения моделей.

🎯 **Зачем может подойти**
Если внедряете AI-агентов во внутренние процессы — нужен способ ловить деградации и опасные ответы до прода.

🛠 **Как применить**
1. **Коротко:** Регресс промпта калькулятора.
   **Простыми словами:** Набор кейсов «цена не должна врать».
   **Пример:** После смены модели прогнать suite.
2. **Коротко:** Red-team утечек.
   **Простыми словами:** Проверить, не вытаскивает ли агент секреты.
   **Пример:** Промпт с просьбой показать .env.
3. **Коротко:** Сравнение моделей.
   **Простыми словами:** Одинаковые кейсы на двух провайдерах.
   **Пример:** Выбор модели для бота поддержки.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #18 · [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks)
⭐ 29844 · обновлён 11 дн. назад

💡 **Что это**
Gitleaks — сканер секретов в git-истории и диффе: ключи, токены, пароли до того, как уедут в remote.

🎯 **Зачем может подойти**
Базовая гигиена для репозиториев команды и CI. Прямо влияет на безопасность инфраструктуры.

🛠 **Как применить**
1. **Коротко:** Pre-commit/CI scan.
   **Простыми словами:** Падать сборку, если в диффе токен.
   **Пример:** Случайно закоммиченный TG_BOT_TOKEN.
2. **Коротко:** Аудит истории.
   **Простыми словами:** Найти старые утечки в репо.
   **Пример:** Разовый прогон по github-repo-scout и продуктам.
3. **Коротко:** Политика для агентов.
   **Простыми словами:** Агенты тоже коммитят — сканер ловит.
   **Пример:** После PR от coding-агента.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.


### 📁 3D и печать

━━━━━━━━━━━━━━━━━━━━
### #19 · [henmedia/layerling](https://github.com/henmedia/layerling)
⭐ 68 · обновлён 0 дн. назад

💡 **Что это**
layerling — простой браузерный 3D CAD под 3D-печать: примитивы, отверстия, скругления, без аккаунта.

🎯 **Зачем может подойти**
Быстрые макеты оснастки/прототипов упаковки без тяжёлого CAD. Для точной оснастки может не хватить — зато низкий порог.

🛠 **Как применить**
1. **Коротко:** Прототип вкладыша.
   **Простыми словами:** Набросать форму и сразу к печати.
   **Пример:** Вкладыш под пробный лоток.
2. **Коротко:** Обучение команды.
   **Простыми словами:** Показать идею конструкции без SolidWorks.
   **Пример:** Согласование формы с менеджером.
3. **Коротко:** Не замена промышленного CAD.
   **Простыми словами:** Для черновика, не для серии штампа.
   **Пример:** Дальше — в серьёзный CAD/CAM.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #20 · [Klipper3d/klipper](https://github.com/Klipper3d/klipper)
⭐ 11947 · обновлён 1 дн. назад

💡 **Что это**
Klipper — прошивка 3D-принтера: тяжёлые расчёты на хосте, точное движение и гибкая конфигурация железа.

🎯 **Зачем может подойти**
Если есть печать прототипов/оснастки — стандарт де-факто для тонкой настройки принтера.

🛠 **Как применить**
1. **Коротко:** Стабильнее прототипы.
   **Простыми словами:** Меньше брака на сложных деталях.
   **Пример:** Печать мастер-модели лотка.
2. **Коротко:** Тюнинг скорости/качества.
   **Простыми словами:** Конфиг под конкретный принтер.
   **Пример:** Ночной прогон серии образцов.
3. **Коротко:** Инфрапечать в мастерской.
   **Простыми словами:** Держать принтеры предсказуемыми.
   **Пример:** Единый стек Klipper+моникторинг.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: GPL-3.0.

━━━━━━━━━━━━━━━━━━━━
### #21 · [OctoPrint/OctoPrint](https://github.com/OctoPrint/OctoPrint)
⭐ 9133 · обновлён 2 дн. назад

💡 **Что это**
OctoPrint — веб-интерфейс управления 3D-принтером: загрузка G-code, контроль печати, плагины и удалённый мониторинг.

🎯 **Зачем может подойти**
Удобный remote-контроль печати прототипов без сидения у принтера.

🛠 **Как применить**
1. **Коротко:** Старт печати удалённо.
   **Простыми словами:** Залил файл — запустил из браузера.
   **Пример:** Прототип крышки, пока вы на складе.
2. **Коротко:** Камера/статус.
   **Простыми словами:** Видеть, не отвалился ли слой.
   **Пример:** Не приехать зря к сорванной печати.
3. **Коротко:** Плагины под процесс.
   **Простыми словами:** Расширения под уведомления.
   **Пример:** Алерт в Telegram «печать готова».

🔒 **Безопасность**
Scorecard 5.4; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: AGPL-3.0.


### 📁 Музыкальное производство

━━━━━━━━━━━━━━━━━━━━
### #22 · [ryukau/UhhyouWebSynthesizers](https://github.com/ryukau/UhhyouWebSynthesizers)
⭐ 68 · обновлён 0 дн. назад

💡 **Что это**
UhhyouWebSynthesizers — набор генераторов WAVE в браузере (web audio), без установки тяжёлого DAW-плагина.

🎯 **Зачем может подойти**
Слабая связь с бизнесом упаковки — сайд-стек электронной музыки. Честно: для удовольствия/экспериментов, не для цеха.

🛠 **Как применить**
1. **Коротко:** Быстрый звуковой скетч.
   **Простыми словами:** Открыл страницу — получил WAV.
   **Пример:** Черновик патча без установки VST.
2. **Коротко:** Обучение синтезу.
   **Простыми словами:** Крутить параметры в браузере.
   **Пример:** Вечерний эксперимент.
3. **Коротко:** Не бизнес-инструмент.
   **Простыми словами:** Не ждать ROI для БОКСМАРТ.
   **Пример:** Держать в личном контуре.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: Apache-2.0.

━━━━━━━━━━━━━━━━━━━━
### #23 · [sonic-pi-net/sonic-pi](https://github.com/sonic-pi-net/sonic-pi)
⭐ 12196 · обновлён 0 дн. назад

💡 **Что это**
Sonic Pi — live-coding музыкальная среда: писать электронную музыку кодом, с уроками и live-выступлениями.

🎯 **Зачем может подойти**
Музыкальный сайд-проект/обучение. К упаковке не относится.

🛠 **Как применить**
1. **Коротко:** Live-coding сессия.
   **Простыми словами:** Музыка как код с мгновенным фидбеком.
   **Пример:** Вечерний jam.
2. **Коротко:** Обучение ритму/синтезу.
   **Простыми словами:** Понятные абстракции для паттернов.
   **Пример:** Практика вместо пустого DAW.
3. **Коротко:** Не для производства.
   **Простыми словами:** Нет пересечения с MES/CRM.
   **Пример:** Только hobby-трек.

🔒 **Безопасность**
Scorecard 5; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: NOASSERTION.

━━━━━━━━━━━━━━━━━━━━
### #24 · [BespokeSynth/BespokeSynth](https://github.com/BespokeSynth/BespokeSynth)
⭐ 4736 · обновлён 3 дн. назад

💡 **Что это**
BespokeSynth — open-source software modular synth: патчинг модулей, живой перформанс и глубокий саунд-дизайн на десктопе.

🎯 **Зачем может подойти**
Сильный инструмент для электронной музыки. Коммерциализация ниши в Беларуси возможна как сайд, не как упаковочный продукт.

🛠 **Как применить**
1. **Коротко:** Модульный патч без железа.
   **Простыми словами:** Собрать цепочку осцилляторов/эффектов в софте.
   **Пример:** Черновик трека за вечер.
2. **Коротко:** Перформанс.
   **Простыми словами:** Крутить патч live.
   **Пример:** Репетиция сета.
3. **Коротко:** Отделить от бизнеса.
   **Простыми словами:** Не смешивать с репо продуктов БОКСМАРТ.
   **Пример:** Отдельный hobby-репозиторий.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: GPL-3.0.


### 📁 Коммерческие SaaS-заготовки

━━━━━━━━━━━━━━━━━━━━
### #25 · [brandhaug/b2b-saas-starter](https://github.com/brandhaug/b2b-saas-starter)
⭐ 51 · обновлён 0 дн. назад

💡 **Что это**
B2B SaaS Starter на Cloudflare: TanStack Start, Effect v4, Drizzle D1 и заготовка под B2B-продукт (auth/tenant-ориентированный каркас).

🎯 **Зачем может подойти**
Близко к коммерциализации внутренних инструментов: мультитенантный каркас на современном стеке. Оценить зрелость до выбора как базы.

🛠 **Как применить**
1. **Коротко:** Каркас B2B-кабинета.
   **Простыми словами:** Организации/пользователи с самого старта.
   **Пример:** Кабинет для дилеров упаковки.
2. **Коротко:** Cloudflare-first деплой.
   **Простыми словами:** Меньше возни с классическим VPS на старте.
   **Пример:** Пилот калькулятора как SaaS.
3. **Коротко:** Сравнить с Next-шаблонами.
   **Простыми словами:** TanStack Start ≠ Next — осознанный выбор.
   **Пример:** Spike на 2–3 экрана.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #26 · [nuxt-ui-templates/saas](https://github.com/nuxt-ui-templates/saas)
⭐ 566 · обновлён 0 дн. назад

💡 **Что это**
Nuxt SaaS Template — готовое SaaS-приложение на Nuxt UI: лендинг, pricing, docs, blog, auth и dashboard из коробки.

🎯 **Зачем может подойти**
Если допускаете Nuxt рядом с Next — быстрый маркетинг+кабинет. Для строгого Next-стека применимость ниже.

🛠 **Как применить**
1. **Коротко:** Лендинг + кабинет сразу.
   **Простыми словами:** Не собирать pricing/docs с нуля.
   **Пример:** Запуск сервиса расчёта упаковки.
2. **Коротко:** Auth и dashboard.
   **Простыми словами:** Базовый вход и панель уже есть.
   **Пример:** Пилот для 3 клиентов.
3. **Коротко:** Стек Nuxt.
   **Простыми словами:** Честно: это не Next.js.
   **Пример:** Брать только если Nuxt ок команде.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.

━━━━━━━━━━━━━━━━━━━━
### #27 · [apptension/saas-boilerplate](https://github.com/apptension/saas-boilerplate)
⭐ 3011 · обновлён 13 дн. назад

💡 **Что это**
SaaS Boilerplate от Apptension — полноценный каркас SaaS (биллинг, мультиTenant/обвязка продукта) для ускорения запуска коммерческого продукта.

🎯 **Зачем может подойти**
Классическая заготовка под коммерциализацию. Проверить лицензию, состав модулей и насколько легко вырезать лишнее.

🛠 **Как применить**
1. **Коротко:** Старт платного кабинета.
   **Простыми словами:** Биллинг и базовые сущности уже намечены.
   **Пример:** Подписка на B2B-калькулятор.
2. **Коротко:** Ускорение MVP.
   **Простыми словами:** Меньше времени на auth/billing glue.
   **Пример:** Вывод пилота за недели, не месяцы.
3. **Коротко:** Due diligence кода.
   **Простыми словами:** Большой boilerplate = много чужих решений.
   **Пример:** Ревью security и зависимостей до прода.

🔒 **Безопасность**
нет данных; fake stars — нет данных (API stargazers недоступен); скам-маркеров не найдено. Лицензия: MIT.


## ⛔ Отклонённые

| # | Категория | Репозиторий | Описание | Причина |
|---|-----------|-------------|----------|---------|
| — | AI-агенты и LLM | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Ultra-lightweight, open-source, self-hosted personal AI agent framework in Python with WebUI, tools, memory, MCP, multi-agent workflows, automation, and chat ap | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | AI-агенты и LLM | [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | The open-source context layer for AI agents. PipesHub turns your company's knowledge (Slack, Drive, Jira, GitHub, Microsoft 365 and 40+ connectors) into a permi | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | AI-агенты и LLM | [skyhook-io/radar](https://github.com/skyhook-io/radar) | The missing open-source Kubernetes UI with a built-in MCP server for AI agents. See what's broken, why, and what changed. Issues, Topology, event timeline, Helm | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | AI-агенты и LLM | [cosmicstack-labs/mercury-agent](https://github.com/cosmicstack-labs/mercury-agent) | Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access. Runs 24/7 from CLI, Telegram or More. | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | AI-агенты и LLM | [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) | The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Автоматизация бизнеса | [nocobase/nocobase](https://github.com/nocobase/nocobase) | NocoBase is an open-source AI + no-code platform for building business systems fast. Instead of generating everything from scratch, AI works on top of productio | слой2: Dangerous-Workflow==0 при stars≥500 |
| — | Упаковка и производство | [Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core) | 🍻 Default and OSS formulae (built-from-source packages) for the package manager for everywhere | релевантность: keyword «homebrew» |
| — | Упаковка и производство | [flora-pm/flora-server](https://github.com/flora-pm/flora-server) | A modern package index for the Haskell ecosystem | релевантность: keyword «lora» |
| — | Упаковка и производство | [tamatebako/tebako](https://github.com/tamatebako/tebako) | tebako — the packaging and loading ecosystem: single-executable apps from any runtime, platform, and payload. Docs: docs/spec/ | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Упаковка и производство | [NixOS/nixpkgs](https://github.com/NixOS/nixpkgs) | Nix Packages collection & NixOS | слой2: Dangerous-Workflow==0 при stars≥500 |
| — | Упаковка и производство | [vanillagreencom/kendex](https://github.com/vanillagreencom/kendex) | Package manager for agents, skills, hooks, and extensions. Author once, install on every harness. QOL features included. | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Telegram-боты | [lextalens/math-drill-bot](https://github.com/lextalens/math-drill-bot) | Best ZNO Math Trainer Telegram Bot 2026 Adaptive Task Practice Guide | слой1: автор <30д и единственный репозиторий |
| — | Telegram-боты | [python-telegram-bot/python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) | We have made you a wrapper you can't refuse | слой2: Dangerous-Workflow==0 при stars≥500 |
| — | Telegram-боты | [nirholas/pump-fun-sdk](https://github.com/nirholas/pump-fun-sdk) | Token creation launching, bonding curve trading, AMM migration, tiered fees, creator fee sharing, vanity keygen, MCP server, Telegram bot & live dashboards | релевантность: keyword «crypto» |
| — | Telegram-боты | [aiskendi/pencarimovie-server](https://github.com/aiskendi/pencarimovie-server) | It creates a Telegram bot server that can download or stream files directly from the Telegram cloud via MTProto to your browser. It also has NuVio Stremio Addon | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Next.js и веб | [mwakidenis/Mpesa-Based_Wi-Fi-Hotspot_Billing_System](https://github.com/mwakidenis/Mpesa-Based_Wi-Fi-Hotspot_Billing_System) | 📶 A fast, automated Hotspot Billing system powered by M-Pesa STK Push for instant, secure user access. Built with Node.js, MySQL, Next.js, and React, it deliver | релевантность: keyword «hotspot billing» |
| — | 3D и печать | [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | Describe it or draw it — Kiln makes it real. The open-source MCP server for 3D printing: AI agents (Claude, Codex, Cursor, or any MCP client) design, generate, | слой4: маркер в install.sh |
| — | 3D и печать | [partcad/partcad](https://github.com/partcad/partcad) | Package manager for things. Start designing modular hardware! PartCAD is the standard for documenting manufacturable physical products (a.k.a. Digital Thread or | слой4: маркер в install.sh |
| — | 3D и печать | [TautvydasDerzinskas/Thingport](https://github.com/TautvydasDerzinskas/Thingport) | Collect, organize, preview, and manage your 3D printing models from the places where you discover them. | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Коммерческие SaaS-заготовки | [saucebase-dev/saucebase](https://github.com/saucebase-dev/saucebase) | Laravel SaaS starter kit with Vue or React, TypeScript, Inertia.js, Tailwind, and shadcn - built for rapid SaaS development | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Упаковка и производство | [ata-core/ata-validator](https://github.com/ata-core/ata-validator) | JSON Schema validator that compiles to plain JavaScript, still runs where code generation is blocked, and can be compiled away at build time. Passes the full of | релевантность: ложное срабатывание search / не по профилю категории |
| — | Упаковка и производство | [JuliaRegistries/General](https://github.com/JuliaRegistries/General) | The official registry of general Julia packages | релевантность: ложное срабатывание search / не по профилю категории |
| — | Упаковка и производство | [hashgraph-online/hol-guard](https://github.com/hashgraph-online/hol-guard) | Open-source antivirus for AI agents: block risky tools, secret access, prompt injection, malicious packages, MCP servers, plugins, and skills at runtime. | релевантность: ложное срабатывание search / не по профилю категории |
| — | Telegram-боты | [abdul97233/TeraBox-Downloader-Bot](https://github.com/abdul97233/TeraBox-Downloader-Bot) | Telegram bot in Python enabling seamless file downloads from Terabox links. | релевантность: ложное срабатывание search / не по профилю категории |
| — | Telegram-боты | [Cleverfuxaqo1668/Polymarket-Telegram-Bot](https://github.com/Cleverfuxaqo1668/Polymarket-Telegram-Bot) | A handy Polymarket prediction bot for Telegram. | релевантность: ложное срабатывание search / не по профилю категории |
| — | Next.js и веб | [JakobAIOdev/Vintrack-Vinted-Monitor](https://github.com/JakobAIOdev/Vintrack-Vinted-Monitor) | Real-time Vinted monitor with instant Discord alerts, proxy rotation & a beautiful dashboard. Self-hosted with Docker. Built with Next.js 16 + Go. | релевантность: ложное срабатывание search / не по профилю категории |
| — | Next.js и веб | [lingdojo/kana-dojo](https://github.com/lingdojo/kana-dojo) | Aesthetic, minimalist platform for learning Japanese inspired by Duolingo and Monkeytype, built with Next.js and sponsored by Vercel. Beginner-friendly with ple | релевантность: ложное срабатывание search / не по профилю категории |
| — | Кибербезопасность | [falcosecurity/evolution](https://github.com/falcosecurity/evolution) | Evolution process of The Falco Project | релевантность: ложное срабатывание search / не по профилю категории |
| — | Кибербезопасность | [jakka351/FG-Falcon](https://github.com/jakka351/FG-Falcon) | FoA Orion Repository | релевантность: ложное срабатывание search / не по профилю категории |
| — | 3D и печать | [mehdihadeli/food-delivery-modular-monolith](https://github.com/mehdihadeli/food-delivery-modular-monolith) | 🌭 A practical and imaginary food and grocery delivery modular monolith, built with .Net 8, Domain-Driven Design, CQRS, Vertical Slice Architecture, Event-Driven | релевантность: ложное срабатывание search / не по профилю категории |
| — | 3D и печать | [Kyoril/mmo](https://github.com/Kyoril/mmo) | This repository contains the prototype of an mmorpg with a custom engine, built entirely in C++. It contains the client, tools and servers. The goal of this pro | релевантность: ложное срабатывание search / не по профилю категории |
| — | Музыкальное производство | [rashedbp2024-sudo/Sylenth-Sound-Forge](https://github.com/rashedbp2024-sudo/Sylenth-Sound-Forge) | Sylenth1 VST for Windows 11 and 10: 2026 Install and Setup Guide | релевантность: ложное срабатывание search / не по профилю категории |
| — | Музыкальное производство | [tarboh/S-MU2000](https://github.com/tarboh/S-MU2000) | Yamaha MU2000 のソフトウェア音源。実機の firmware をそのまま走らせる VST3。非公式・ヤマハとは無関係 | релевантность: ложное срабатывание search / не по профилю категории |
| — | Коммерческие SaaS-заготовки | [EinGuterWaran/awesome-opensource-boilerplates](https://github.com/EinGuterWaran/awesome-opensource-boilerplates) | A curated list of production-ready and free SaaS boilerplates and starter templates. Build your next software-as-a-service project with battle-tested open sourc | релевантность: ложное срабатывание search / не по профилю категории |
| — | Упаковка и производство | [Homebrew/brew](https://github.com/Homebrew/brew) | 🍺 The Package Manager for Everywhere | релевантность: deny-паттерн (json schema/julia/registry/antivirus/fal) |
| — | Упаковка и производство | [pnpm/pnpm](https://github.com/pnpm/pnpm) | Fast, disk space efficient package manager | релевантность: deny-паттерн (json schema/julia/registry/antivirus/fal) |
| — | Упаковка и производство | [lerna/lerna](https://github.com/lerna/lerna) | Lerna is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository. | релевантность: deny-паттерн (json schema/julia/registry/antivirus/fal) |
| — | Упаковка и производство | [Homebrew/homebrew-cask](https://github.com/Homebrew/homebrew-cask) | 🍻 Default casks (upstream binary packages) for the package manager for everywhere | релевантность: deny-паттерн (json schema/julia/registry/antivirus/fal) |
| — | Упаковка и производство | [perixtar/Tech-OA-Interview-Questions](https://github.com/perixtar/Tech-OA-Interview-Questions) | Daily updated list of Tech Company OAs and Interview Problems. Save your time from finding them all over the internet. | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [Kuingsmile/PicList](https://github.com/Kuingsmile/PicList) | An image upload and manage tool, base on PicGo | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [rust-lang/crates.io](https://github.com/rust-lang/crates.io) | The Rust package registry | релевантность: deny-паттерн (json schema/julia/registry/antivirus/fal) |
| — | Упаковка и производство | [easylist/easylist](https://github.com/easylist/easylist) | EasyList filter subscription (EasyList, EasyPrivacy, EasyList Cookie, Fanboy's Social/Annoyances/Notifications Blocking List) | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [mthcht/awesome-lists](https://github.com/mthcht/awesome-lists) | Awesome Security lists for SOC/CERT/CTI | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [SoliSpirit/mtproto](https://github.com/SoliSpirit/mtproto) | Fresh and reliable Telegram MTProto proxies updated automatically every 12 hours. Free, fast, and verified proxy list to bypass censorship and ensure secure Tel | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | The AI-Engineering Foundation Framework for CRM/ERP and commerce: open-source TypeScript, with multi-tenancy, RBAC, events and domain modules already decided as | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [ossf/cve-bin-tool](https://github.com/ossf/cve-bin-tool) | The CVE Binary Tool helps you determine if your system includes known vulnerabilities. You can scan binaries for over 350 common, vulnerable components (openssl | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [BurningC4/Chinese-IPTV](https://github.com/BurningC4/Chinese-IPTV) | Chinese CCTV List (IPV4) | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [marcelscruz/dev-resources](https://github.com/marcelscruz/dev-resources) | A collaborative list of resources for developers | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [dromara/skyeye](https://github.com/dromara/skyeye) | 智能办公OA系统[SpringBoot2-快速开发平台]，适用于医院，学校，中小型企业等机构的管理。Activiti5.22+动态表单实现零java代码即可做到复杂业务的流程实施，同时包含文件在线操作、日志、考勤、CRM、ERP进销存、项目、拖拽式生成问卷、日程、笔记、计划、行政等多种复杂业务功能。同时，可进行授权二开 | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [adempiere/adempiere](https://github.com/adempiere/adempiere) | ADempiere Business Suite ERP/CRM/MFG/SCM/POS done the Bazaar way in an open and unabated fashion. Focus is on the Community that includes Subject Matter Special | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [erpc/erpc](https://github.com/erpc/erpc) | eRPC — fault-tolerant evm rpc proxy | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [HelpCode-ai/anythingmcp](https://github.com/HelpCode-ai/anythingmcp) | Open-source, self-hosted MCP gateway: turn any REST/OpenAPI, SOAP, GraphQL, OData or SQL API into MCP tools for Claude, ChatGPT & Copilot. 331 connectors incl. | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [idempiere/idempiere](https://github.com/idempiere/idempiere) | iDempiere. Community Powered Enterprise.  Full Open Source Business Suite ERP/CRM/MFG/SCM/POS | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [zloi-user/hideip.me](https://github.com/zloi-user/hideip.me) | proxy list that updates every 10 minutes | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [NeoRazorX/facturascripts](https://github.com/NeoRazorX/facturascripts) | Open source ERP software. Built on modern PHP and bootstrap. Easy and powerful. | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [OCA/account-financial-tools](https://github.com/OCA/account-financial-tools) | Odoo Accountant Financial Tools and Utils | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [LTplus-AG/ifc-lite](https://github.com/LTplus-AG/ifc-lite) | Open-source IFC toolkit: WebGPU rendering, columnar in-memory store, exact-arithmetic geometry kernel. Runs from a CDN. 30+ TypeScript packages and 5 Rust crate | релевантность: deny-паттерн (json schema/julia/registry/antivirus/fal) |
| — | Упаковка и производство | [ivnvxd/mcp-server-odoo](https://github.com/ivnvxd/mcp-server-odoo) | Model Context Protocol (MCP) server that enables AI assistants to securely interact with Odoo ERP systems through standardized resources and tools for data retr | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [ErcinDedeoglu/proxies](https://github.com/ErcinDedeoglu/proxies) | 🔍💻🔒🌀🔄🌟🚀📂📈 Need a daily updated proxy list? Look no further! Our PROXY list offers the freshest and most reliable proxy servers available. Say goodbye to outdate | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [tryton/tryton](https://github.com/tryton/tryton) | Mirror of tryton | релевантность: нет обязательных keywords категории |
| — | Упаковка и производство | [oven-sh/bun](https://github.com/oven-sh/bun) | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Упаковка и производство | [safedep/pmg](https://github.com/safedep/pmg) | PMG protects developers, AI agents from malicious open source packages using proxy, sandbox and SafeDep's threat intelligence feed. | слой2: Vulnerabilities==0 при stars≥500 |
| — | Telegram-боты | [filamentphp/filament](https://github.com/filamentphp/filament) | A powerful open-source UI framework for Laravel • Build and ship apps & admin panels fast with Livewire | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Open source Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents. Built for multitasking, organization, and programmability. | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [Mahmud0808/Iconify](https://github.com/Mahmud0808/Iconify) | Iconify lets you customize your Android 12+ device easily. Change icons, colors, shapes, and even the notification panel for a personalized look that suits your | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [continew-org/continew-admin](https://github.com/continew-org/continew-admin) | 🔥Almost最佳后端规范🔥页面现代美观，且专注设计与代码细节的高质量多租户中后台管理系统框架。开箱即用，持续迭代优化，持续提供舒适的开发体验。当前采用技术栈：SpringBoot v3.4.x (Java17)、Vue3 & ArcoDesign、TS、Vite5 、SaToken、MyBatisPlus、Redis | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [dj-bolt/django-bolt](https://github.com/dj-bolt/django-bolt) | The fastest Python web framework, built on Django. Rust (Actix Web) HTTP server + async typed handlers + msgspec, with the full Django ORM, Admin, middleware an | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [zofe/rapyd-admin](https://github.com/zofe/rapyd-admin) | Rapyd Admin is an open-source admin panel for Laravel — a light alternative to Nova, Filament and Backpack | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [NucleusFramework/Nucleus](https://github.com/NucleusFramework/Nucleus) | Native desktop platform for the JVM. Compose Multiplatform apps with real OS integration — native window decorations, notifications, taskbar and dock, code sign | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [nextcloud/groupfolders](https://github.com/nextcloud/groupfolders) | 📁👩‍👩‍👧‍👦 Admin-configured folders shared by everyone in a group or team. https://github.com/nextcloud-releases/groupfolders | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [gopherium/gophenberg](https://github.com/gopherium/gophenberg) | A plugin-first CMS. Go backend, React admin, Gutenberg editor. | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [marcocrupi/react-native-notify-kit](https://github.com/marcocrupi/react-native-notify-kit) | Maintained Notifee-compatible fork: a feature-rich React Native notification library for Android, iOS, FCM Mode, and Expo CNG development builds. | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [h100envy/gem-search](https://github.com/h100envy/gem-search) | Rainbow spider that X-rays memecoins: bundles, linked wallets, dev history. Scanner, Telegram bot, live Bundle Index. | релевантность: keyword «pump» |
| — | Telegram-боты | [m4r1k/Eneru](https://github.com/m4r1k/Eneru) | ⚡ UPS monitoring and shutdown orchestration for NUT: multi-UPS policy, VM/container/remote shutdown, TUI, API, Prometheus, MQTT, Grafana, and persistent notific | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [nextcloud/serverinfo](https://github.com/nextcloud/serverinfo) | 📊 A monitoring app which creates a server info dashboard for admins | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [minio/madmin-go](https://github.com/minio/madmin-go) | The MinIO Admin Go Client SDK provides APIs to manage MinIO services | релевантность: нет обязательных keywords категории |
| — | Telegram-боты | [LISA-KOREA/YouTube-Video-Download-Bot](https://github.com/LISA-KOREA/YouTube-Video-Download-Bot) | This A simple YouTube Video/Shorts/Music/Asmr Downloading Telegram Bot / members-only videos / 🥰 Please Give Me A Star ⭐️ | релевантность: deny-паттерн (polymarket/crypto/trading/signal/vpn/pro) |
| — | Next.js и веб | [prisma/orm](https://github.com/prisma/orm) | Next-generation ORM for Node.js & TypeScript / PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB | релевантность: нет обязательных keywords категории |
| — | Next.js и веб | [requarks/wiki](https://github.com/requarks/wiki) | Wiki.js / Next Generation Open Source Wiki | релевантность: нет обязательных keywords категории |
| — | Next.js и веб | [webdriverio/webdriverio](https://github.com/webdriverio/webdriverio) | Next-gen browser and mobile automation test framework for Node.js | релевантность: нет обязательных keywords категории |
| — | Next.js и веб | [Naresh-Khatri/3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) | Interactive 3D developer portfolio with a keyboard where every keycap is a skill. Built with Next.js, React, TypeScript, GSAP & Motion. Free to use! | релевантность: deny-паттерн (vinted/genshin/anime/japanese/kana/hirag) |
| — | Next.js и веб | [enriclluelles/route_translator](https://github.com/enriclluelles/route_translator) | Translate your rails app route to various languages without the hassle | релевантность: нет обязательных keywords категории |
| — | Next.js и веб | [payloadcms/payload](https://github.com/payloadcms/payload) | Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly. Use Pa | слой2: Dangerous-Workflow==0 при stars≥500 |
| — | Кибербезопасность | [Azure/Azure-Sentinel](https://github.com/Azure/Azure-Sentinel) | Cloud-native SIEM for intelligent security analytics for your entire enterprise. | слой2: Dangerous-Workflow==0 при stars≥500 |
| — | 3D и печать | [go-playground/validator](https://github.com/go-playground/validator) | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | релевантность: нет обязательных keywords категории |
| — | 3D и печать | [gookit/goutil](https://github.com/gookit/goutil) | 💪 Helper Utils(900+): int, byte, string, array/slice, map, struct, dump, convert/format, error, web/http, cli/flag, OS/ENV, filesystem, system, test/assert, tim | релевантность: нет обязательных keywords категории |
| — | 3D и печать | [mehdihadeli/food-delivery-microservices](https://github.com/mehdihadeli/food-delivery-microservices) | 🍔 A practical and cloud-native food delivery microservices, built with .Net Aspire, .Net 10, Wolverine, Domain-Driven Design, CQRS, Vertical Slice Architecture, | релевантность: deny-паттерн (food delivery/modular monolith/\bmmo\b/m) |
| — | 3D и печать | [marcoturi/fastify-boilerplate](https://github.com/marcoturi/fastify-boilerplate) | Fastify 5 application boilerplate based on clean architecture, domain-driven design, CQRS, functional programming, vertical slice architecture for building prod | релевантность: нет обязательных keywords категории |
| — | 3D и печать | [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | Official source code of FreeCAD, a free and opensource multiplatform 3D parametric modeler. | слой2: Dangerous-Workflow==0 при stars≥500 |
| — | 3D и печать | [prestonbrown/helixscreen](https://github.com/prestonbrown/helixscreen) | A modern, lightweight touchscreen interface for Klipper 3D printers | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Музыкальное производство | [llvm/llvm-project](https://github.com/llvm/llvm-project) | The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. | слой2: Vulnerabilities==0 при stars≥500 |
| — | Коммерческие SaaS-заготовки | [Anil-matcha/awesome-generative-ai-apps](https://github.com/Anil-matcha/awesome-generative-ai-apps) | 50+ open-source generative AI apps you can clone, deploy, and monetize — image generators, video tools, virtual try-ons, AI SaaS templates, and platform integra | релевантность: deny-паттерн (awesome-/curated (list/collection)/aweso) |
| — | Упаковка и производство | [pypa/pipenv](https://github.com/pypa/pipenv) | Python Development Workflow for Humans. | релевантность: ложное срабатывание (software packaging / не та ниша) |
| — | Упаковка и производство | [microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs) | The Microsoft community Windows Package Manager manifest repository | релевантность: ложное срабатывание (software packaging / не та ниша) |
| — | Упаковка и производство | [SynoCommunity/spksrc](https://github.com/SynoCommunity/spksrc) | Cross compilation framework to create native packages for the Synology's NAS | релевантность: ложное срабатывание (software packaging / не та ниша) |
| — | Кибербезопасность | [appwrite/appwrite](https://github.com/appwrite/appwrite) | The open-source cloud for agents & devs. Including Auth, Databases, Storage, Functions, Messaging, Hosting, Realtime, WAF and more | релевантность: ложное срабатывание (software packaging / не та ниша) |
| — | 3D и печать | [haris-musa/excel-mcp-server](https://github.com/haris-musa/excel-mcp-server) | Excel MCP server: let AI (Claude, Cursor, VS Code) create and edit Excel files with charts, PivotTables, slicers and formulas. No Excel required. | релевантность: ложное срабатывание (software packaging / не та ниша) |
| — | Музыкальное производство | [Freika/dawarich](https://github.com/Freika/dawarich) | Your favorite self-hostable alternative to Google Timeline (Google Location History) | релевантность: ложное срабатывание (software packaging / не та ниша) |
| — | Упаковка и производство | [termux/termux-packages](https://github.com/termux/termux-packages) | A package build system for Termux. | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [MadMaxChow/VLOOK](https://github.com/MadMaxChow/VLOOK) | VLOOK™ 是优雅好用的 Typora/Markdown 主题包和排版增强插件。  VLOOK™ is an elegant and practical THEME PACKAGE × TYPESETTING PLUS for Typora/Markdown | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [chromebrew/chromebrew](https://github.com/chromebrew/chromebrew) | Package manager for Chrome OS | релевантность: software packaging / package manager |
| — | Упаковка и производство | [odoo/documentation](https://github.com/odoo/documentation) | Odoo documentation sources | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [safedep/vet](https://github.com/safedep/vet) | Protect against malicious open source packages 🤖 | релевантность: software packaging / package manager |
| — | Упаковка и производство | [mdlayher/netlink](https://github.com/mdlayher/netlink) | Package netlink provides low-level access to Linux netlink sockets (AF_NETLINK). MIT Licensed. | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [terrapkg/packages](https://github.com/terrapkg/packages) | Monorepo for Terra Packages | релевантность: software packaging / package manager |
| — | Упаковка и производство | [Tecnativa/doodba](https://github.com/Tecnativa/doodba) | Base image for making the creation of customized Odoo environments a piece of cake | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [guohuadeng/app-odoo](https://github.com/guohuadeng/app-odoo) | Odoo Free Addon for 20,19,18,17,16,15,14,13,12,11,10, CE and EE and SH。Odoo的社区版、企业版、.sh版等全版本开源免费增强模块应用集合。 | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [OCA/l10n-brazil](https://github.com/OCA/l10n-brazil) | Localização brasileira oficial do Odoo. | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [akretion/factur-x](https://github.com/akretion/factur-x) | Python lib for Factur-X, the e-invoicing standard for France and Germany | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [OCA/l10n-italy](https://github.com/OCA/l10n-italy) | Odoo Italian localization | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [mrpt-ros-pkg/mrpt_navigation](https://github.com/mrpt-ros-pkg/mrpt_navigation) | ROS 2 nodes wrapping core MRPT functionality: localization, autonomous navigation, rawlogs, etc. SLAM is in other packages. | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [odoo/odoo-ls](https://github.com/odoo/odoo-ls) | Odoo Language Server | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [OCA/dms](https://github.com/OCA/dms) | Odoo modules for a Document Management System | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [ingadhoc/odoo-argentina](https://github.com/ingadhoc/odoo-argentina) | Una Localización Argentina de Odoo amigable | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [pasteurlabs/tesseract-core](https://github.com/pasteurlabs/tesseract-core) | Universal components for differentiable scientific computing. :package: | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [OCA/maintenance](https://github.com/OCA/maintenance) | Odoo modules for businesses that implies maintenance tasks | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [odoo/industry](https://github.com/odoo/industry) | Odoo Industry Apps | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [pearlxcore/PS5PKGTool](https://github.com/pearlxcore/PS5PKGTool) | A Windows app for managing your PS5 dump and image collection, reading PS5 packages, and building or converting images. | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [muk-it/odoo-modules](https://github.com/muk-it/odoo-modules) | Odoo App Store Modules | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [soypat/gsdf](https://github.com/soypat/gsdf) | 3D/2D CAD design package written in Go. GPU accelerated. | релевантность: нет physical packaging/MES маркеров |
| — | Упаковка и производство | [nam20485/OdbDesign](https://github.com/nam20485/OdbDesign) | A free open source cross-platform C++ library for parsing ODB++ Design archives, accessing their data, and building net list product models. Exposed via a REST | релевантность: software packaging / package manager |
| — | Упаковка и производство | [ingadhoc/account-invoicing](https://github.com/ingadhoc/account-invoicing) | Odoo Accounting related modules | релевантность: нет manufacturing/packaging контекста |
| — | Упаковка и производство | [minhng92/odoo-17-docker-compose](https://github.com/minhng92/odoo-17-docker-compose) | Set up Odoo 17 (released 2023) quickly for development/production using Docker Compose. | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Упаковка и производство | [minhng92/odoo-16-docker-compose](https://github.com/minhng92/odoo-16-docker-compose) | Set up Odoo 16 (released 2022) quickly for development/production using Docker Compose. | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Упаковка и производство | [minhng92/odoo-18-docker-compose](https://github.com/minhng92/odoo-18-docker-compose) | Set up Odoo 18 (released 2024) quickly for development/production using Docker Compose. | слой4: скам-маркер curl\s+[^\n/]*\/\s*(ba)?sh |
| — | Кибербезопасность | [elie222/rakazo](https://github.com/elie222/rakazo) | Open-source Grok Bot alternative. Choose your own model and sandbox. | релевантность: нет security keywords |
| — | Кибербезопасность | [ArtalkJS/Artalk](https://github.com/ArtalkJS/Artalk) | 🌌  Your Self-hosted Comment System. / 自托管评论系统 | релевантность: нет security keywords |
| — | Кибербезопасность | [ulsklyc/yuvomi](https://github.com/ulsklyc/yuvomi) | Self-hosted family planner - tasks, calendars, shopping, meals, budget. Your data, your server. | релевантность: нет security keywords |
| — | Кибербезопасность | [beenuar/AiSOC](https://github.com/beenuar/AiSOC) | Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Se | слой4: маркер в install.sh |
| — | Кибербезопасность | [oss-review-toolkit/ort](https://github.com/oss-review-toolkit/ort) | A suite of tools to automate software compliance checks. | слой2: Vulnerabilities==0 при stars≥500 |
| — | Кибербезопасность | [zarf-dev/zarf](https://github.com/zarf-dev/zarf) | The Airgap Native Package Manager for Kubernetes | слой2: Vulnerabilities==0 при stars≥500 |
| — | Кибербезопасность | [project-copacetic/copacetic](https://github.com/project-copacetic/copacetic) | 🧵 CLI tool for directly patching container images! | слой2: Vulnerabilities==0 при stars≥500 |
| — | 3D и печать | [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible | релевантность: нет 3D keywords |
| — | 3D и печать | [hasura/graphql-engine](https://github.com/hasura/graphql-engine) | Blazing fast, instant realtime GraphQL APIs on all your data with fine grained access control, also trigger webhooks on database events. | релевантность: нет 3D keywords |
| — | 3D и печать | [libretro/RetroArch](https://github.com/libretro/RetroArch) | Cross-platform, sophisticated frontend for the libretro API. Licensed GPLv3. | релевантность: нет 3D keywords |
| — | 3D и печать | [FastEndpoints/FastEndpoints](https://github.com/FastEndpoints/FastEndpoints) | A light-weight REST API development framework for ASP.NET 8 and newer. | релевантность: нет 3D keywords |
| — | 3D и печать | [getkin/kin-openapi](https://github.com/getkin/kin-openapi) | OpenAPI 3.0 and 3.1 and 3.2 (and Swagger v2) implementation for Go (parsing, converting, validation, and more) | релевантность: нет 3D keywords |
| — | 3D и печать | [apache/hugegraph](https://github.com/apache/hugegraph) | A graph database that supports more than 100+ billion data, high performance and scalability (Include OLTP Engine & REST-API & Backends) | релевантность: нет 3D keywords |
| — | 3D и печать | [feder-cr/invisible_playwright](https://github.com/feder-cr/invisible_playwright) | Playwright that anti-bots cannot see, so no captchas: same API, anti-detect stealth headless Firefox, undetected fingerprint, bypass bot detection, Python web s | релевантность: нет 3D keywords |
| — | 3D и печать | [beenuar/AiSOC](https://github.com/beenuar/AiSOC) | Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Se | релевантность: не 3D/печать |
| — | 3D и печать | [feder-cr/invisible_selenium](https://github.com/feder-cr/invisible_selenium) | Selenium that anti-bots cannot see, so no captchas: same API, anti-detect stealth headless Firefox, undetected fingerprint, bypass bot detection, Python web scr | релевантность: нет 3D keywords |
| — | 3D и печать | [neoforged/NeoForge](https://github.com/neoforged/NeoForge) | A modding API for Minecraft: Java Edition, based on Forge | релевантность: нет 3D keywords |
| — | 3D и печать | [feder-cr/invisible_puppeteer](https://github.com/feder-cr/invisible_puppeteer) | Puppeteer for Python that anti-bots cannot see, so no captchas: same API, anti-detect stealth headless Firefox, undetected fingerprint, bypass bot detection, we | релевантность: нет 3D keywords |
| — | 3D и печать | [SylphxAI/anymd](https://github.com/SylphxAI/anymd) | Any file → clean Markdown for AI agents: PDF, Word, PowerPoint, Excel, EPUB, HTML and web pages, images (OCR), audio and video (metadata, subtitles, transcripts | релевантность: не 3D/печать |
| — | 3D и печать | [unbrowse-ai/unbrowse](https://github.com/unbrowse-ai/unbrowse) | Unbrowse - Reverse engineer any website so that your agents can access its APIs directly | релевантность: нет 3D keywords |
| — | Музыкальное производство | [xtool-org/xtool](https://github.com/xtool-org/xtool) | Cross-platform Xcode replacement. Build and deploy iOS apps with SwiftPM on Linux, Windows, macOS. | релевантность: нет music keywords |
| — | Музыкальное производство | [InternLM/xtuner](https://github.com/InternLM/xtuner) | A Next-Generation Training Engine Built for Ultra-Large MoE Models | релевантность: нет music keywords |
| — | Музыкальное производство | [xtdb/xtdb](https://github.com/xtdb/xtdb) | An immutable SQL database for application development, time-travel reporting and data compliance. Developed by @juxt | релевантность: нет music keywords |
| — | Музыкальное производство | [microsoft/DirectXTK](https://github.com/microsoft/DirectXTK) | The DirectX Tool Kit (aka DirectXTK) is a collection of helper classes for writing DirectX 11.x code in C++ | релевантность: нет music keywords |
| — | Музыкальное производство | [microsoft/DirectXTex](https://github.com/microsoft/DirectXTex) | DirectXTex texture processing library | релевантность: нет music keywords |
| — | Музыкальное производство | [microsoft/DirectXTK12](https://github.com/microsoft/DirectXTK12) | The DirectX Tool Kit (aka DirectXTK12) is a collection of helper classes for writing DirectX 12 code in C++ | релевантность: нет music keywords |
| — | Музыкальное производство | [percona/percona-xtrabackup](https://github.com/percona/percona-xtrabackup) | Open source hot backup tool for InnoDB and XtraDB databases | релевантность: нет music keywords |
| — | Музыкальное производство | [apache/incubator-xtable](https://github.com/apache/incubator-xtable) | Apache XTable (incubating) is a cross-table converter for lakehouse table formats that facilitates interoperability across data processing systems and query eng | релевантность: нет music keywords |
| — | Музыкальное производство | [gammasoft71/xtd](https://github.com/gammasoft71/xtd) | Free open-source modern  C++20/23 framework to create console (CLI), forms (GUI like WinForms) and unit test (xUnit) applications and libraries on Windows, macO | релевантность: нет music keywords |
| — | Музыкальное производство | [grimme-lab/xtb](https://github.com/grimme-lab/xtb) | Semiempirical Extended Tight-Binding Program Package | релевантность: нет music keywords |
| — | Музыкальное производство | [eclipse-xtext/xtext](https://github.com/eclipse-xtext/xtext) | Eclipse Xtext™ is a language development framework | релевантность: нет music keywords |
| — | Музыкальное производство | [litaolemo/xtquant_big_convert](https://github.com/litaolemo/xtquant_big_convert) | 把大qmt的接口转接, 兼容原有miniqmt的接口以实现替换 | релевантность: нет music keywords |
| — | Музыкальное производство | [TheXTech/TheXTech](https://github.com/TheXTech/TheXTech) | The full port of the SMBX engine from VB6 into C++ and SDL2, FreeImage and MixerX | релевантность: нет music keywords |
| — | Музыкальное производство | [MaterSim/PyXtal](https://github.com/MaterSim/PyXtal) | A code to generate atomic structure with symmetry | релевантность: нет music keywords |
| — | Музыкальное производство | [percona/percona-xtradb-cluster](https://github.com/percona/percona-xtradb-cluster) | A High Scalability Solution for MySQL Clustering and High Availability | релевантность: нет music keywords |
| — | Музыкальное производство | [azerty9971/xtend_tuya](https://github.com/azerty9971/xtend_tuya) | eXtend Tuya's integration | релевантность: нет music keywords |
| — | Музыкальное производство | [SNMetamorph/PrimeXT](https://github.com/SNMetamorph/PrimeXT) | Modernized toolkit for Xash3D FWGS engine, has enhanced graphics and physics and a lot of new features for mod-makers. Crossplatform, supports Windows and Linux | релевантность: нет music keywords |
| — | Музыкальное производство | [lmxxf/dlss5-on-amd-9070xt-porting](https://github.com/lmxxf/dlss5-on-amd-9070xt-porting) | — | релевантность: нет music keywords |
| — | Музыкальное производство | [XTLS/XTLS.github.io](https://github.com/XTLS/XTLS.github.io) | XTLS GitHub Pages | релевантность: нет music keywords |
| — | Музыкальное производство | [0x78654C/xTerminal](https://github.com/0x78654C/xTerminal) | A linux like terminal for windows in C# | релевантность: нет music keywords |
| — | Музыкальное производство | [equinor/xtgeo](https://github.com/equinor/xtgeo) | XTGeo Python class library for subsurface Surfaces, Cubes, Wells, Grids, Points, etc | релевантность: нет music keywords |
| — | Музыкальное производство | [Almosst-DEV/Cobalt64](https://github.com/Almosst-DEV/Cobalt64) | Cobalt64: native macOS GPU acceleration for unsupported AMD Radeon GPUs. First supported family: RDNA4 (RX 9070 XT / Navi 48). Kernel driver, RADV Darwin port, | релевантность: нет music keywords |
| — | Музыкальное производство | [The-NeXT-Project/NeXT-Server](https://github.com/The-NeXT-Project/NeXT-Server) | Next generation proxy server. | релевантность: нет music keywords |
| — | Музыкальное производство | [LeBazarDeBryan/XTVZ_](https://github.com/LeBazarDeBryan/XTVZ_) | IPTV Streaming 🇫🇷 | релевантность: нет music keywords |
| — | Музыкальное производство | [xtender/xt_scripts](https://github.com/xtender/xt_scripts) | SQL*Plus scripts | релевантность: нет music keywords |
| — | Музыкальное производство | [golift/xtractr](https://github.com/golift/xtractr) | Go Library for Queuing and Extracting Archives: Rar, Zip, 7zip, Gz, Tar, Tgz, Bz2, Tbz2, cue/flac/ape, ISO, UDF, Z, and others. | релевантность: нет music keywords |
| — | Музыкальное производство | [daruyanagi/XTimelineViewer](https://github.com/daruyanagi/XTimelineViewer) | 貧乏人のための「X Pro」（TweetDeck） | релевантность: нет music keywords |
| — | Упаковка и производство | [OCA/sale-workflow](https://github.com/OCA/sale-workflow) | Odoo Sales, Workflow and Organization | релевантность: не целевая ниша категории |
| — | Упаковка и производство | [OCA/account-financial-reporting](https://github.com/OCA/account-financial-reporting) | Financial reports for Odoo | релевантность: не целевая ниша категории |
| — | Упаковка и производство | [OCA/contract](https://github.com/OCA/contract) | — | релевантность: не целевая ниша категории |
| — | Музыкальное производство | [espeak-ng/espeak-ng](https://github.com/espeak-ng/espeak-ng) | eSpeak NG is an open source speech synthesizer that supports more than hundred languages and accents. | релевантность: не целевая ниша категории |
| — | Упаковка и производство | [partcad/partcad](https://github.com/partcad/partcad) | Package manager for things. Start designing modular hardware! PartCAD is the standard for documenting manufacturable physical products (a.k.a. Digital Thread or | слой4: маркер в install.sh |
