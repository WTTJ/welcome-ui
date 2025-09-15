import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

import type { ThemeSecondaryColors } from '../../oldTheme/colors'

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'xs' | 'sm' | 'md'
export type ThemeTags = {
  default: CSSObject
  hover: Record<Variant, CSSObject>
  icon: Record<Size, string>
  shape: Record<Size, CSSObject>
  sizes: Record<Size, CSSObject>
  variants: Record<Variant, CSSObject>
}

export type Variant =
  | 'ai'
  | 'danger'
  | 'default'
  | 'info'
  | 'primary'
  | 'success'
  | 'warning'
  | ThemeSecondaryColors

export const getTags = (theme: ThemeValues): ThemeTags => {
  const { colors, fontSizes, fontWeights, radii, space, toRem } = theme

  const sizes = {
    md: toRem(32),
    sm: toRem(24),
    xs: toRem(20),
  }

  const getState = (color: 'blue' | 'green' | 'orange' | 'red') => ({
    backgroundColor: colors[`${color}-10`],
    color: colors[`${color}-90`],
  })

  const getStateHover = (color: 'blue' | 'green' | 'orange' | 'red') => ({
    backgroundColor: colors[`${color}-20`],
  })

  const getSecondary = (color: ThemeSecondaryColors) => {
    const isGreen = color === 'green'

    return {
      backgroundColor: colors[`${color}-${isGreen ? '30' : '40'}`],
      color: colors['neutral-90'],
    }
  }

  const getSecondaryHover = (color: ThemeSecondaryColors) => {
    const isGreen = color === 'green'

    return {
      backgroundColor: colors[`${color}-${isGreen ? '40' : '50'}`],
    }
  }

  return {
    default: {
      borderRadius: radii.md,
      fontWeight: fontWeights.medium,
    },
    hover: {
      ai: {
        backgroundColor: colors['violet-30'],
      },
      blue: getSecondaryHover('blue'),
      danger: getStateHover('red'),
      default: {
        backgroundColor: colors['beige-30'],
      },
      green: getSecondaryHover('green'),
      info: getStateHover('blue'),
      orange: getSecondaryHover('orange'),
      pink: getSecondaryHover('pink'),
      primary: {
        backgroundColor: colors['primary-50'],
      },
      success: getStateHover('green'),
      teal: getSecondaryHover('teal'),
      violet: getSecondaryHover('violet'),
      warning: getStateHover('orange'),
    },
    icon: {
      md: toRem(16),
      sm: toRem(12),
      xs: toRem(12),
    },
    shape: {
      md: {
        height: sizes.md,
        width: sizes.md,
      },
      sm: {
        height: sizes.sm,
        width: sizes.sm,
      },
      xs: {
        height: sizes.xs,
        width: sizes.xs,
      },
    },
    sizes: {
      md: {
        fontSize: fontSizes.sm,
        gap: space.sm,
        height: sizes.md,
        padding: `${space.xs} ${space.sm}`,
      },
      sm: {
        fontSize: fontSizes.xs,
        gap: space.xs,
        height: sizes.sm,
        padding: `${space.xs} ${space.sm}`,
      },
      xs: {
        borderRadius: radii.sm,
        fontSize: fontSizes.xs,
        gap: space.xs,
        height: sizes.xs,
        padding: `${space.xxs} ${space.xs}`,
      },
    },
    variants: {
      ai: {
        backgroundColor: colors['violet-20'],
        color: colors['violet-90'],
      },
      blue: getSecondary('blue'),
      danger: getState('red'),
      default: {
        backgroundColor: colors['beige-20'],
        color: colors['beige-90'],
      },
      green: getSecondary('green'),
      info: getState('blue'),
      orange: getSecondary('orange'),
      pink: getSecondary('pink'),
      primary: {
        backgroundColor: colors['primary-40'],
        color: theme.colors['neutral-90'],
      },
      success: getState('green'),
      teal: getSecondary('teal'),
      violet: getSecondary('violet'),
      warning: getState('orange'),
    },
  }
}
