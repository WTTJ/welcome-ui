import { WuiTheme } from './types'

export type ThemeIcons = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export const getIcons = ({ toRem }: WuiTheme): ThemeIcons => ({
  xs: toRem(12),
  sm: toRem(16),
  md: toRem(24),
  lg: toRem(32),
  xl: toRem(48),
  xxl: toRem(64),
})
