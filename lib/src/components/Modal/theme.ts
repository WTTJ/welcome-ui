import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type Size = 'auto' | 'lg' | 'md' | 'sm' | 'xs'

export type ThemeModals = {
  backdrop: CSSObject
  body: CSSObject
  cover: Record<string, unknown>
  default: CSSObject
  footer: CSSObject
  gutter: string
  header: CSSObject
  sizes: Record<Size, { width?: string }>
}

export const getModals = (theme: ThemeValues): ThemeModals => {
  const { colors, radii, space, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999,
    },
    body: {
      color: colors['neutral-90'],
      paddingBottom: space.xxl,
      paddingLeft: space.xxl,
      paddingRight: space['3xl'],
    },
    cover: {},
    default: {
      borderRadius: radii.md,
      zIndex: 999,
    },
    footer: {
      backgroundColor: colors['neutral-10'],
      borderBottomLeftRadius: radii.md,
      borderBottomRightRadius: radii.md,
      borderTop: `solid ${colors['neutral-30']}`,
      children: {
        paddingBottom: space.xl,
        paddingLeft: space.xxl,
        paddingRight: space.xxl,
        paddingTop: space.lg,
      },
      information: {
        backgroundColor: colors['beige-20'],
        paddingBottom: space.xxl,
        paddingLeft: space.xxl,
        paddingRight: space.xxl,
        paddingTop: space.xl,
      },
    },
    gutter: toRem(32),
    header: {
      backgroundColor: colors['neutral-10'],
      borderTopLeftRadius: radii.md,
      borderTopRightRadius: radii.md,
      paddingBottom: space.xxl,
      paddingLeft: space.xxl,
      paddingRight: space['3xl'],
      paddingTop: space.xxl,
      subtitle: {
        color: colors['neutral-70'],
        margin: 0,
        variant: 'sm',
      },
    },
    sizes: {
      auto: {},
      lg: {
        width: toRem(730),
      },
      md: {
        width: toRem(600),
      },
      sm: {
        width: toRem(450),
      },
      xs: {
        width: toRem(320),
      },
    },
  }
}
