#!/bin/bash
set +e
args="$@"
yarn npm audit $args
result=$?
set -e

if [ "$result" != 0 ]; then
  if [ -f yarn-audit-known-issues ]; then
    set +e
    yarn npm audit $args --json | jq '.children | .ID' > yarn-audit-issues
    set -e

    if diff -q yarn-audit-known-issues yarn-audit-issues > /dev/null 2>&1; then
      echo
      echo Ignoring known vulnerabilities
      exit 0
    fi
  fi

  echo
  echo Security vulnerabilities were found that were not ignored
  echo
  echo Check to see if these vulnerabilities apply to production
  echo and/or if they have fixes available. If they do not have
  echo fixes and they do not apply to production, you may ignore them
  echo
  echo To ignore these vulnerabilities, run:
  echo
  echo "yarn npm audit $args --json | jq '.children | .ID' > yarn-audit-known-issues"
  echo
  echo and commit the yarn-audit-known-issues file

  exit "$result"
fi