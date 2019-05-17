
import merge from 'lodash.merge'

import { colors } from './colors'
import { getFields } from './fields'
import { getButtons } from './buttons'
import { radii } from './radii'
import { getFontSizes, fontWeights, letterSpacings, toRem, getTypography } from './typography'

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

  theme.fontSize = getFontSizes('rem', defaultFontSize)
  theme.fontSizeEm = getFontSizes('em', defaultFontSize)
  theme.fontWeight = fontWeights
  theme.letterSpacing = letterSpacings

  theme.borderWidth = {
    input: '1px'
  }

  theme.padding = {
    xxs: toRem(8, defaultFontSize),
    xs: toRem(10, defaultFontSize),
    sm: toRem(12, defaultFontSize),
    md: toRem(15, defaultFontSize)
  }

  theme.gutter = {
    xxxs: toRem(1.6, defaultFontSize),
    xxs: toRem(4.8, defaultFontSize),
    xs: toRem(10, defaultFontSize),
    sm: toRem(12, defaultFontSize),
    md: toRem(15, defaultFontSize),
    lg: toRem(24, defaultFontSize),
    mdx2: toRem(32, defaultFontSize),
    xl: toRem(50, defaultFontSize),
    xxl: toRem(64, defaultFontSize),
    xxxl: toRem(110, defaultFontSize)
  }

  theme.fontFamily = {
    texts: defaultFontFamily,
    headings: headingFontFamily,
    icons: 'Material-design-iconic-font'
  }

  theme.transition = {
    sm: 'all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    md: 'all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    lg: 'all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)'
  }

  theme.centeredContainerWidth = {
    sm: toRem(640, defaultFontSize),
    md: toRem(896, defaultFontSize),
    mdlg: toRem(1029, defaultFontSize),
    lg: toRem(1248, defaultFontSize),
    movies: {
      md: toRem(1024, defaultFontSize)
    }
  }

  theme.ratio = { '720p': 1280 / 720 }

  theme.fileDropHeight = toRem(300, defaultFontSize)

  theme.shareButtonSize = {
    sm: 16,
    md: 32,
    lg: 46
  }

  theme.toggleSize = {
    sm: toRem(16, defaultFontSize),
    md: toRem(22, defaultFontSize),
    lg: toRem(42, defaultFontSize)
  }

  theme.roundedButtonSize = {
    xs: toRem(19, defaultFontSize),
    sm: toRem(26, defaultFontSize),
    md: toRem(35, defaultFontSize),
    lg: toRem(70, defaultFontSize)
  }

  theme.buttonIconWidth = toRem(46, defaultFontSize)

  theme.modalSize = {
    xs: toRem(480, defaultFontSize),
    sm: toRem(640, defaultFontSize),
    md: toRem(800, defaultFontSize),
    lg: toRem(960, defaultFontSize)
  }

  theme.radii = radii

  theme.boxShadow = {
    xs: '0 1px 2px rgba(0,0,0,.1)',
    sm: '0 2px 4px rgba(0,0,0,.2)',
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
    md: toRem(15, defaultFontSize)
  }

  theme.fonts = {
    welcomeweb: [
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regular',
        weight: '400',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-medium',
        weight: '500',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bold',
        weight: '600',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-black',
        weight: '700',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regularitalic',
        weight: '400',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-mediumitalic',
        weight: '500',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bolditalic',
        weight: '600',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-blackitalic',
        weight: '700',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      }
    ]
  }

  theme = merge(theme, rest)

  // CSS blocks
  theme.text = getTypography(theme)
  theme.fields = getFields(theme)
  theme.buttons = getButtons(theme)

  return theme
}

export const createTheme = options => {
  const base = getBaseTheme(options)
  const theme = merge(base, options)
  return theme
}
