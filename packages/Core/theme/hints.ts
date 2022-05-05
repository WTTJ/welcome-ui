import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeHints = CSSObject

export const getHints = (theme: WuiTheme): ThemeHints => {
  const { fontSizes, fontWeights } = theme

  return {
    fontSize: fontSizes.body4,
    fontWeight: fontWeights.regular,
  }
}
