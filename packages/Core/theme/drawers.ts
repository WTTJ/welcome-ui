import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

type Size = 'sm' | 'md' | 'lg'

export type ThemeDrawers = {
  backdrop: CSSObject
  default: CSSObject
  closeButton: CSSObject
  title: CSSObject
  content: CSSObject
  footer: CSSObject
  sizes: {
    horizontal: Record<Size, Record<'width', string>>
    vertical: Record<Size, Record<'height', string>>
  }
}

export const getDrawers = (theme: WuiTheme): ThemeDrawers => {
  const { colors, space, texts, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    default: {
      zIndex: 999,
    },
    closeButton: {
      top: `${space.xl}`,
      right: `${space.xl}`,
    },
    title: {
      margin: 0,
      padding: `${space['3xl']} ${space['5xl']} ${space['3xl']} ${space['3xl']}`,
      ...texts.h3,
    },
    content: {
      padding: `${space['3xl']}`,
    },
    footer: {
      padding: `${space['3xl']}`,
    },
    sizes: {
      horizontal: {
        sm: { width: toRem(400) },
        md: { width: toRem(550) },
        lg: { width: toRem(680) },
      },
      vertical: {
        sm: { height: toRem(400) },
        md: { height: toRem(550) },
        lg: { height: toRem(680) },
      },
    },
  }
}
