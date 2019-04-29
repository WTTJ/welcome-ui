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
  white: '#FFFFFF', //#FFFFFF

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
  color: {
    primary: palette.seafoamblue,
    secondary: palette.cadet,
    danger: palette.alabamacrimson,
    success: palette.seafoamblue,
    warning: palette.pastelorange,
    info: palette.carribeangreen,
    light: palette.isabelline,
    dark: palette.charcoal,
    white: palette.white,
    text: {
      primary: palette.seafoamblue,
      secondary: palette.battleship,
      tertiary: palette.steel,
      quaternary: palette.silverchalice,
      danger: palette.alabamacrimson,
      success: palette.seafoamblue,
      warning: palette.pastelorange,
      info: palette.carribeangreen,
      light: palette.isabelline,
      dark: palette.charcoal,
      white: palette.white
    },
    bg: {
      primary: palette.seafoamblue,
      secondary: palette.cadet,
      tertiary: palette.timberwolf,
      danger: palette.alabamacrimson,
      success: palette.seafoamblue,
      warning: palette.pastelorange,
      info: palette.carribeangreen,
      light: palette.isabelline,
      dark: palette.charcoal,
      white: palette.white
    },
    border: {
      primary: palette.timberwolf
    }
  },
  palette,
  defaultFontSize: 16,
  defaultFontFamily: 'welcomeweb',
  headingFontFamily: 'welcomeweb',
  fonts: {
    welcomeweb: [
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regular',
        weight: '400',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-medium',
        weight: '500',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bold',
        weight: '600',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-black',
        weight: '700',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regularitalic',
        weight: '400',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-mediumitalic',
        weight: '500',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bolditalic',
        weight: '600',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      },
      {
        url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-blackitalic',
        weight: '700',
        style: 'italic',
        extensions: ['woff2', 'woff', 'ttf']
      }
    ]
  }
}

export default welcomeTheme
