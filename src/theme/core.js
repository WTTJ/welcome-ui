import merge from 'lodash.merge'
import { rpxTransformers } from '@xstyled/system'

import { colors } from './colors'
import { fontFaces } from './fonts'
import { getButtons } from './buttons'
import { getFields } from './fields'
import { getFontSizes, getLineHeights, getTexts } from './typography'
import { getGrowls } from './growls'
import { getPaginations } from './paginations'
import { getTabs } from './tabs'
import { getTags } from './tags'
import { getTooltips } from './tooltips'
import { radii } from './radii'
import { transitionCurves, transitions } from './transitions'

const DEFAULT_FONT_SIZE = 16
const DEFAULT_FONT_FAMILY = 'welcomeweb'
const HEADING_FONT_FAMILY = 'welcomeweb'

export const getBaseTheme = (options = {}) => {
  let {
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    headingFontFamily = HEADING_FONT_FAMILY,
    ...rest
  } = options

  let theme = {}

  theme.transformers = { ...rpxTransformers }

  theme.toEm = px => `${px / DEFAULT_FONT_SIZE}em`
  theme.toRem = px => `${px / DEFAULT_FONT_SIZE}rem`

  theme.colors = colors

  // fonts
  theme.fontFaces = fontFaces
  theme.fontSizes = getFontSizes('rem', theme)
  theme.lineHeights = getLineHeights(theme)
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
  theme.fonts = {
    texts: defaultFontFamily,
    headings: headingFontFamily
  }

  theme.borderWidths = {
    sm: '1px'
  }

  theme.space = {
    xxs: theme.toRem(6),
    xs: theme.toRem(8),
    sm: theme.toRem(10),
    md: theme.toRem(12),
    lg: theme.toRem(15),
    xl: theme.toRem(24)
  }

  theme.icons = {
    xs: theme.toRem(10),
    sm: theme.toRem(16),
    md: theme.toRem(24),
    lg: theme.toRem(32),
    xl: theme.toRem(48)
  }

  theme.radii = radii

  theme.transitions = transitions
  theme.transitionCurves = transitionCurves

  theme.shadows = {
    sm: '1px 2px 4px 0 rgba(0,0,0,0.05)'
  }

  theme = merge({}, theme, rest)

  // CSS blocks
  // These attributes depend on colors and fontSizes and must come last
  theme.buttons = getButtons(theme)
  theme.fields = getFields(theme)
  theme.growls = getGrowls(theme)
  theme.paginations = getPaginations(theme)
  theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.texts = getTexts(theme)
  theme.tooltips = getTooltips(theme)

  return theme
}

export const createTheme = options => {
  const base = getBaseTheme(options)
  const theme = merge({}, base, options)
  return theme
}
