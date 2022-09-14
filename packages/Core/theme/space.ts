import { WuiTheme } from './types'

export type ThemeSpace = {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
  [key: string]: string
  [key: number]: string
}

export const getSpace = (theme: WuiTheme): ThemeSpace => {
  return {
    xxs: theme.toRem(2),
    xs: theme.toRem(4),
    sm: theme.toRem(8),
    md: theme.toRem(12),
    lg: theme.toRem(16),
    xl: theme.toRem(24),
    xxl: theme.toRem(32),
    '3xl': theme.toRem(48),
    '4xl': theme.toRem(64),
    '5xl': theme.toRem(96),
    '6xl': theme.toRem(128),
    '7xl': theme.toRem(192),
  }
}

const DEFAULT_FONT_SIZE = 16
const toRem = (px: number) => `${px / DEFAULT_FONT_SIZE}rem`

export const space = {
  xxs: toRem(2),
  xs: toRem(4),
  sm: toRem(8),
  md: toRem(12),
  lg: toRem(16),
  xl: toRem(24),
  xxl: toRem(32),
  '3xl': toRem(48),
  '4xl': toRem(64),
  '5xl': toRem(96),
  '6xl': toRem(128),
  '7xl': toRem(192),
}
