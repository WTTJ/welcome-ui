import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

export type ThemeLabels = CSSObject

export const getLabels = (theme: ThemeValues): ThemeLabels => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors['neutral-60'],
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
  }
}
