import { ThemeValues } from '@/theme'

export type ThemeIcons = {
  lg: string
  md: string
  sm: string
  xl: string
  xs: string
  xxl: string
}

export const getIcons = ({ toRem }: ThemeValues): ThemeIcons => ({
  xs: toRem(12),
  sm: toRem(16),
  md: toRem(24),
  lg: toRem(32),
  xl: toRem(48),
  xxl: toRem(64),
})
