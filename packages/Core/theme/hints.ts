import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeHints = CSSObject

export const getHints = (theme: WuiTheme): ThemeHints => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors.light[500],
    fontSize: fontSizes.body4,
    fontWeight: fontWeights.regular,
  }
}
