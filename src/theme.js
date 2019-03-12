const DEFAULT_FONT_SIZE = 16
const toRem = px => `${px / DEFAULT_FONT_SIZE}rem`
const toEm = px => `${px / DEFAULT_FONT_SIZE}em`

const theme = {}

theme.color = {
  white: '#ffffff',
  black: '#000000',
  primary: '#00c29a',
  green: {
    100: '#ebfff6',
    200: '#c6f4e5',
    300: '#baf4d9',
    400: '#2fd38e'
  },
  red: {
    100: '#ffebee',
    200: '#f4c6c6',
    400: '#e57373',
    500: '#d32f2f'
  },
  blue: {
    100: '#ebf9ff',
    200: '#baddf4',
    400: '#2f97d3',
    wttj: '#354771'
  },
  orange: {
    100: '#fffbeb',
    200: '#f4d1ba',
    400: '#f48c23'
  },
  pink: {
    100: '#FBEAF5',
    400: '#EF87AE'
  },
  gray: {
    100: '#f9f9f9',
    150: '#e6e6e6',
    200: '#cfcfcf',
    250: '#bdbdbd',
    300: '#97999d',
    350: '#87888d',
    400: '#4b4d55',
    450: '#41434b',
    500: '#373942',
    550: '#31333b',
    600: '#2a2c31',
    800: '#1b1c20',
    900: '#0b0b0d'
  },
  linkedin: {
    primary: '#006ea3',
    secondary: '#007bb6'
  },
  texts: {
    xlight: '#cfcfcf',
    light: '#97999d',
    dark: '#373942',
    error: '#f44336'
  },
  universes: {
    tech: '#00c29a',
    consulting: '#6495d6',
    fashion: '#cfac77',
    food: '#d65c68'
  },
  socials: {
    twitter: '#00acee',
    facebook: '#47639e'
  },
  borders: '#eeeeee',
  input: '#4b4d55',
  input_placeholder: '#97999d',
  code: {
    background: '#2b303b',
    texts: '#c0c5ce'
  }
}

theme.color.warning = theme.color.orange[400]
theme.color.error = theme.color.red[500]

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

theme.color.grey = theme.color.gray

theme.borderWidth = {
  input: '1px'
}

const fontSize = unit => {
  const convert = unit === 'em' ? toEm : toRem
  return {
    html: `${DEFAULT_FONT_SIZE}px`,
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

theme.fontSize = fontSize('rem')

theme.fontSizeEm = fontSize('em')

theme.letterSpacing = {
  sm: '0.5px',
  md: '1px',
  lg: '2px'
}

theme.padding = {
  xxxs: '0.1em',
  xxs: '0.3em',
  xs: '0.5em',
  sm: '0.8125em',
  md: '1em',
  lg: '1.5em',
  mdx2: '2em',
  xl: '3.125em',
  xxl: '4em',
  xxxl: '6.875em'
}

theme.gutter = {
  xxxs: toRem(1.6),
  xxs: toRem(4.8),
  xs: toRem(8),
  sm: toRem(13),
  md: toRem(16),
  lg: toRem(24),
  mdx2: toRem(32),
  xl: toRem(50),
  xxl: toRem(64),
  xxxl: toRem(110)
}

theme.fontFamily = {
  texts: 'HKCompakt',
  icons: 'Material-design-iconic-font'
}

theme.fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '600',
  black: '700'
}

theme.transition = {
  'sm-linear': 'all .2s linear',
  sm: 'all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
  md: 'all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
  lg: 'all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
  movies: {
    md: 'all .3s',
    lg: 'all .4s'
  }
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

theme.searchFormWidth = {
  sm: toRem(864),
  md: toRem(1100),
  lg: toRem(1248)
}

theme.headerHeight = toRem(218)
theme.headerMobileHeight = toRem(128)
theme.headerUpperNavHeight = toRem(42)
theme.searchFormHeight = toRem(60)
theme.universeHeight = toRem(280)
theme.pageNavHeight = toRem(66)

theme.bannerHeight = {
  article: toRem(690),
  home: toRem(720),
  organization: toRem(464),
  job: toRem(560),
  search: toRem(267),
  interview: toRem(640),
  magazines: toRem(560),
  settings: toRem(512),
  static_pages: toRem(384),
  movies: toRem(720),
  movies_categories: toRem(480),
  mobile: {
    home: toRem(528),
    job: toRem(448),
    article: toRem(448),
    interview: toRem(320),
    magazines: toRem(448)
  }
}

theme.ratio = {
  '720p': 1280 / 720,
  article_images: 1198 / 898
}

theme.imagesHeight = {
  icons: {
    icon: toRem(80),
    successGif: toRem(150)
  },
  organizations: {
    show: {
      logo: toRem(200)
    },
    thumb: {
      cover: toRem(150)
    }
  },
  articles: {
    index: {
      banner: toRem(256)
    },
    show: {
      banner: toRem(480)
    }
  },
  jobs: {
    thumb: {
      logo: toRem(64)
    }
  },
  meetings: {
    thumb: {
      logo: toRem(64)
    }
  },
  cms: {
    logo: toRem(50)
  },
  media: {
    xxs: toRem(40),
    xs: toRem(64),
    sm: toRem(160),
    md: toRem(384),
    lg: toRem(1600)
  },
  mobile: {
    organizations: {
      show: {
        logo: toRem(144)
      }
    }
  }
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

theme.coverHeight = {
  default: toRem(218)
}

theme.modalSize = {
  xs: toRem(480),
  sm: toRem(640),
  md: toRem(800),
  lg: toRem(960),
  sidebar: toRem(256)
}

theme.modalCloseButtonSize = {
  md: '36px',
  lg: '50px',
  xl: '70px'
}

theme.radius = {
  sm: '3px',
  md: '5px',
  lg: '10px'
}

theme.boxShadow = {
  articleThumb: '1px 2px 4px rgba(0,0,0,.05)',
  articleThumbHover: '1px 2px 15px rgba(0,0,0,.07)',
  logo: '2px 5px 20px rgba(0,0,0,0.1)',
  buttons: '0 2px 4px rgba(0,0,0,.2)',
  xs: '0 1px 2px rgba(0,0,0,.1)',
  sm: '0 2px 2px rgba(0,0,0,.1)',
  smTop: '0 -2px 2px rgba(0,0,0,.1)',
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

theme.avatarSize = {
  md: '3.125rem'
}

export default theme
