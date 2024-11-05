import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeHints = {
  danger: CSSObject
  default: CSSObject
  success: CSSObject
  warning: CSSObject
}

export const getHints = (theme: WuiTheme): ThemeHints => {
  const { colors, texts } = theme

  return {
    default: {
      ...texts.xs,
      color: colors['neutral-60'],
    },
    danger: {
      color: colors['red-70'],
    },
    success: {
      color: colors['green-70'],
    },
    warning: {
      color: colors['orange-70'],
    },
  }
}
