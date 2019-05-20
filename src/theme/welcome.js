const palette = {
  richblack: '#050506', //#050506
  smokyblack: '#0B0B0D', //#0B0B0D
  licorice: '#101013', //#101013
  eerieblack: '#16161A', //#16161A
  moodyblack: '#1B1C20', //#1B1C20
  raisinblack: '#212227', //#212227
  charcoal: '#26272E', //#26272E
  gunmetal: '#2C2D34', //#2C2D34
  metal: '#31333B', //#31333B
  onyx: '#373942', //#373942
  darkliver: '#4B4D55', //#4B4D55
  granite: '#5F6067', //#5F6067
  battleship: '#73747B', //#73747B
  steel: '#87888D', //#87888D
  silverchalice: '#AFAFB3', //#AFAFB3
  silver: '#C3C3C6', //#C3C3C6
  timberwolf: '#D7D7D9', //#D7D7D9
  isabelline: '#EEEEEE', //#EEEEEE
  snow: '#F9F9F9', //#F9F9F9

  iceberg: '#71A6DE', //#71A6DE
  lightcyan: '#E1F0FF', //#E1F0FF

  pastelorange: '#FFAF51', //#FFAF51
  lemonchiffon: '#FFF2E3', //#FFF2E3

  seafoamblue: '#00C29A', //#00C29A
  carribeangreen: '#66C8AB', //#66C8AB
  pastelmint: '#E3F8F4', //#E3F8F4

  alabamacrimson: '#F35454', //#F35454
  mistryrose: '#FEE6E6', //#FEE6E6

  linkedin: '#0077B5' // #0077B5
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
      500: palette.alabamacrimson
    },
    warning: {
      200: palette.lemonchiffon,
      500: palette.pastelorange
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
