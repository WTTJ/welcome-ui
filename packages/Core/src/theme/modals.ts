import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'auto'

export type ThemeModals = {
  backdrop: CSSObject
  body: CSSObject
  cover: Record<string, unknown>
  default: CSSObject
  footer: CSSObject
  gutter: string
  header: CSSObject
  sizes: Record<Sizes, { width?: string }>
}

export const getModals = (theme: WuiTheme): ThemeModals => {
  const { colors, radii, space, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    default: {
      zIndex: 999,
      borderRadius: radii.xxl,
    },
    header: {
      backgroundColor: colors['neutral-10'],
      paddingTop: space.xxl,
      paddingRight: space['3xl'],
      paddingBottom: space.xxl,
      paddingLeft: space.xxl,
      subtitle: {
        color: colors['neutral-70'],
        variant: 'sm',
        margin: 0,
      },
    },
    body: {
      color: colors['neutral-90'],
      paddingRight: space['3xl'],
      paddingBottom: space.xxl,
      paddingLeft: space.xxl,
    },
    footer: {
      backgroundColor: colors['neutral-10'],
      borderTop: `solid ${colors['neutral-30']}`,
      children: {
        paddingRight: space.xxl,
        paddingLeft: space.xxl,
        paddingTop: space.lg,
        paddingBottom: space.xl,
      },
      information: {
        backgroundColor: colors['beige-20'],
        paddingRight: space.xxl,
        paddingLeft: space.xxl,
        paddingTop: space.xl,
        paddingBottom: space.xxl,
      },
    },
    gutter: toRem(32),
    sizes: {
      xs: {
        width: toRem(320),
      },
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
