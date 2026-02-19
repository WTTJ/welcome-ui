#!/bin/bash
set +e
args="$@"

# This script is a rewrite of the audit.sh script from marketplace but with support to yarn v1
# https://github.com/WTTJ/marketplace-front/blob/main/scripts/audit.sh

# Run audit normally first
yarn audit $args
result=$?

set -e

if [ "$result" != 0 ]; then
  if [ -f yarn-audit-known-issues ]; then
    set +e

    yarn audit $args --json \
      | jq -r 'select(.type=="auditAdvisory") | .data.advisory.id' \
      | sort -u \
      > yarn-audit-issues

    set -e

    if diff -q yarn-audit-known-issues yarn-audit-issues > /dev/null 2>&1; then
      echo
      echo "Ignoring known vulnerabilities"
      exit 0
    fi
  fi

  echo
  echo "Security vulnerabilities were found that were not ignored"
  echo
  echo "Check to see if these vulnerabilities apply to production"
  echo "and/or if they have fixes available."
  echo
  echo "To ignore these vulnerabilities, run:"
  echo

  cat << 'EOF'
yarn audit --json \
  | jq -r 'select(.type=="auditAdvisory") | .data.advisory.id' \
  | sort -u > yarn-audit-known-issues
EOF

  echo
  echo "and commit the yarn-audit-known-issues file"

  exit "$result"
fi
