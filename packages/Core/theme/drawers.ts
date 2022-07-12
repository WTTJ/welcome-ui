import { CSSObject } from 'styled-components'

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
  const { colors, spaces, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    default: {
      zIndex: 999,
    },
    closeButton: {
      marginRight: `${spaces.xl}`,
      marginTop: `${spaces.xl}`,
    },
    title: {
      margin: 0,
      backgroundColor: colors['light.900'],
      padding: `${spaces['xl']} ${spaces['5xl']} ${spaces['xl']} ${spaces['xl']}`,
    },
    content: {
      padding: `${spaces['3xl']}`,
    },
    footer: {
      backgroundColor: colors['light.900'],
      padding: `${spaces['xl']}`,
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
