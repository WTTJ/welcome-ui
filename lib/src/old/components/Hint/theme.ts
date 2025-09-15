import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeHints = {
  danger: CSSObject
  default: CSSObject
  success: CSSObject
  warning: CSSObject
}

export const getHints = (theme: ThemeValues): ThemeHints => {
  const { colors, texts } = theme

  return {
    danger: {
      color: colors['red-70'],
    },
    default: {
      ...texts.xs,
      color: colors['neutral-60'],
    },
    success: {
      color: colors['green-70'],
    },
    warning: {
      color: colors['orange-70'],
    },
  }
}
