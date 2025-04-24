/* eslint-disable perfectionist/sort-object-types */
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
/* eslint-enable perfectionist/sort-object-types */

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
