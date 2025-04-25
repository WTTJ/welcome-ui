export type ThemeScreens = {
  '3xl': number
  '4xl': number
  [key: number]: number
  [key: string]: number
  lg: number
  md: number
  sm: number
  xl: number
  xs: number
  xxl: number
}

export const screens: ThemeScreens = {
  '3xl': 1620,
  '4xl': 1920,
  lg: 980,
  md: 736,
  sm: 480,
  xl: 1280,
  xs: 0,
  xxl: 1440,
}
