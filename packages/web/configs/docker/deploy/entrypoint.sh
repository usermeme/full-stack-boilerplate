#!/bin/sh


SUBST_VARS='${API_URL}'

missing_var=false

if [ -z "$API_URL" ]; then
  echo "ERROR: Missing environment variable API_URL" >> /dev/stderr
  missing_var=true
fi

envsubst "$SUBST_VARS" < /app/index.html.tpl > /app/index.html

exec "$@"