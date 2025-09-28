#!/bin/bash

# Usage:
# ./backdate-commit.sh "2024-03-10 12:00:00" "Your commit message"

DATE=$1
MESSAGE=$2

if [ -z "$DATE" ] || [ -z "$MESSAGE" ]; then
  echo "Usage: $0 \"YYYY-MM-DD HH:MM:SS\" \"Commit message\""
  exit 1
fi

GIT_AUTHOR_DATE="$DATE" GIT_COMMITTER_DATE="$DATE" \
git commit --allow-empty -m "$MESSAGE"

git push origin main
