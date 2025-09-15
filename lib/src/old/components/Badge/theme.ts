import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeBadges = {
  default: CSSObject
  disabled: {
    default: CSSObject
    primary: CSSObject
  }
  sizes: {
    md: CSSObject
    sm: CSSObject
  }
  variants: {
    default: CSSObject
    primary: CSSObject
  }
}

export const getBadges = (theme: ThemeValues): ThemeBadges => {
  const { colors, fontWeights, space, texts, toRem } = theme

  return {
    default: {
      ...texts.xs,
      fontWeight: fontWeights.medium,
    },
    disabled: {
      default: {
        backgroundColor: colors['beige-20'],
        color: colors['beige-40'],
      },
      primary: {
        backgroundColor: colors['primary-50'],
        color: colors['primary-80'],
      },
    },
    sizes: {
      md: {
        borderRadius: toRem(14),
        height: toRem(20),
        padding: space.xs,
      },
      sm: {
        borderRadius: toRem(14),
        height: toRem(16),
        padding: space.xxs,
      },
    },
    variants: {
      default: {
        backgroundColor: colors['beige-30'],
        color: colors['beige-70'],
      },
      primary: {
        backgroundColor: colors['primary-40'],
        color: colors['neutral-90'],
      },
    },
  }
}
