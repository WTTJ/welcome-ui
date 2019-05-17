const palette = {
  jade: '#00A772', //#00A772
  mountainmeadow: '#17AF7F', //#17AF7F
  //greens
  deepteal: '#002E32', //#002E32
  cyprus: '#163D40', //#163D40
  aquadeep: '#134B45', //#134B45
  eden: '#2D5351', //#2D5351
  cadet: '#567672', //#567672
  seanymph: '#849C96', //#849C96
  edward: '#9DB0AA', //#9DB0AA
  opal: '#AABEB9', //#AABEB9
  junglemist: '#B9CCC6', //#B9CCC6
  nebula: '#CCDBD7', //#CCDBD7
  gin: '#E3F0EC', //#E3F0EC
  //nudes
  concord: '#7F7C7A', //#7F7C7A
  zorba: '#97938F', //#97938F
  silverchalice: '#AFABA7', //#AFABA7
  silversand: '#BFBDB9', //#BFBDB9
  quillgray: '#D7D5D1', //#D7D5D1
  gainsboro: '#E1DFDB', //#E1DFDB
  cararra: '#EEECE8', //#EEECE8
  isabelline: '#F2F0ED', //#F2F0ED
  pampas: '#F6F4F2', //#F6F4F2
  vistawhite: '#FBF9F7', //##FBF9F7
  soapstone: '#FFFDFB', //#FFFDFB
  //warning & danger
  anzac: '#DDA343', //#DDA343
  sunray: '#E4AE56', //#E4AE56
  carmen: '#BF4C3B', //#BF4C3B
  valencia: '#CE5947', //#CE5947
  //colorpicker
  blue: '#559AF1', //#559AF1
  coral: '#EA724C', //#EA724C
  green: '#4AB519', //#4AB519
  pink: '#F0AABF', //#F0AABF
  purple: '#965FE6', //#965FE6
  red: '#D04232', //#D04232
  turquoize: '#3FD1C1', //#3FD1C1
  yellow: '#F4CF70' //#F4CF70
}

export const welcomekitTheme = {
  colors: {
    primary: {
      200: palette.moutainmeadow,
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
  },
  fields: {
    placeholder: {
      color: palette.silverchalice
    },
    focus: {
      'border-color': palette.jade
    },
    radiotabs: {
      default: {
        color: palette.zorba,
        'background-color': palette.vistawhite
      },
      checked: {
        'background-color': palette.soapstone,
        'border-color': palette.jade,
        '-webkit-text-stroke-color': palette.aquadeep,
        '-webkit-text-fill-color': palette.aquadeep
      },
      hover: {
        color: palette.concord,
        'background-color': palette.soapstone
      }
    }
  },
  palette
}
