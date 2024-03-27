import { CSSObject } from '@wttj/xstyled-styled-components'

import { WuiTheme } from './types'

export type ThemeLabels = CSSObject

export const getLabels = (theme: WuiTheme): ThemeLabels => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors['dark-500'],
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
  }
}
