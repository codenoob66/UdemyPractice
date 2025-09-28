#!/bin/bash

# Usage:
# ./backdate-range.sh "2024-01-01" "2024-04-23"

START_DATE=$1
END_DATE=$2

if [ -z "$START_DATE" ] || [ -z "$END_DATE" ]; then
  echo "Usage: $0 YYYY-MM-DD YYYY-MM-DD"
  exit 1
fi

CURRENT_DATE=$START_DATE

while [ "$(date -d "$CURRENT_DATE" +%Y-%m-%d)" != "$(date -d "$END_DATE + 1 day" +%Y-%m-%d)" ]; do
  echo "Creating commit for $CURRENT_DATE"

  GIT_AUTHOR_DATE="$CURRENT_DATE 12:00:00" \
  GIT_COMMITTER_DATE="$CURRENT_DATE 12:00:00" \
  git commit --allow-empty -m "Backdated commit on $CURRENT_DATE"

  CURRENT_DATE=$(date -I -d "$CURRENT_DATE + 1 day")
done

git push origin main
