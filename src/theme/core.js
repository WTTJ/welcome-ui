import merge from 'lodash.merge'

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

  const toEm = px => `${px / defaultFontSize}em`
  const toRem = px => `${px / defaultFontSize}rem`
  const getFontSizes = unit => {
    const convert = unit === 'em' ? toEm : toRem
    return {
      html: `${defaultFontSize}px`,
      body: convert(16),
      xs: convert(11),
      sm: convert(13),
      default: convert(14),
      md: convert(16),
      mdlg: convert(18),
      lg: convert(19),
      xl: convert(22),
      xxl: convert(32),
      xxxl: convert(50)
    }
  }

  let theme = {}

  theme.colors = {
    core: {
      primary: '#333333',
      secondary: '#999999',
      success: '#00FFFF',
      danger: '#FF0000',
      warning: '#FFFF00',
      info: '#999999',
      light: '#EEEEEE',
      dark: '#222222',
      white: '#FFFFFF'
    },
    text: {
      primary: '#333333',
      secondary: '#999999',
      success: '#00FFFF',
      danger: '#FF0000',
      warning: '#FFFF00',
      info: '#999999',
      light: '#EEEEEE',
      dark: '#222222',
      white: '#FFFFFF'
    },
    bg: {
      primary: '#333333',
      secondary: '#999999',
      success: '#00FFFF',
      danger: '#FF0000',
      warning: '#FFFF00',
      info: '#999999',
      light: '#EEEEEE',
      dark: '#222222',
      white: '#FFFFFF'
    }
  }

  theme.palette = {}

  theme.text = {
    primary: {
      size: 'md',
      weight: 'regular'
    },
    secondary: {
      size: 'xs',
      weight: 'medium',
      transform: 'none'
    },
    label: {
      size: 'md',
      weight: 'bold'
    },
    button: {
      size: 'xs',
      weight: 'bold',
      transform: 'uppercase',
      spacing: 'md'
    },
    button_small: {
      size: 'xs',
      weight: 'regular',
      transform: 'uppercase',
      spacing: 'md'
    }
  }

  theme.borderWidth = {
    input: '1px'
  }

  theme.fontSize = getFontSizes('rem')

  theme.fontSizeEm = getFontSizes('em')

  theme.letterSpacing = {
    sm: '0.5px',
    md: '1px',
    lg: '2px'
  }

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

  theme.fontWeight = {
    regular: '400',
    medium: '500',
    bold: '600',
    black: '700'
  }

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

  theme.radius = {
    sm: '3px',
    md: '6px',
    lg: '10px'
  }

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
    desktop: toRem(16),
    mobile: toRem(22)
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
