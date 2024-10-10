import { WuiTheme } from './types'

export type ThemeLoaders = {
  lg: string
  md: string
  sm: string
  xs: string
}

export const getLoaders = ({ toRem }: WuiTheme): ThemeLoaders => ({
  xs: toRem(8),
  sm: toRem(10),
  md: toRem(15),
  lg: toRem(20),
})
