import { ThemeValues } from '.'

export type ThemeSpace = {
  [key: string]: string
  [key: number]: string
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
  const { toRem } = theme

  return {
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
}
