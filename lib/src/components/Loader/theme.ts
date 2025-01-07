import { ThemeValues } from '../../theme'

export type ThemeLoaders = {
  lg: string
  md: string
  sm: string
  xs: string
}

export const getLoaders = ({ toRem }: ThemeValues): ThemeLoaders => ({
  xs: toRem(8),
  sm: toRem(10),
  md: toRem(15),
  lg: toRem(20),
})
