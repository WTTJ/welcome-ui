import { WuiTheme } from './types'

export type ThemeIcons = {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const getIcons = ({ toRem }: WuiTheme): ThemeIcons => ({
  xxs: toRem(7),
  xs: toRem(10),
  sm: toRem(12),
  md: toRem(15),
  lg: toRem(20),
  xl: toRem(27.574)
})
