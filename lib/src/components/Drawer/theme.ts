import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemeDrawers = {
  backdrop: CSSObject
  closeButton: CSSObject
  content: CSSObject
  default: CSSObject
  footer: CSSObject
  sizes: {
    horizontal: Record<Size, Record<'width', string>>
    vertical: Record<Size, Record<'height', string>>
  }
  title: CSSObject
}

// eslint-disable-next-line perfectionist/sort-union-types
type Size = 'sm' | 'md' | 'lg'

export const getDrawers = (theme: ThemeValues): ThemeDrawers => {
  const { colors, space, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    closeButton: {},
    content: {
      padding: `${space['xl']}`,
    },
    default: {
      zIndex: 999,
    },
    footer: {
      backgroundColor: colors['neutral-10'],
      padding: `${space['xl']}`,
    },
    sizes: {
      horizontal: {
        lg: { width: toRem(680) },
        md: { width: toRem(550) },
        sm: { width: toRem(400) },
      },
      vertical: {
        lg: { height: toRem(680) },
        md: { height: toRem(550) },
        sm: { height: toRem(400) },
      },
    },
    title: {
      backgroundColor: colors['neutral-10'],
      margin: 0,
      padding: `${space['xl']} ${space['5xl']} ${space['xl']} ${space['xl']}`,
    },
  }
}
