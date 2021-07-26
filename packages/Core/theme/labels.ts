import { WuiTheme } from './types'

export type ThemeLabels = {
  color: string
  fontSize: string
  fontWeight: string
}

export const getLabels = (theme: WuiTheme): ThemeLabels => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors.light[100],
    fontSize: fontSizes.body3,
    fontWeight: fontWeights.medium
  }
}
