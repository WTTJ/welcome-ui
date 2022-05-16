import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

export type ThemeHints = CSSObject

export const getHints = (theme: WuiTheme): ThemeHints => {
  const { fontSizes, fontWeights } = theme

  return {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
  }
}
