import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

type Sizes = 'sm' | 'md' | 'lg' | 'auto'

export type ThemeModals = {
  backdrop: CSSObject
  default: CSSObject
  footer: CSSObject
  title: CSSObject
  gutter: string
  sizes: Record<Sizes, { width?: string }>
  cover: Record<string, unknown>
}

export const getModals = (theme: WuiTheme): ThemeModals => {
  const { borderWidths, colors, space, texts, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    default: {
      zIndex: 999,
    },
    footer: {
      borderTop: `${borderWidths.sm} solid ${colors.light[800]}`,
      padding: `${space.lg} ${space.xxl}`,
    },
    title: {
      borderBottom: `${borderWidths.sm} solid ${colors.light[800]}`,
      padding: `${space.lg} ${space.xxl}`,
      ...texts.h4,
      /** space of close button */
      paddingRight: space['5xl'],
    },
    gutter: toRem(32),
    sizes: {
      sm: {
        width: toRem(450),
      },
      md: {
        width: toRem(600),
      },
      lg: {
        width: toRem(730),
      },
      auto: {},
    },
    cover: {},
  }
}
