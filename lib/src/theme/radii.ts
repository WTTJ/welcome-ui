/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */
import type { ThemeValues } from '.'

export type ThemeRadii = {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  full: string
  [key: number]: string
}

export const getRadii = (theme: ThemeValues): ThemeRadii => {
  return {
    none: '0',
    sm: theme.toRem(2),
    md: theme.toRem(4),
    lg: theme.toRem(8),
    xl: theme.toRem(16),
    xxl: theme.toRem(24),
    full: '100%',
  }
}
