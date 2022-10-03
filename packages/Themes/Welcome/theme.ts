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
  'primary-100': palette.dandelion,
  'primary-200': palette.cinnamon,
  'primary-500': palette.yellow,
  'primary-600': palette.gold,
  'primary-700': palette.corn,
  'primary-800': palette.cornsilk,
  'primary-900': palette.olive,
  'success-100': palette.gin,
  'success-200': palette.riptide,
  'success-300': palette.puertorico,
  'success-400': palette.jade,
  'success-500': palette.spanishviridian,
  'danger-100': palette.rosewhite,
  'danger-200': palette.beautybush,
  'danger-300': palette.japonica,
  'danger-400': palette.valencia,
  'danger-500': palette.carmen,
  'warning-100': palette.floralwhite,
  'warning-200': palette.sidecar,
  'warning-300': palette.marzipan,
  'warning-400': palette.sunray,
  'warning-500': palette.bourbon,
  'info-100': palette.aliceblue,
  'info-200': palette.sail,
  'info-300': palette.lightsky,
  'info-400': palette.blueberry,
  'info-500': palette.celticblue,
  'sub-1': palette.paleblue,
  'sub-2': palette.blue,
  'sub-3': palette.red,
  'sub-4': palette.tangerine,
  'sub-5': palette.palegreen,
  'sub-6': palette.green,
  'sub-7': palette.purple,
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
    color: theme.colors['dark-900'],
  },
  radios: {
    checked: {
      color: theme.colors['dark-900'],
    },
  },
  radioTabs: {
    checked: {
      color: theme.colors['dark-900'],
    },
  },
  checkboxes: {
    checked: {
      color: theme.colors['dark-900'],
    },
  },
  buttons: {
    primary: {
      color: theme.colors['dark-900'],
    },
  },
  tags: {
    variants: {
      primary: {
        color: theme.colors['dark-900'],
      },
    },
  },
  dateTimePickerCommon: {
    item: {
      selected: {
        color: theme.colors['dark-900'],
      },
    },
  },
  defaultFields: {
    checkableField: {
      checked: {
        color: theme.colors['dark-900'],
      },
    },
  },
}
