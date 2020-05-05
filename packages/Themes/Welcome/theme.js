import { css } from '@xstyled/styled-components'

const palette = {
  yukongold: '#B99606',
  mustard: '#FFCD00',
  capehoney: '#FFF0B2',
  capehoneylight: '#fff8d9',

  //greens
  nero: '#252525',
  gondola: '#353535',
  charcoal: '#3F3F3F',
  tundora: '#4B4B4B',
  dovegrey: '#6F6F6F',
  shadylady: '#969696',
  darkgray: '#ACACAC',

  //nudes
  concord: '#7F7C7A',
  zorba: '#97938F',
  silverchalice: '#AFABA7',
  silversand: '#BFBDB9',
  quillgray: '#D7D5D1',
  gainsboro: '#E1DFDB',
  cararra: '#EEECE8',
  isabelline: '#F2F0ED',
  pampas: '#F6F4F2',
  vistawhite: '#FBF9F7',
  soapstone: '#FFFDFB',

  // states : infos, warning & danger
  bluedefrance: '#3790F0',
  bluejeans: '#5EAAFC',
  bronze: '#CA8E2A',
  anzac: '#DDA343',
  casablanca: '#F1B85B',
  sweetbrown: '#A53626',
  carmen: '#BF4C3B',
  flamingo: '#E16654',

  //subs
  blue: '#3B52D0',
  pink: '#EE4B65',
  green: '#267566',
  salmon: '#F79D85',
  babygreen: '#A5D0A8',
  babyblue: '#8CB3DB',

  // pastel
  mint: '#DFF5EB',
  aliceblue: '#DFEAFF',
  floralwhite: '#FFF2DC',
  rosewhite: '#FFE7E7'
}

const colors = {
  primary: {
    100: palette.capehoneylight,
    200: palette.capehoney,
    500: palette.mustard,
    700: palette.yukongold
  },
  secondary: {
    200: palette.shadylady,
    500: palette.dovegrey,
    700: palette.tundora
  },
  danger: {
    100: palette.rosewhite,
    200: palette.flamingo,
    500: palette.carmen,
    700: palette.sweetbrown
  },
  warning: {
    100: palette.floralwhite,
    200: palette.casablanca,
    500: palette.anzac,
    700: palette.bronze
  },
  info: {
    100: palette.aliceblue,
    200: palette.bluejeans,
    500: palette.bluedefrance
  },
  light: {
    200: palette.pampas,
    500: palette.vistawhite,
    700: palette.soapstone,
    900: '#FFFFFF'
  },
  dark: {
    200: palette.charcoal,
    500: palette.gondola,
    700: palette.nero,
    900: '#000'
  },
  nude: {
    100: palette.isabelline,
    200: palette.cararra,
    300: palette.gainsboro,
    400: palette.quillgray,
    500: palette.silversand,
    600: palette.silverchalice,
    700: palette.zorba,
    800: palette.concord
  },
  sub: {
    1: palette.babyblue,
    2: palette.blue,
    3: palette.pink,
    4: palette.salmon,
    5: palette.babygreen,
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
  buttons: {
    primary: {
      color: colors.dark[700]
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
  }
}
