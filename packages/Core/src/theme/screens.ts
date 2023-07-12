export type ThemeScreens = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
  '3xl': number
  '4xl': number
  [key: string]: number
  [key: number]: number
}

export const screens: ThemeScreens = {
  xs: 0,
  sm: 480,
  md: 736,
  lg: 980,
  xl: 1280,
  xxl: 1440,
  '3xl': 1620,
  '4xl': 1920,
}

export const breakpoints = {
  xs: '0px',
  sm: '480px',
  md: '736px',
  lg: '980px',
  xl: '1280px',
  xxl: '1440px',
  '3xl': '1620px',
  '4xl': '1920px',
}
