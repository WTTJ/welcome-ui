import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeTextareas = CSSObject

export const getTextareas = (theme: WuiTheme): ThemeTextareas => {
  const { toRem } = theme

  return {
    minHeight: toRem(130),
  }
}
