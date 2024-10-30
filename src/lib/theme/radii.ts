import { ThemeValues } from '.'

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
  const { toRem } = theme

  return {
    none: '0',
    sm: toRem(2),
    md: toRem(4),
    lg: toRem(8),
    xl: toRem(16),
    xxl: toRem(24),
    full: '100%',
  }
}
