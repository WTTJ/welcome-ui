import { createTheme } from './core'
const theme = createTheme()

const palette = {
  jade: '#00A772',
  mountainmeadow: '#23C28F',
  spanishviridian: '#00875C',

  //greens
  deepteal: '#002E32',
  cyprus: '#163D40',
  aquadeep: '#134B45',
  eden: '#2D5351',
  cadet: '#567672',
  seanymph: '#849C96',
  edward: '#9DB0AA',
  opal: '#AABEB9',
  junglemist: '#B9CCC6',
  nebula: '#CCDBD7',
  gin: '#E3F0EC',

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

  //colorpicker
  blue: '#559AF1',
  coral: '#EA724C',
  green: '#4AB519',
  pink: '#F0AABF',
  purple: '#965FE6',
  red: '#D04232',
  turquoize: '#3FD1C1',
  yellow: '#F4CF70',

  // pastel
  mint: '#DFF5EB',
  aliceblue: '#DFEAFF',
  floralwhite: '#FFF2DC',
  rosewhite: '#FFE7E7'
}

const colors = {
  primary: {
    100: palette.gin,
    200: palette.mountainmeadow,
    500: palette.jade,
    700: palette.spanishviridian
  },
  secondary: {
    200: palette.seanymph,
    500: palette.cadet,
    700: palette.eden
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
    200: palette.aquadeep,
    500: palette.cyprus,
    700: palette.deepteal,
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
  }
}

export const welcomekitTheme = {
  colors,
  palette,
  alerts: {
    success: {
      'background-color': colors.primary[100],
      color: colors.secondary[700]
    }
  },
  underline: {
    'border-bottom-width': theme.borderWidths.md
  },
  fields: {
    default: {
      'background-color': colors.light[700]
    },
    focused: {
      'background-color': colors.light[900]
    }
  },
  tags: {
    variants: {
      default: {
        'background-color': colors.nude[200]
      }
    }
  }
}
