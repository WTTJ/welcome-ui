import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemePopovers = {
  content: CSSObject
  default: CSSObject
  title: CSSObject
}

export const getPopovers = (theme: WuiTheme): ThemePopovers => {
  const { borderWidths, colors, space, texts, toRem } = theme

  return {
    default: {
      ...texts.sm,
      backgroundColor: colors['neutral-90'],
      color: colors['neutral-10'],
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
      color: colors['neutral-10'],
      borderBottomColor: colors['neutral-70'],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid',
    },
  }
}
