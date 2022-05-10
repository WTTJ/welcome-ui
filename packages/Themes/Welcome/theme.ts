import { createTheme, WuiTheme } from '@welcome-ui/core'

const theme = createTheme()

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

const palette = {
  // primary
  dandelion: '#FFF8D9',
  cinnamon: '#FFE166',
  yellow: '#FFCD00',
  gold: '#E5B800',
  corn: '#997B00',
  cornsilk: '#735C00',
  olive: '#4C3D00',

  // success
  gin: '#E3F0EC',
  riptide: '#99DCC7',
  puertorico: '#45BE98',
  jade: '#00A772',
  spanishviridian: '#00875C',

  // danger
  rosewhite: '#FFE7E7',
  beautybush: '#EBBDB5',
  japonica: '#D87C6E',
  valencia: '#CE5947',
  carmen: '#AF4636',

  // info
  aliceblue: '#EDF3FE',
  sail: '#B7D7F9',
  lightsky: '#9AC7F7',
  blueberry: '#4B9BF1',
  celticblue: '#106DD1',

  // warning
  floralwhite: '#FFF2DC',
  sidecar: '#F4DFBB',
  marzipan: '#EBC484',
  sunray: '#E4AE56',
  bourbon: '#B97F22',

  //subs
  paleblue: '#8CB3DB',
  blue: '#3B52D0',
  red: '#EE4B65',
  tangerine: '#F79D85',
  palegreen: '#A5D0A8',
  green: '#267566',
  purple: '#9B8CC0',
}

const colors: Partial<WuiTheme['colors']> = {
  primary: {
    100: palette.dandelion,
    200: palette.cinnamon,
    400: palette.yellow,
    500: palette.gold,
    700: palette.corn,
    800: palette.cornsilk,
    900: palette.olive,
  },
  success: {
    100: palette.gin,
    200: palette.riptide,
    300: palette.puertorico,
    400: palette.jade,
    500: palette.spanishviridian,
  },
  danger: {
    100: palette.rosewhite,
    200: palette.beautybush,
    300: palette.japonica,
    400: palette.valencia,
    500: palette.carmen,
  },
  warning: {
    100: palette.floralwhite,
    200: palette.sidecar,
    300: palette.marzipan,
    400: palette.sunray,
    500: palette.bourbon,
  },
  info: {
    100: palette.aliceblue,
    200: palette.sail,
    300: palette.lightsky,
    400: palette.blueberry,
    500: palette.celticblue,
  },
  sub: {
    1: palette.paleblue,
    2: palette.blue,
    3: palette.red,
    4: palette.tangerine,
    5: palette.palegreen,
    6: palette.green,
    7: palette.purple,
  },
  underline: palette.yellow,
}

export const welcomeTheme: RecursivePartial<WuiTheme> = {
  colors,
  radii: {
    sm: '0',
    md: '0',
    lg: '0',
  },
  shadows: {
    sm: 'none',
    md: 'none',
  },
  selection: {
    color: theme.colors.dark[900],
  },
  radios: {
    checked: {
      color: theme.colors.dark[900],
    },
  },
  radioTabs: {
    checked: {
      color: theme.colors.dark[900],
    },
  },
  checkboxes: {
    checked: {
      color: theme.colors.dark[900],
    },
  },
  buttons: {
    primary: {
      color: theme.colors.dark[900],
    },
  },
  tags: {
    variants: {
      primary: {
        color: theme.colors.dark[900],
      },
    },
  },
  paginations: {
    item: {
      borderRadius: 0,
    },
    active: {
      color: theme.colors.dark[900],
    },
  },
  dateTimePickerCommon: {
    item: {
      selected: {
        color: theme.colors.dark[900],
      },
    },
  },
  defaultFields: {
    checkableField: {
      checked: {
        color: theme.colors.dark[900],
      },
    },
  },
}
