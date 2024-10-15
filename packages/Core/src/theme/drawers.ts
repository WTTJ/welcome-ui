import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type Size = 'sm' | 'md' | 'lg'

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

export const getDrawers = (theme: WuiTheme): ThemeDrawers => {
  const { colors, space, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    default: {
      zIndex: 999,
    },
    closeButton: {},
    title: {
      margin: 0,
      backgroundColor: colors['light-900'],
      padding: `${space['xl']} ${space['5xl']} ${space['xl']} ${space['xl']}`,
    },
    content: {
      padding: `${space['xl']}`,
    },
    footer: {
      backgroundColor: colors['light-900'],
      padding: `${space['xl']}`,
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
