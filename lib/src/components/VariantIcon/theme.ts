import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

export type ThemeVariantIcon = {
  ai: CSSObject
  danger: CSSObject
  default: CSSObject
  info: CSSObject
  success: CSSObject
  warning: CSSObject
}

export const getVariantIcon = (theme: ThemeValues): ThemeVariantIcon => {
  const { colors } = theme

  return {
    default: {
      color: colors['neutral-90'],
    },
    danger: {
      color: colors['red-70'],
    },
    success: {
      color: colors['green-60'],
    },
    warning: {
      color: colors['orange-60'],
    },
    info: {
      color: colors['blue-60'],
    },
    ai: {
      color: colors['violet-70'],
    },
  }
}
