import { getBaseTheme } from './core'
const theme = getBaseTheme()

const palette = {
  jade: '#00A772',
  mountainmeadow: '#17AF7F',
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
  blueberry: '#4B9BF1',
  anzac: '#DDA343',
  sunray: '#E4AE56',
  carmen: '#BF4C3B',
  valencia: '#CE5947',
  //colorpicker
  blue: '#559AF1',
  coral: '#EA724C',
  green: '#4AB519',
  pink: '#F0AABF',
  purple: '#965FE6',
  red: '#D04232',
  turquoize: '#3FD1C1',
  yellow: '#F4CF70'
}

const colors = {
  primary: {
    100: palette.gin,
    200: palette.mountainmeadow,
    500: palette.jade
  },
  secondary: {
    200: palette.seanymph,
    500: palette.cadet,
    700: palette.eden
  },
  danger: {
    200: palette.valencia,
    500: palette.carmen
  },
  warning: {
    200: palette.sunray,
    500: palette.anzac
  },
  info: {
    200: palette.blueberry,
    500: palette.bluedefrance
  },
  light: {
    100: '#FFFFFF',
    200: palette.soapstone,
    500: palette.vistawhite,
    700: palette.pampas
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
  underline: {
    'border-bottom-width': theme.borderWidths.md
  },
  fields: {
    default: {
      'background-color': colors.light[200]
    },
    focused: {
      'background-color': colors.light[100]
    },
    tags: {
      variants: {
        default: {
          'background-color': colors.nude[200]
        }
      }
    }
  }
}
