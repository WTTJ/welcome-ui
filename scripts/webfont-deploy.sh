#!/bin/bash

FONTS_DIR=packages/IconFont/fonts
FONT_FILE="$FONTS_DIR/welcome-icon-font.woff2"

if [[ -f "$FONT_FILE" ]]; then
  ICON_FONT_HASH=$(sha1sum $FONT_FILE | awk '{ print $1 }')

  echo "Copying fonts to s3://welcome-ui/public/fonts/icon-font/$ICON_FONT_HASH/"

  aws s3 sync $FONTS_DIR s3://welcome-ui/public/fonts/icon-font/$ICON_FONT_HASH/ --cache-control 'public, max-age=31536000' --exclude '*' --include 'welcome-icon-font.woff, welcome-icon-font.woff2'

  echo "Copying fonts to s3://wttj-production/fonts/icon-font/$ICON_FONT_HASH/"

  aws s3 sync $FONTS_DIR s3://wttj-production/fonts/icon-font/$ICON_FONT_HASH/ --cache-control 'public, max-age=31536000' --exclude '*' --include 'welcome-icon-font.woff, welcome-icon-font.woff2'
else
  echo "Font doesn't exist. Please run 'yarn webfont:build'"
  exit 1
fi
