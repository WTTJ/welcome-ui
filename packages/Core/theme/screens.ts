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
