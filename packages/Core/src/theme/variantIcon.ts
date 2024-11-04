import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeVariantIcon = {
  danger: CSSObject
  default: CSSObject
  info: CSSObject
  success: CSSObject
  warning: CSSObject
}

export const getVariantIcon = (theme: WuiTheme): ThemeVariantIcon => {
  const { colors } = theme

  return {
    default: {
      color: colors['neutral-90'],
    },
    danger: {
      color: colors['red-80'],
    },
    success: {
      color: colors['green-70'],
    },
    warning: {
      color: colors['orange-70'],
    },
    info: {
      color: colors['blue-70'],
    },
  }
}
