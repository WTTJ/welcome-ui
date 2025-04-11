/* eslint-disable perfectionist/sort-objects */
export type ThemeScreens = {
  [key: number]: number
  [key: string]: number
  '3xl': number
  '4xl': number
  lg: number
  md: number
  sm: number
  xl: number
  xs: number
  xxl: number
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
