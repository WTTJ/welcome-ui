import merge from 'lodash.merge'

import { colors } from './colors'
import { fields } from './fields'
import { buttons } from './buttons'
import { radii } from './radii'
import { typography, letterSpacings } from './typography'
import { fontSizes, fontSizesEm, toEm, toRem } from './font-sizes'
import { fontWeights } from './font-weights'

const DEFAULT_FONT_SIZE = 50
const DEFAULT_FONT_FAMILY = 'Arial'
const HEADING_FONT_FAMILY = 'Times'

const coreTheme = (options = {}) => {
  let {
    defaultFontSize = DEFAULT_FONT_SIZE,
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    headingFontFamily = HEADING_FONT_FAMILY,
    ...rest
  } = options

  let theme = {}

  theme.color = colors

  theme.text = typography

  theme.fields = fields

  theme.buttons = buttons

  theme.borderWidth = {
    input: '1px'
  }

  theme.fontSize = fontSizes

  theme.fontSizeEm = fontSizesEm

  theme.letterSpacing = letterSpacings

  theme.padding = {
    xxs: toRem(8),
    xs: toRem(10),
    sm: toRem(12),
    md: toRem(15)
  }

  theme.gutter = {
    xxxs: toRem(1.6),
    xxs: toRem(4.8),
    xs: toRem(10),
    sm: toRem(12),
    md: toRem(15),
    lg: toRem(24),
    mdx2: toRem(32),
    xl: toRem(50),
    xxl: toRem(64),
    xxxl: toRem(110)
  }

  theme.fontFamily = {
    texts: defaultFontFamily,
    headings: headingFontFamily,
    icons: 'Material-design-iconic-font'
  }

  theme.fontWeight = fontWeights

  theme.transition = {
    sm: 'all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    md: 'all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    lg: 'all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)'
  }

  theme.centeredContainerWidth = {
    sm: toRem(640),
    md: toRem(896),
    mdlg: toRem(1029),
    lg: toRem(1248),
    movies: {
      md: toRem(1024)
    }
  }

  theme.ratio = {
    '720p': 1280 / 720
  }

  theme.shareButtonSize = {
    sm: 16,
    md: 32,
    lg: 46
  }

  theme.toggleSize = {
    sm: toRem(16),
    md: toRem(22),
    lg: toRem(42)
  }

  theme.roundedButtonSize = {
    xs: toRem(19),
    sm: toRem(26),
    md: toRem(35),
    lg: toRem(70)
  }

  theme.buttonIconWidth = toRem(46)

  theme.modalSize = {
    xs: toRem(480),
    sm: toRem(640),
    md: toRem(800),
    lg: toRem(960)
  }

  theme.radius = radii

  theme.boxShadow = {
    xs: '0 1px 2px rgba(0,0,0,.1)',
    sm: '0 2px 2px rgba(0,0,0,.1)',
    md: '0 3px 10px rgba(0,0,0,.08)',
    lg: '0 4px 15px rgba(0,0,0,.2)',
    xl: '0 8px 20px rgba(0,0,0,.2)',
    xxl: '0 20px 50px rgba(0,0,0,.7)'
  }

  theme.breakpoint = {
    widescreen: '1650px',
    mediumscreen: '1300px',
    smallscreen: '1100px',
    tablet: '900px',
    mobile: '670px'
  }

  theme.checkboxSize = {
    md: toRem(15)
  }

  theme.fonts = {}

  return merge(theme, rest)
}

let theme = coreTheme()

export const createTheme = options => {
  theme = coreTheme(options)
  return theme
}

export default theme
