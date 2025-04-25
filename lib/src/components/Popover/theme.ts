import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemePopovers = {
  content: CSSObject
  default: CSSObject
  title: CSSObject
}

export const getPopovers = (theme: ThemeValues): ThemePopovers => {
  const { borderWidths, colors, space, texts, toRem } = theme

  return {
    content: {
      display: 'block',
      padding: space.md,
    },
    default: {
      ...texts.sm,
      backgroundColor: colors['neutral-90'],
      color: colors['neutral-10'],
      maxWidth: toRem(700),
      zIndex: 1,
    },
    title: {
      ...texts.h6,
      borderBottomColor: colors['neutral-70'],
      borderBottomStyle: 'solid',
      borderBottomWidth: borderWidths.sm,
      color: colors['neutral-10'],
      padding: `${space.md} ${space.md} ${space.xs}`,
    },
  }
}
