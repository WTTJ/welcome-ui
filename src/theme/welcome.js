const palette = {
  // primary
  eucalyptus: '#37CBA9',
  carribeangreen: '#00C29A',

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

  // pastel
  mint: '#DFF5EB'
}

const colors = {
  primary: {
    100: palette.mint,
    200: palette.eucalyptus,
    500: palette.carribeangreen
  },
  secondary: {
    200: palette.granite,
    500: palette.onyx,
    700: palette.metal
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
    200: palette.metal,
    500: palette.raisinblack,
    700: palette.moodyblack,
    900: palette.richblack
  },
  nude: {
    100: palette.isabelline,
    200: palette.timberwolf,
    300: palette.silver,
    400: palette.silverchalice,
    500: palette.steel,
    600: palette.battleship,
    700: palette.granite,
    800: palette.darkliver
  }
}

export const welcomeTheme = {
  colors,
  buttons: {
    secondary: {
      color: colors.secondary[500],
      'background-color': colors.light[100]
    },
    tertiary: {
      'background-color': colors.secondary[500],
      'border-color': colors.secondary[500]
    },
    focused: {
      secondary: {
        color: colors.secondary[200],
        'border-color': colors.nude[200],
        'box-shadow': 'none'
      },
      tertiary: {
        'background-color': colors.secondary[200],
        'border-color': colors.secondary[200]
      }
    },
    disabled: {
      color: colors.nude[600]
    }
  },
  palette
}
