#!/usr/bin/env bash
# Send digest to Telegram (chunks + number buttons). Requires TG_BOT_TOKEN and TG_CHAT_ID.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="${1:-$ROOT/latest.md}"
CARDS="${2:-$ROOT/digest_cards.json}"

if [[ -z "${TG_BOT_TOKEN:-}" || -z "${TG_CHAT_ID:-}" ]]; then
  echo "ERROR: TG_BOT_TOKEN and TG_CHAT_ID must be set" >&2
  exit 1
fi

if [[ ! -f "$FILE" ]]; then
  echo "ERROR: file not found: $FILE" >&2
  exit 1
fi

if grep -q 'Пока нет дайджеста' "$FILE" 2>/dev/null; then
  TEXT="Дайджеста ещё нет — дождись завершения scout."
  curl -sS -X POST "https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage" \
    --data-urlencode "chat_id=${TG_CHAT_ID}" \
    --data-urlencode "text=${TEXT}" \
    -d "disable_web_page_preview=true" | tee /tmp/tg_send_out.json
  python3 -c "import json; d=json.load(open('/tmp/tg_send_out.json')); assert d.get('ok'), d; print('ok placeholder')"
  exit 0
fi

python3 - <<'PY' "$FILE" "$CARDS"
import json, os, re, sys, time, urllib.parse, urllib.request

md_path, cards_path = sys.argv[1], sys.argv[2]
token = os.environ["TG_BOT_TOKEN"]
chat_id = os.environ["TG_CHAT_ID"]
md = open(md_path, encoding="utf-8").read()

SEP = "━━━━━━━━━━━━━━━━━━━━"
PIN_MARK = "📌 Подборка"


def api(method, payload):
    url = f"https://api.telegram.org/bot{token}/{method}"
    body = urllib.parse.urlencode(
        {k: (json.dumps(v, ensure_ascii=False) if isinstance(v, (dict, list)) else v) for k, v in payload.items()}
    ).encode()
    # reply_markup needs to be JSON string in form encoding
    data = {}
    for k, v in payload.items():
        if isinstance(v, (dict, list)):
            data[k] = json.dumps(v, ensure_ascii=False)
        else:
            data[k] = v
    body = urllib.parse.urlencode(data).encode()
    req = urllib.request.Request(url, data=body, method="POST")
    with urllib.request.urlopen(req, timeout=60) as resp:
        out = json.loads(resp.read().decode())
    if not out.get("ok"):
        raise SystemExit(f"Telegram {method} error: {out}")
    return out


def load_cards():
    if os.path.isfile(cards_path):
        data = json.load(open(cards_path, encoding="utf-8"))
        if data.get("repos"):
            return data
    return parse_md(md)


def parse_md(text):
    """Best-effort parse of recommended cards (old or new format)."""
    date_m = re.search(r"(\d{4}-\d{2}-\d{2})", text)
    date = date_m.group(1) if date_m else ""
    # cut rejected section
    rec = re.split(r"\n##\s+.*Отклон", text, maxsplit=1)[0]
    repos = []
    # new: ### #1 · [owner/repo](url)  OR old: ### [owner/repo](url) — ⭐
    parts = re.split(r"\n(?=###\s+)", rec)
    n = 0
    category = ""
    for part in parts:
        cat_m = re.match(r"###\s+(?:📁\s*)?(.+)", part.strip())
        if cat_m and "[" not in cat_m.group(1) and not re.match(r"#\d+", cat_m.group(1).strip()):
            # category header without repo link
            title = cat_m.group(1).strip()
            if title.lower().startswith("рекоменд"):
                continue
            category = re.sub(r"^📁\s*", "", title)
            continue
        m = re.search(
            r"###\s+(?:#(\d+)\s*·\s*)?\[([^\]]+)\]\((https?://[^)]+)\)",
            part,
        )
        if not m:
            continue
        n = int(m.group(1)) if m.group(1) else n + 1
        full_name, url = m.group(2), m.group(3)
        stars_m = re.search(r"⭐\s*([\d\s]+)", part)
        days_m = re.search(r"обновл[^\d]*(\d+)", part, re.I)
        what = _field(part, r"(?:💡\s*)?\*?\*?Что это\*?\*?:?\s*", r"(?:🎯|🛠|🔒|\*\*Почему|\*\*Кейс|#{2,3})")
        why = _field(part, r"(?:🎯\s*)?\*?\*?(?:Зачем может подойти|Почему может подойти)\*?\*?:?\s*", r"(?:🛠|🔒|\*\*Кейс|#{2,3})")
        sec = _field(part, r"(?:🔒\s*)?\*?\*?(?:Безопасность|Проверка безопасности)\*?\*?:?\s*", r"(?:━━|#{2,3}|$)")
        cases = _cases(part)
        repos.append(
            {
                "n": n,
                "full_name": full_name,
                "url": url,
                "category": category,
                "stars": int(re.sub(r"\s", "", stars_m.group(1))) if stars_m else 0,
                "updated_days": int(days_m.group(1)) if days_m else None,
                "what": what.strip(),
                "why": why.strip(),
                "cases": cases,
                "security": sec.strip(),
            }
        )
    return {"date": date, "repos": repos}


def _field(text, start_pat, end_pat):
    m = re.search(start_pat + r"(.*?)" + end_pat, text, re.S | re.I)
    return (m.group(1) if m else "").strip().strip("*").strip()


def _cases(part):
    block = _field(part, r"(?:🛠\s*)?\*?\*?(?:Как применить|Кейсы использования)\*?\*?:?\s*", r"(?:🔒|\*\*Проверка|━━|#{2,3}|$)")
    if not block:
        return []
    items = re.split(r"\n(?=\d+\.\s)", block.strip())
    out = []
    for it in items:
        it = it.strip()
        if not re.match(r"\d+\.", it):
            continue
        it = re.sub(r"^\d+\.\s*", "", it)
        short_m = re.search(r"\*\*?Коротко:\*\*?\s*(.+)", it)
        plain_m = re.search(r"\*\*?Простыми словами:\*\*?\s*(.+)", it)
        ex_m = re.search(r"\*\*?Пример:\*\*?\s*(.+)", it, re.S)
        if short_m or plain_m or ex_m:
            out.append(
                {
                    "short": (short_m.group(1).strip() if short_m else ""),
                    "plain": (plain_m.group(1).strip() if plain_m else ""),
                    "example": (ex_m.group(1).strip() if ex_m else ""),
                }
            )
        else:
            # old one-liner case
            line = it.split("\n")[0].strip()
            out.append({"short": line, "plain": "", "example": ""})
    return out


def format_card(c):
    days = c.get("updated_days")
    days_s = f" · обновлён {days} дн. назад" if days is not None else ""
    lines = [
        SEP,
        f"#{c['n']}  ·  {c.get('category') or '—'}",
        c["full_name"],
        f"⭐ {c.get('stars', 0)}{days_s}",
        c["url"],
        "",
        "💡 Что это",
        c.get("what") or "—",
        "",
        "🎯 Зачем",
        c.get("why") or "—",
    ]
    cases = c.get("cases") or []
    if cases:
        lines += ["", "🛠 Как применить"]
        for i, case in enumerate(cases, 1):
            if isinstance(case, str):
                lines.append(f"{i}. {case}")
                continue
            lines.append(f"{i}. {case.get('short') or '—'}")
            if case.get("plain"):
                lines.append(f"   └ {case['plain']}")
            if case.get("example"):
                lines.append(f"   └ пример: {case['example']}")
    if c.get("security"):
        lines += ["", "🔒 Безопасность", c["security"]]
    lines.append(SEP)
    return "\n".join(lines)


def chunk_text(parts, limit=3500):
    chunks, buf = [], ""
    header = ""
    for i, p in enumerate(parts):
        if i == 0:
            header = p
            buf = p
            continue
        add = ("\n\n" if buf else "") + p
        if len(buf) + len(add) > limit and buf != header:
            chunks.append(buf)
            buf = header + "\n\n" + p if header else p
        else:
            buf += add
    if buf:
        chunks.append(buf)
    return chunks


data = load_cards()
repos = data.get("repos") or []
date = data.get("date") or ""

# Prefer structured cards for body; fall back to raw md
if repos:
    parts = [f"📋 Дайджест репозиториев — {date}\nРекомендовано: {len(repos)}\nЖми номера ниже, чтобы собрать подборку в закреп."]
    for c in repos:
        parts.append(format_card(c))
    # append rejected table from md if present
    rej = re.split(r"\n##\s+.*Отклон", md, maxsplit=1)
    if len(rej) > 1:
        parts.append("⛔ Отклонённые\n" + rej[1].strip()[:2000])
    chunks = chunk_text(parts)
else:
    text = md.strip()
    chunks = [text[i : i + 3500] for i in range(0, len(text), 3500)]

n = len(chunks)
for idx, chunk in enumerate(chunks, 1):
    prefix = f"({idx}/{n})\n" if n > 1 else ""
    api("sendMessage", {
        "chat_id": chat_id,
        "text": prefix + chunk,
        "disable_web_page_preview": "true",
    })
    print(f"sent chunk {idx}/{n}")
    time.sleep(0.35)

if repos:
    # keyboard: 5 buttons per row
    rows, row = [], []
    for c in repos:
        row.append({"text": str(c["n"]), "callback_data": f"pick:{c['n']}"})
        if len(row) == 5:
            rows.append(row)
            row = []
    if row:
        rows.append(row)
    api("sendMessage", {
        "chat_id": chat_id,
        "text": f"🔢 Выбери репозитории в подборку (дайджест {date}).\nНажатие дописывает в закреплённое сообщение.",
        "reply_markup": {"inline_keyboard": rows},
        "disable_web_page_preview": "true",
    })
    print(f"sent keyboard buttons={len(repos)}")

print(f"DONE sent={n} cards={len(repos)}")
PY
