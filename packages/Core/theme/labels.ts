import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeLabels = CSSObject

export const getLabels = (theme: WuiTheme): ThemeLabels => {
  const { fontSizes, fontWeights } = theme

  return {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
  }
}
