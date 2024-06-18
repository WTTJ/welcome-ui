import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeLabels = CSSObject

export const getLabels = (theme: WuiTheme): ThemeLabels => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors['neutral-50'],
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
  }
}
