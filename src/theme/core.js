import merge from 'lodash.merge'

import { colors } from './colors'
import { fonts } from './fonts'
import { fontWeights, getFontSizes, getTypography, letterSpacings, toRem } from './typography'
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

  theme.colors = colors

  theme.defaultFontSize = defaultFontSize

  theme.fontSize = getFontSizes('rem', defaultFontSize)
  theme.fontSizeEm = getFontSizes('em', defaultFontSize)
  theme.fontWeight = fontWeights
  theme.letterSpacing = letterSpacings

  theme.borderWidth = {
    sm: '1px'
  }

  theme.spaces = {
    xxs: toRem(6, defaultFontSize),
    xs: toRem(8, defaultFontSize),
    sm: toRem(10, defaultFontSize),
    md: toRem(12, defaultFontSize),
    lg: toRem(15, defaultFontSize),
    xl: toRem(24, defaultFontSize)
  }

  theme.fontFamily = {
    texts: defaultFontFamily,
    headings: headingFontFamily
  }

  theme.radii = radii

  theme.boxShadow = {
    sm: '1px 2px 4px 0 rgba(0,0,0,0.05)'
  }

  theme = theme.fonts

  theme = merge(theme, rest)

  // CSS blocks
  theme.text = getTypography(theme)
  theme.fields = getFields(theme, toRem)
  theme.buttons = getButtons(theme)
  theme.tooltips = getTooltips({ theme, toRem })

  return theme
}

export const createTheme = options => {
  const base = getBaseTheme(options)
  const theme = merge(base, options)
  return theme
}
