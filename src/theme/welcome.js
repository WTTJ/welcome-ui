const palette = {
  // primary
  seafoamblue: '#00C29A',
  carribeangreen: '#66C8AB',

  richblack: '#050506',
  smokyblack: '#0B0B0D',
  licorice: '#101013',
  eerieblack: '#16161A',
  moodyblack: '#1B1C20',
  raisinblack: '#212227',
  charcoal: '#26272E',
  gunmetal: '#2C2D34',
  metal: '#31333B',
  onyx: '#373942',
  darkliver: '#4B4D55',
  granite: '#5F6067',
  battleship: '#73747B',
  steel: '#87888D',
  silverchalice: '#AFAFB3',
  silver: '#C3C3C6',
  timberwolf: '#D7D7D9',
  isabelline: '#EEEEEE',
  snow: '#F9F9F9',

  // states : infos, warning & danger
  bluedefrance: '#3790F0',
  blueberry: '#4B9BF1',
  anzac: '#DDA343',
  sunray: '#E4AE56',
  carmen: '#BF4C3B',
  valencia: '#CE5947',

  // others
  iceberg: '#71A6DE',
  lightcyan: '#E1F0FF',
  pastelmint: '#E3F8F4',
  linkedin: '#0077B5'
}

export const welcomeTheme = {
  colors: {
    primary: {
      200: palette.carribeangreen,
      500: palette.seafoamblue
    },
    secondary: {
      200: palette.raisinblack,
      500: palette.moodyblack,
      700: palette.eerieblack
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
      200: palette.snow,
      500: palette.isabelline,
      700: palette.timberwolf
    },
    dark: {
      200: palette.licorice,
      500: palette.smokyblack,
      700: palette.richblack,
      900: '#000'
    },
    nude: {
      100: palette.silver,
      200: palette.silverchalice,
      300: palette.steel,
      400: palette.battleship,
      500: palette.granite,
      600: palette.darkliver,
      700: palette.onyx,
      800: palette.metal
    }
  },
  palette
}
