import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type Variant = 'default' | 'primary'
type Size = 'sm' | 'md'

export type ThemeBadges = {
  default: CSSObject
  variants: Record<Variant, CSSObject>
  disabled: Record<Variant, CSSObject>
  sizes: Record<Size, CSSObject>
  singleDigit: Record<Size, CSSObject>
}

export const getBadges = (theme: WuiTheme): ThemeBadges => {
  const { colors, fontSizes, fontWeights, space, toRem } = theme

  const sizes = {
    sm: toRem(16),
    md: toRem(20),
  }

  return {
    default: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.medium,
    },
    variants: {
      default: {
        color: colors.nude[700],
        backgroundColor: colors.nude[200],
      },
      primary: {
        backgroundColor: colors.primary[500],
        color: colors.dark[900],
      },
    },
    disabled: {
      default: {
        backgroundColor: colors.nude[100],
        color: colors.nude[400],
      },
      primary: {
        backgroundColor: colors.primary[600],
        color: colors.primary[800],
      },
    },
    sizes: {
      sm: {
        padding: space.xxs,
        height: sizes.sm,
      },
      md: {
        padding: space.xs,
        height: sizes.md,
      },
    },
    singleDigit: {
      sm: {
        width: sizes.sm,
      },
      md: {
        width: sizes.md,
      },
    },
  }
}
