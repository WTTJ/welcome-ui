import type { ThemeValues } from '.'

export type ThemeRadii = {
  [key: number]: string
  full: string
  lg: string
  md: string
  none: string
  sm: string
  xl: string
  xxl: string
}

export const getRadii = (theme: ThemeValues): ThemeRadii => {
  return {
    full: '100%',
    lg: theme.toRem(8),
    md: theme.toRem(4),
    none: '0',
    sm: theme.toRem(2),
    xl: theme.toRem(16),
    xxl: theme.toRem(24),
  }
}
