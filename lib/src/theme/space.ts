import type { ThemeValues } from '.'

/* eslint-disable perfectionist/sort-object-types */
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
/* eslint-enable perfectionist/sort-object-types */

export const getSpace = (theme: ThemeValues): ThemeSpace => {
  return {
    '3xl': theme.toRem(48),
    '4xl': theme.toRem(64),
    '5xl': theme.toRem(96),
    '6xl': theme.toRem(128),
    '7xl': theme.toRem(192),
    lg: theme.toRem(16),
    md: theme.toRem(12),
    sm: theme.toRem(8),
    xl: theme.toRem(24),
    xs: theme.toRem(4),
    xxl: theme.toRem(32),
    xxs: theme.toRem(2),
  }
}
