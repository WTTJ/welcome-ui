import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

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
    variants: {
      default: {
        color: colors['beige-70'],
        backgroundColor: colors['beige-30'],
      },
      primary: {
        color: colors['neutral-90'],
        backgroundColor: colors['primary-40'],
      },
    },
    disabled: {
      default: {
        color: colors['beige-40'],
        backgroundColor: colors['beige-20'],
      },
      primary: {
        color: colors['primary-80'],
        backgroundColor: colors['primary-50'],
      },
    },
    sizes: {
      sm: {
        padding: space.xxs,
        height: toRem(16),
        borderRadius: toRem(14),
      },
      md: {
        padding: space.xs,
        height: toRem(20),
        borderRadius: toRem(14),
      },
    },
  }
}
