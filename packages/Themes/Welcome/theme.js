import { css } from '@xstyled/styled-components'
import { hexToRGBA } from '@welcome-ui/utils'

const palette = {
  gold: '#997B00',
  capehoneylight: '#fff8d9',

  // primary
  black: '#000000',
  softblack: '#151515',
  white: '#FFFFFF',
  yellow: '#FFCD00',

  // greys
  nero: '#1A1A1A',
  mineshaft: '#2B2B2B',
  dune: '#474543',
  tundora: '#4C4C4C',
  ironside: '#6B6966',
  granite: '#666666',
  empress: '#737373',
  naturalgrey: '#8F8C88',
  nobel: '#999999',
  battleship: '#8C8C8C',
  silverchalice: '#B3B3B3',
  pampas: '#EFEAE4',
  timberwolf: '#D6D2CC',
  mercury: '#E5E5E5',
  isabelline: '#F6F3EF',
  isabellinelight: '#fcfbfa',

  // blue
  celticblue: '#106DD1',
  blueverry: '#4B9BF1',
  aliceblue: '#EDF3FE',

  // red
  carmen: '#AF4636',
  valencia: '#CE5947',
  mistyrose: '#FFE7E7',

  // yellow
  burbon: '#B97F22',
  sunray: '#E4AE56',
  floralwhite: '#FFF2DC',

  // green
  spanishviridian: '#00875C',
  jade: '#00A772',
  gin: '#E3F0EC',

  //subs
  blue: '#3B52D0',
  pink: '#EE4B65',
  green: '#267566',
  vividtangerine: '#F79D85',
  springrain: '#A5D0A8',
  palecerulean: '#8CB3DB'
}

const colors = {
  primary: {
    100: palette.capehoneylight,
    200: '#FFE166',
    500: palette.yellow,
    700: palette.gold
  },
  secondary: {
    200: palette.granite,
    500: palette.dune,
    700: palette.nero
  },
  success: {
    100: palette.gin,
    200: palette.jade,
    500: palette.spanishviridian
  },
  danger: {
    100: palette.mistyrose,
    200: '#D87C6E',
    500: palette.valencia,
    700: palette.carmen
  },
  warning: {
    100: palette.floralwhite,
    200: '#EBC484',
    500: palette.sunray,
    700: palette.burbon
  },
  info: {
    100: palette.aliceblue,
    200: palette.blueverry,
    500: palette.celticblue
  },
  light: {
    200: palette.pampas,
    500: palette.isabelline,
    700: palette.isabellinelight,
    900: palette.white
  },
  dark: {
    200: palette.mineshaft,
    500: palette.softblack,
    700: palette.nero,
    900: palette.black
  },
  nude: {
    100: '#F2F2F2',
    200: palette.mercury,
    300: palette.timberwolf,
    400: palette.silverchalice,
    500: palette.nobel,
    600: palette.battleship,
    700: palette.naturalgrey,
    800: palette.empress
  },
  sub: {
    1: palette.palecerulean,
    2: palette.blue,
    3: palette.pink,
    4: palette.vividtangerine,
    5: palette.springrain,
    6: palette.green
  }
}

const underlineStyles = css`
  background-image: linear-gradient(0deg, ${colors.primary[500]}, ${colors.primary[500]} 100%);
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position-y: calc(200% - 1px);
  transition: background-position-y 0.25s;
`

const linksPrimaryHoverStyles = css`
  opacity: 1;
  background-position-y: 100%;
`

export const welcomeTheme = {
  colors,
  palette,
  radii: {
    sm: undefined,
    md: undefined,
    lg: undefined
  },
  buttons: {
    primary: {
      color: colors.dark[700]
    },
    secondary: {
      color: colors.light[900],
      'background-color': colors.dark[900],
      'border-color': colors.dark[900]
    },
    tertiary: {
      color: colors.dark[900],
      'background-color': 'transparent',
      'border-color': colors.dark[900]
    },
    quaternary: {
      color: colors.dark[900],
      'background-color': colors.light[900],
      'border-color': colors.light[900]
    },
    hover: {
      secondary: {
        'background-color': colors.dark[200],
        'border-color': colors.dark[200]
      },
      tertiary: {
        'background-color': hexToRGBA(colors.dark[900], 0.1),
        'border-color': colors.dark[900]
      },
      quaternary: {
        color: colors.dark[900],
        'background-color': colors.nude[100],
        'border-color': colors.nude[100]
      }
    },
    focus: {
      secondary: {
        'background-color': colors.dark[200],
        'border-color': colors.dark[200]
      },
      tertiary: {
        'background-color': hexToRGBA(colors.dark[900], 0.4),
        'border-color': colors.dark[900]
      },
      quaternary: {
        'background-color': colors.nude[200],
        'border-color': colors.nude[200]
      }
    },
    disabled: {
      color: colors.nude[700],
      'background-color': colors.nude[300],
      'border-color': colors.nude[300]
    }
  },
  underline: underlineStyles,
  fields: {
    select: {
      highlighted: {
        'background-color': colors.light[200]
      }
    }
  },
  links: {
    primary: { hover: linksPrimaryHoverStyles },
    'primary-underline-span': {
      default: css`
        > span {
          ${underlineStyles};
        }
      `,
      hover: css`
        > span {
          ${linksPrimaryHoverStyles};
        }
      `
    }
  },
  tabs: {
    item: {
      default: {
        'text-decoration': 'none'
      }
    },
    tabsBorder: {
      'background-color': 'transparent'
    }
  },
  tags: {
    variants: {
      default: {
        'background-color': colors.nude[100]
      }
    }
  },
  fontSizes: {
    button: 13
  }
}
