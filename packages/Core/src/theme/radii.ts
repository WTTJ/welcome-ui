import { WuiTheme } from './types'

export type ThemeRadii = {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  [key: number]: string
}

export const getRadii = (theme: WuiTheme): ThemeRadii => {
  return {
    none: '0',
    sm: theme.toRem(2),
    md: theme.toRem(4),
    lg: theme.toRem(8),
    xl: theme.toRem(16),
  }
}
