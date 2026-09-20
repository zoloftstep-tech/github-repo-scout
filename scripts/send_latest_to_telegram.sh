#!/usr/bin/env bash
# Send latest.md to Telegram in chunks. Requires TG_BOT_TOKEN and TG_CHAT_ID.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="${1:-$ROOT/latest.md}"

if [[ -z "${TG_BOT_TOKEN:-}" || -z "${TG_CHAT_ID:-}" ]]; then
  echo "ERROR: TG_BOT_TOKEN and TG_CHAT_ID must be set" >&2
  exit 1
fi

if [[ ! -f "$FILE" ]]; then
  echo "ERROR: file not found: $FILE" >&2
  exit 1
fi

# Detect placeholder
if grep -q 'Пока нет дайджеста' "$FILE" 2>/dev/null; then
  TEXT="Дайджеста ещё нет — дождись завершения scout."
  curl -sS -X POST "https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage" \
    --data-urlencode "chat_id=${TG_CHAT_ID}" \
    --data-urlencode "text=${TEXT}" \
    -d "disable_web_page_preview=true" | tee /tmp/tg_send_out.json
  python3 -c "import json; d=json.load(open('/tmp/tg_send_out.json')); assert d.get('ok'), d; print('ok placeholder')"
  exit 0
fi

python3 - <<'PY' "$FILE"
import json, os, sys, time, urllib.parse, urllib.request

path = sys.argv[1]
token = os.environ["TG_BOT_TOKEN"]
chat_id = os.environ["TG_CHAT_ID"]
text = open(path, encoding="utf-8").read().strip()
if not text:
    raise SystemExit("empty latest.md")

# Prefer recommended section first if present
limit = 3500
chunks = []
i = 0
while i < len(text):
    chunks.append(text[i : i + limit])
    i += limit

n = len(chunks)
url = f"https://api.telegram.org/bot{token}/sendMessage"
for idx, chunk in enumerate(chunks, 1):
    prefix = f"({idx}/{n})\n" if n > 1 else ""
    body = urllib.parse.urlencode(
        {
            "chat_id": chat_id,
            "text": prefix + chunk,
            "disable_web_page_preview": "true",
        }
    ).encode()
    req = urllib.request.Request(url, data=body, method="POST")
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.loads(resp.read().decode())
    if not data.get("ok"):
        raise SystemExit(f"Telegram error on chunk {idx}: {data}")
    print(f"sent chunk {idx}/{n}")
    time.sleep(0.4)
print(f"DONE sent={n}")
PY
