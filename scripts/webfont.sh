FONTS_DIR=packages/IconFont/fonts
BRANCH=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
ICON_FONT_HASH=$(sha1sum $FONTS_DIR/welcome-icon-font.woff2 | awk '{ print $1 }')

echo "Copying fonts to s3://welcome-ui/public/fonts/$BRANCH/$ICON_FONT_HASH/"

aws s3 sync $FONTS_DIR s3://welcome-ui/public/fonts/$BRANCH/$ICON_FONT_HASH/

yarn build -- --scope @welcome-ui/core -- --environment BRANCH:$BRANCH,ICON_FONT_HASH:$ICON_FONT_HASH
