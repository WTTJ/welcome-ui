import merge from 'lodash.merge'

import { colors } from './colors'
import { fonts } from './fonts'
import { getFontSizes, getTypography } from './typography'
import { getButtons } from './buttons'
import { getFields } from './fields'
import { getTooltips } from './tooltips'
import { radii } from './radii'

const DEFAULT_FONT_SIZE = 16
const DEFAULT_FONT_FAMILY = 'welcomeweb'
const HEADING_FONT_FAMILY = 'welcomeweb'

export const getBaseTheme = (options = {}) => {
  let {
    defaultFontSize = DEFAULT_FONT_SIZE,
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    headingFontFamily = HEADING_FONT_FAMILY,
    ...rest
  } = options

  let theme = {}

  theme.toEm = px => `${px / defaultFontSize}em`
  theme.toRem = px => `${px / defaultFontSize}rem`

  theme.colors = colors

  // fonts
  theme.defaultFontSize = defaultFontSize
  theme.fonts = fonts
  theme.fontSizes = getFontSizes('rem', theme)
  theme.fontWeights = {
    regular: '400',
    medium: '500',
    bold: '600',
    black: '700'
  }
  theme.letterSpacings = {
    sm: '0.5px',
    md: '1px',
    lg: '2px'
  }
  theme.fontFamilies = {
    texts: defaultFontFamily,
    headings: headingFontFamily
  }

  theme.borderWidths = {
    sm: '1px'
  }

  theme.spaces = {
    xxs: theme.toRem(6),
    xs: theme.toRem(8),
    sm: theme.toRem(10),
    md: theme.toRem(12),
    lg: theme.toRem(15),
    xl: theme.toRem(24)
  }

  theme.radii = radii

  theme.boxShadows = {
    sm: '1px 2px 4px 0 rgba(0,0,0,0.05)'
  }

  theme = merge(theme, rest)

  // CSS blocks
  // These attributes depend on colors and fontSizes and must come last
  theme.texts = getTypography(theme)
  theme.fields = getFields(theme)
  theme.buttons = getButtons(theme)
  theme.tooltips = getTooltips(theme)

  return theme
}

export const createTheme = options => {
  const base = getBaseTheme(options)
  const theme = merge(base, options)
  return theme
}
