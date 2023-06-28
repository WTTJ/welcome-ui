import { definePreset } from '@pandacss/dev'
import { defaultPreset, formatTokens, WuiTheme } from '@welcome-ui/core'

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

  // nudes
  isabelline: '#F6F3EF',
  pampas: '#EFEAE4',
  timberwolf: '#D6D2CC',
  naturalgray: '#8F8C88',
  ironside: '#6B6966',
  dune: '#474543',
}

const colors: Partial<WuiTheme['colors']> = {
  'primary-100': palette.dandelion,
  'primary-200': palette.cinnamon,
  'primary-500': palette.yellow,
  'primary-600': palette.gold,
  'primary-700': palette.corn,
  'primary-800': palette.cornsilk,
  'primary-900': palette.olive,
  'nude-100': palette.isabelline,
  'nude-200': palette.pampas,
  'nude-400': palette.timberwolf,
  'nude-600': palette.naturalgray,
  'nude-700': palette.ironside,
  'nude-900': palette.dune,
  underline: palette.yellow,
}

export const welcomeTheme: RecursivePartial<WuiTheme> = {
  colors,
  radii: {
    sm: '0px',
    md: '0px',
    lg: '0px',
  },
  shadows: {
    sm: 'none',
    md: 'none',
  },
}

export const welcomePreset = definePreset({
  theme: {
    tokens: {
      colors: { ...defaultPreset.colors, ...formatTokens(colors) },
      spacing: defaultPreset.spacing,
    },
  },
})
