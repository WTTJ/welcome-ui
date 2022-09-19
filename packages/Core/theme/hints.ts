import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeHints = CSSObject

export const getHints = (theme: WuiTheme): ThemeHints => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    color: colors['dark-400'],
  }
}
