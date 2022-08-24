const palette = {
  // dark
  mercury: 'rgba(0, 0, 0, 0.1)',
  todo: 'rgba(0, 0, 0, 0.17)',
  nobel: 'rgba(0, 0, 0, 0.4)',
  empress: 'rgba(0, 0, 0, 0.55)',
  tundora: 'rgba(0, 0, 0, 0.7)',
  black: 'rgba(0, 0, 0, 1)',

  // light
  nero: 'rgba(255, 255, 255, 0.1)',
  mineshaft: 'rgba(255, 255, 255, 0.17)',
  granite: 'rgba(255, 255, 255, 0.4)',
  battleship: 'rgba(255, 255, 255, 0.55)',
  silverchalice: 'rgba(255, 255, 255, 0.7)',
  white: 'rgba(255, 255, 255, 1)',

  // nudes
  isabelline: '#F6F3EF',
  pampas: '#EFEAE4',
  timberwolf: '#D6D2CC',
  naturalgray: '#8F8C88',
  ironside: '#6B6966',
  dune: '#474543',
}

type Palette = {
  100: string
  200: string
  400: string
  500: string
  700: string
  900: string
}

type PrimaryPalette = {
  100: string
  200: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type NudePalette = {
  100: string
  200: string
  400: string
  600: string
  700: string
  900: string
}

type StatePalette = {
  100: string
  200: string
  300: string
  400: string
  500: string
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
  primary: PrimaryPalette
  success: StatePalette
  danger: StatePalette
  warning: StatePalette
  info: StatePalette
  light: Palette
  dark: Palette
  nude: NudePalette
  sub: SubPalette
  black: string
  white: string
  border: string
  overlay: string
  underline: string
}

export const colors: ThemeColors = {
  primary: {
    100: '#C6CAFF',
    200: '#5650EC',
    500: '#3B35DC',
    600: '#3B35DC',
    700: '#241DBB',
    800: '#1C168F',
    900: '#171379',
  },
  success: {
    100: '#E6FAE7',
    200: '#7EC784',
    300: '#52B45A',
    400: '#2F9237',
    500: '#206626',
  },
  danger: {
    100: '#FFECEC',
    200: '#E02F32',
    300: '#BB1316',
    400: '#94080A',
    500: '#670507',
  },
  warning: {
    100: '#FFF5EF',
    200: '#F17D39',
    300: '#D35E1A',
    400: '#B34607',
    500: '#7d3104',
  },
  info: {
    100: '#EAF2FE',
    200: '#6696DF',
    300: '#3E7BD7',
    400: '#1B57B2',
    500: '#123c7c',
  },
  light: {
    100: palette.nero,
    200: palette.mineshaft,
    400: palette.granite,
    500: palette.battleship,
    700: palette.silverchalice,
    900: palette.white,
  },
  dark: {
    100: palette.mercury,
    200: palette.todo,
    400: palette.nobel,
    500: palette.empress,
    700: palette.tundora,
    900: palette.black,
  },
  nude: {
    100: palette.isabelline,
    200: palette.pampas,
    400: palette.timberwolf,
    600: palette.naturalgray,
    700: palette.ironside,
    900: palette.dune,
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
  black: palette.black,
  white: palette.white,
  border: palette.mercury,
  overlay: palette.empress,
  underline: '#C6CAFF',
}
