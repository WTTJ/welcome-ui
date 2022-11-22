import { CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export type ThemeFiledrops = {
  default: CSSObject
  dragAccept: CSSObject
  dragReject: CSSObject
  disabled: CSSObject
}

export const getFiledrops = (theme: WuiTheme): ThemeFiledrops => {
  const { colors, toRem } = theme

  return {
    default: {
      minHeight: toRem(200),
    },
    dragAccept: {},
    dragReject: {},
    disabled: {
      backgroundColor: colors['nude-200'],
    },
  }
}
