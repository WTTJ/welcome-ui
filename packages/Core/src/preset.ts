import { definePreset, defineTextStyles, defineTokens } from '@pandacss/dev'
import { TextStyles, Token } from '@pandacss/types'

import { colors } from './theme/colors'
import { getSpace } from './theme/space'
import {
  fontWeights,
  getFonts,
  getFontSizes,
  getLineHeights,
  getTextsFontFamily,
  ThemeFontSizes,
  ThemeLineHeights,
} from './theme/typography'
import { WuiTheme } from './theme/types'

// transform { primary: 'tomato' } to { primary: { value: 'tomato' }}
export const formatTokens = (object: Record<string, string>) => {
  return Object.keys(object).reduce((tokens: Record<string, Token>, key) => {
    tokens[key] = { value: object[key] }
    return tokens
  }, {})
}

const DEFAULT_FONT_FAMILY = 'Work Sans'
const HEADING_FONT_FAMILY = 'welcome-font'
const ICON_FONT_FAMILY = 'welcome-icon-font-2'
const DEFAULT_FONT_SIZE = 16
const DEFAULT_LINE_HEIGHT = 1.15
const toRem = (px: number) => `${px / DEFAULT_FONT_SIZE}rem`

const spacing = getSpace({ toRem: toRem } as WuiTheme)
const fontSizes = getFontSizes('rem', { toRem: toRem } as WuiTheme)
const fonts = getFonts(DEFAULT_FONT_FAMILY, HEADING_FONT_FAMILY, ICON_FONT_FAMILY)
const fontFamilies = getTextsFontFamily({ fonts } as WuiTheme)
const lineHeights = getLineHeights({
  defaultLineHeight: DEFAULT_LINE_HEIGHT.toString(),
  toRem,
} as WuiTheme)

export const textStyles = defineTextStyles(
  Object.keys(fontSizes).reduce((styles: TextStyles, key) => {
    styles[key] = {
      value: {
        fontFamily: fontFamilies[key] || undefined,
        // fontWeight: fontWeights[key],
        fontSize: fontSizes[key as keyof ThemeFontSizes],
        lineHeight: lineHeights[key as keyof ThemeLineHeights] || lineHeights.lg,
        // letterSpacing: letterSpacings[key as keyof ThemeLetterSpacings] || undefined,
        // textTransform: textsTextTransform[key as keyof ThemeTextsTextTransform] || undefined,
      },
    }
    return styles
  }, {})
)

export const tokens = defineTokens({
  colors: formatTokens(colors),
  spacing: formatTokens(spacing),
  fonts: formatTokens({
    h0: fonts.headings,
    h1: fonts.headings,
    h2: fonts.headings,
    h3: fonts.headings,
    h4: fonts.headings,
    h5: fonts.headings,
    h6: fonts.headings,
    'subtitle-md': fonts.headings,
    'subtitle-sm': fonts.headings,
  }),
  fontSizes: formatTokens(fontSizes),
  fontWeights: formatTokens(fontWeights),
  lineHeights: formatTokens(lineHeights),
})

export const preset = definePreset({
  theme: {
    tokens,
    textStyles,
  },
})
