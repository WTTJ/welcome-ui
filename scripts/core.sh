#!/bin/bash

FONTS_DIR=packages/IconFont/fonts
FONT_FILE="$FONTS_DIR/welcome-icon-font-2.woff"

if [[ -f "$FONT_FILE" ]]; then
  ICON_FONT_HASH=$(sha1sum $FONT_FILE | awk '{ print $1 }')

  lerna run build --scope @welcome-ui/core -- ICON_FONT_HASH=$ICON_FONT_HASH
else
  echo "Font doesn't exist. Please run 'yarn webfont:build'"
  exit 1
fi
