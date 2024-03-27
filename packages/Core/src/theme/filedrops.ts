import { CSSObject } from '@wttj/xstyled-styled-components'

import { WuiTheme } from './types'

export type ThemeFiledrops = {
  default: CSSObject
  dragAccept: Record<string, unknown>
  dragReject: Record<string, unknown>
  disabled: CSSObject
}

export const getFiledrops = (theme: WuiTheme): ThemeFiledrops => {
  const { colors, toRem } = theme

  return {
    default: {
      minHeight: toRem(200),
      borderStyle: 'dashed',
    },
    dragAccept: {},
    dragReject: {},
    disabled: {
      backgroundColor: colors['nude-200'],
    },
  }
}
