import { hexToRGBA } from '@welcome-ui/utils'

type SmallPalette = {
  100: string
  200: string
  500: string
  700: string
}

type BigPalette = SmallPalette & {
  800: string
  900: string
}

type SubPalette = {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
}

export type ThemeColors = {
  primary: BigPalette
  success: SmallPalette
  danger: SmallPalette
  warning: SmallPalette
  info: SmallPalette
  light: BigPalette
  dark: BigPalette
  nude: BigPalette
  sub: SubPalette
  underline: string
  overlay: string
}

export const colors: ThemeColors = {
  primary: {
    100: '#C6CAFF',
    200: '#5650EC',
    500: '#3B35DC',
    700: '#241DBB',
    800: '#1C168F',
    900: '#171379',
  },
  success: {
    100: '#E6FAE7',
    200: '#7EC784',
    500: '#52B45A',
    700: '#2F9237',
  },
  danger: {
    100: '#FFECEC',
    200: '#E02F32',
    500: '#BB1316',
    700: '#94080A',
  },
  warning: {
    100: '#FFF5EF',
    200: '#F17D39',
    500: '#D35E1A',
    700: '#B34607',
  },
  info: {
    100: '#EAF2FE',
    200: '#6696DF',
    500: '#3E7BD7',
    700: '#1B57B2',
  },
  light: {
    100: '#7D7D7D',
    200: '#969696',
    500: '#AFAFAF',
    700: '#C8C8C8',
    800: '#E1E1E1',
    900: '#FFFFFF',
  },
  dark: {
    100: '#737373',
    200: '#4C4C4C',
    500: '#252525',
    700: '#1B1B1B',
    800: '#111111',
    900: '#000000',
  },
  nude: {
    100: '#F1F1F0',
    200: '#E8E8E6',
    500: '#C3C3BE',
    700: '#818177',
    800: '#585851',
    900: '#444441',
  },
  sub: {
    1: '#3FD1C1',
    2: '#4AB519',
    3: '#EA724C',
    4: '#F0AABF',
    5: '#965FE6',
    6: '#F4CF70',
    7: '#FE6D73',
  },
  underline: '#C6CAFF',
  overlay: hexToRGBA('#000000', 0.55),
}
