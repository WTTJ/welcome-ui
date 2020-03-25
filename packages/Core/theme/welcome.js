const palette = {
  // primary
  eucalyptus: '#37CBA9',
  carribeangreen: '#00C29A',
  persiangreen: '#00A280',

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
  bluejeans: '#5EAAFC',
  bronze: '#CA8E2A',
  anzac: '#DDA343',
  casablanca: '#F1B85B',
  sweetbrown: '#A53626',
  carmen: '#BF4C3B',
  flamingo: '#E16654',

  // pastel
  mint: '#DFF5EB',
  aliceblue: '#DFEAFF',
  floralwhite: '#FFF2DC',
  rosewhite: '#FFE7E7'
}

const colors = {
  primary: {
    100: palette.mint,
    200: palette.eucalyptus,
    500: palette.carribeangreen,
    700: palette.persiangreen
  },
  secondary: {
    200: palette.battleship,
    500: palette.granite,
    700: palette.darkliver
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
    200: palette.timberwolf,
    500: palette.isabelline,
    700: palette.snow,
    900: '#FFFFFF'
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
    800: palette.onyx
  }
}

export const welcomeTheme = {
  colors,
  alerts: {
    success: {
      backgroundColor: colors.primary[100],
      color: colors.primary[500]
    }
  },
  buttons: {
    primary: {
      color: colors.light[900]
    },
    secondary: {
      color: colors.nude[800]
    },
    tertiary: {
      color: colors.light[900]
    },
    'primary-warning': {
      color: colors.light[900]
    },
    'primary-danger': {
      color: colors.light[900]
    },
    hover: {
      secondary: {
        backgroundColor: colors.light[900]
      }
    },
    focused: {
      secondary: {
        borderColor: colors.nude[400]
      }
    },
    disabled: {
      backgroundColor: colors.nude[300],
      borderColor: colors.nude[300]
    }
  },
  palette
}
