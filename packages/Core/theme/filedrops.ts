import { CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export type ThemeFiledrops = {
  default: CSSObject
  dragAccept: CSSObject
  dragReject: CSSObject
  disabled: CSSObject
}

export const getFiledrops = (theme: WuiTheme): ThemeFiledrops => {
  const { toRem } = theme

  return {
    default: {
      borderStyle: 'dashed',
      minHeight: toRem(200),
    },
    dragAccept: {},
    dragReject: {},
    disabled: {},
  }
}
