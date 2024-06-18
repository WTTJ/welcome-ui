import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemePopovers = {
  default: CSSObject
  content: CSSObject
  title: CSSObject
}

export const getPopovers = (theme: WuiTheme): ThemePopovers => {
  const { borderWidths, colors, space, texts, toRem } = theme

  return {
    default: {
      ...texts.sm,
      backgroundColor: colors.black,
      color: colors.white,
      maxWidth: toRem(700),
      zIndex: 1,
    },
    content: {
      display: 'block',
      padding: space.md,
    },
    title: {
      ...texts.h6,
      padding: `${space.md} ${space.md} ${space.xs}`,
      color: colors.white,
      borderBottomColor: colors['neutral-60'],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid',
    },
  }
}
