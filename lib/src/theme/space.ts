/* eslint-disable perfectionist/sort-objects */
import type { ThemeValues } from '.'

export type ThemeSpace = {
  [key: number]: string
  [key: string]: string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
  lg: string
  md: string
  sm: string
  xl: string
  xs: string
  xxl: string
  xxs: string
}

export const getSpace = (theme: ThemeValues): ThemeSpace => {
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
