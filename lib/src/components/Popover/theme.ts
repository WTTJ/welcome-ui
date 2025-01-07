import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemePopovers = {
  content: CSSObject
  default: CSSObject
  title: CSSObject
}

export const getPopovers = (theme: ThemeValues): ThemePopovers => {
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
