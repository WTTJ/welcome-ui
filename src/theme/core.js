import merge from 'lodash.merge'
import { rpxTransformers } from '@xstyled/system'

import { getAlerts } from '../components/Alert/theme'
import { getButtons } from '../components/Button/theme'
import { getFields } from '../components/Field/theme'
import { getGrowls } from '../components/Growl/theme'
import { getIcons } from '../components/Icon/theme'
import { getLinks } from '../components/Link/theme'
import { getPaginations } from '../components/Pagination/theme'
import { getTabs } from '../components/Tabs/theme'
import { getTags } from '../components/Tag/theme'
import { getTooltips } from '../components/Tooltip/theme'

import { colors } from './colors'
import { fontFaces } from './fonts'
import { getFontSizes, getLineHeights, getTexts } from './typography'
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
    sm: '1px',
    md: '2px'
  }

  theme.breakpoints = {
    xs: 0,
    sm: 480,
    md: 736,
    lg: 980,
    xl: 1280
  }

  theme.space = {
    xxs: theme.toRem(6),
    xs: theme.toRem(8),
    sm: theme.toRem(10),
    md: theme.toRem(12),
    lg: theme.toRem(15),
    xl: theme.toRem(24)
  }

  theme.icons = getIcons(theme)

  theme.radii = { sm: '4px', md: '6px', lg: '10px' }

  theme.transitions = transitions
  theme.transitionCurves = transitionCurves

  theme.shadows = {
    sm: '1px 2px 4px 0 rgba(0,0,0,0.05)',
    md: '3px 4px 10px 0 rgba(0,0,0,0.07)'
  }

  theme.underline = {
    'border-bottom-style': 'solid',
    'border-bottom-width': theme.borderWidths.sm
  }

  theme = merge({}, theme, rest)

  // CSS blocks
  // These attributes depend on colors and fontSizes and must come last
  theme.underline['border-bottom-color'] = theme.colors.primary[500]
  theme.alerts = getAlerts(theme)
  theme.buttons = getButtons(theme)
  theme.fields = getFields(theme)
  theme.growls = getGrowls(theme)
  theme.paginations = getPaginations(theme)
  theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.texts = getTexts(theme)
  theme.tooltips = getTooltips(theme)
  theme.links = getLinks(theme)

  return theme
}

export const createTheme = options => {
  const base = getBaseTheme(options)
  const theme = merge({}, base, options)
  return theme
}
