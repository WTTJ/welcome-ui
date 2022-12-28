import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemePopovers = {
  default: CSSObject
  light: CSSObject
  content: CSSObject
  title: CSSObject
}

export const getPopovers = (theme: WuiTheme): ThemePopovers => {
  const { borderWidths, colors, space, texts, toRem } = theme

  return {
    default: {
      backgroundColor: colors.black,
      color: colors.white,
      maxWidth: toRem(700),
      zIndex: 1,
    },
    light: {
      backgroundColor: colors.white,
      color: colors.black,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.border,
    },
    content: {
      ...texts.sm,
      padding: space.md,
    },
    title: {
      ...texts.h6,
      padding: space.md,
      color: colors.white,
      borderBottomColor: colors['light-200'],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid',
    },
  }
}
