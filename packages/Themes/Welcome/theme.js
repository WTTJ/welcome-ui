const palette = {
  // primary
  capehoneylight: '#FFF8D9',
  yellowlight: '#FFE166',
  yellow: '#FFCD00',
  corn: '#E5B800',
  gold: '#997B00',
  cinnamon: '#735C00',
  olive: '#4C3D00',

  // dark
  granite: '#666666',
  tundora: '#4C4C4C',
  mineshaft: '#2B2B2B',
  nero: '#1A1A1A',
  softblack: '#151515',
  black: '#000000',

  // light
  white: '#FFFFFF',
  mercury: '#E5E5E5',
  silverchalice: '#B3B3B3',
  nobel: '#999999',
  battleship: '#8C8C8C',
  empress: '#737373',

  // nudes
  isabelline: '#F6F3EF',
  pampas: '#EFEAE4',
  timberwolf: '#D6D2CC',
  naturalgrey: '#8F8C88',
  ironside: '#6B6966',
  dune: '#474543',

  // success
  spanishviridian: '#00875C',
  jade: '#00A772',
  gin: '#E3F0EC',

  // danger
  mistyrose: '#FFE7E7',
  valencialight: '#D87C6E',
  valencia: '#CE5947',
  carmen: '#AF4636',

  // info
  celticblue: '#106DD1',
  blueverry: '#4B9BF1',
  aliceblue: '#EDF3FE',

  // warning
  floralwhite: '#FFF2DC',
  sunraylight: '#EBC484',
  sunray: '#E4AE56',
  burbon: '#B97F22',

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
    200: palette.yellowlight,
    500: palette.yellow,
    700: palette.corn,
    800: palette.cinnamon,
    900: palette.olive
  },
  success: {
    100: palette.gin,
    200: palette.jade,
    500: palette.spanishviridian
  },
  danger: {
    100: palette.mistyrose,
    200: palette.valencialight,
    500: palette.valencia,
    700: palette.carmen
  },
  warning: {
    100: palette.floralwhite,
    200: palette.sunraylight,
    500: palette.sunray,
    700: palette.burbon
  },
  info: {
    100: palette.aliceblue,
    200: palette.blueverry,
    500: palette.celticblue
  },
  light: {
    100: palette.empress,
    200: palette.battleship,
    500: palette.nobel,
    700: palette.silverchalice,
    800: palette.mercury,
    900: palette.white
  },
  dark: {
    100: palette.granite,
    200: palette.tundora,
    500: palette.mineshaft,
    700: palette.nero,
    800: palette.softblack,
    900: palette.black
  },
  nude: {
    100: palette.isabelline,
    200: palette.pampas,
    500: palette.timberwolf,
    700: palette.naturalgrey,
    800: palette.ironside,
    900: palette.dune
  },
  sub: {
    1: palette.palecerulean,
    2: palette.blue,
    3: palette.pink,
    4: palette.vividtangerine,
    5: palette.springrain,
    6: palette.green
  },
  underline: palette.yellow
}

export const welcomeTheme = {
  colors,
  palette,
  radii: {
    sm: 0,
    md: 0,
    lg: 0
  },
  shadows: {
    sm: 'none',
    md: 'none'
  },
  selection: {
    color: colors.dark[900]
  },
  buttons: {
    primary: {
      color: colors.dark[900]
    }
  },
  paginations: {
    default: {
      'border-radius': 0
    },
    active: {
      color: colors.dark[900],
      '&:hover, &:focus': {
        color: colors.dark[900]
      }
    }
  },
  dateTimePickerCommon: {
    item: {
      selected: {
        color: colors.dark[900]
      }
    }
  }
}
