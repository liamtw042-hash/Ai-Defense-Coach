#!/usr/bin/env bash
# Renders the flyer HTML to a print-ready A4 PDF using headless Google Chrome.
# Usage: bash flyer/build-pdf.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HTML="$DIR/transitionhq-flyer.html"
PDF="$DIR/transitionhq-flyer.pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PROFILE="$(mktemp -d)"

rm -f "$PDF"

# Chrome's headless print-to-pdf sometimes does not exit cleanly, so we run it
# in the background and stop it once the PDF has been written.
"$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --no-pdf-header-footer --no-margins --user-data-dir="$PROFILE" \
  --virtual-time-budget=8000 \
  --print-to-pdf="$PDF" "file://$HTML" >/dev/null 2>&1 &
CHROME_PID=$!

for _ in $(seq 1 30); do
  if [ -s "$PDF" ]; then sleep 1; break; fi
  sleep 1
done

kill "$CHROME_PID" >/dev/null 2>&1 || true
wait "$CHROME_PID" 2>/dev/null || true
rm -rf "$PROFILE"

if [ -s "$PDF" ]; then
  echo "Wrote $PDF"
else
  echo "PDF generation failed" >&2
  exit 1
fi
