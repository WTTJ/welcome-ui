#!/bin/bash

# Set paths
FONTS_DIR=lib/src/components/IconsFont/fonts
FONT_FILE="$FONTS_DIR/welcome-icon-font.woff2"
FONT_HASH_FILE=lib/src/components/IconsFont/_hash.ts

# Check if font file exists
if [[ -f "$FONT_FILE" ]]; then
  # Generate hash
  ICON_FONT_HASH=$(sha1sum $FONT_FILE | awk '{ print $1 }')

  # Create or update .env file with the VITE_ prefixed variable
  echo "export const FONT_HASH = '$ICON_FONT_HASH'" > $FONT_HASH_FILE

  echo "hash file created with hash: $ICON_FONT_HASH"
else
  echo "Error: Font file not found at $FONT_FILE"
  exit 1
fi
