import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'
import { ThemeSecondaryColors } from './colors'

export type Size = 'xs' | 'sm' | 'md'
export type Variant =
  | ThemeSecondaryColors
  | 'default'
  | 'danger'
  | 'info'
  | 'success'
  | 'warning'
  | 'primary'

export type ThemeTags = {
  default: CSSObject
  hover: Record<Variant, CSSObject>
  icon: Record<Size, string>
  shape: Record<Size, CSSObject>
  sizes: Record<Size, CSSObject>
  variants: Record<Variant, CSSObject>
}

export const getTags = (theme: WuiTheme): ThemeTags => {
  const { colors, fontSizes, fontWeights, radii, space, toRem } = theme

  const sizes = {
    xs: toRem(20),
    sm: toRem(24),
    md: toRem(32),
  }

  const getState = (color: 'red' | 'blue' | 'orange' | 'green') => ({
    backgroundColor: colors[`${color}-10`],
    color: colors[`${color}-90`],
  })

  const getStateHover = (color: 'red' | 'blue' | 'orange' | 'green') => ({
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
      fontWeight: fontWeights.medium,
      borderRadius: radii.md,
    },
    variants: {
      default: {
        backgroundColor: colors['beige-20'],
        color: colors['beige-90'],
      },
      primary: {
        color: theme.colors['neutral-90'],
        backgroundColor: colors['primary-40'],
      },
      success: getState('green'),
      danger: getState('red'),
      warning: getState('orange'),
      info: getState('blue'),
      teal: getSecondary('teal'),
      blue: getSecondary('blue'),
      orange: getSecondary('orange'),
      pink: getSecondary('pink'),
      green: getSecondary('green'),
      violet: getSecondary('violet'),
    },
    hover: {
      default: {
        backgroundColor: colors['beige-30'],
      },
      primary: {
        backgroundColor: colors['primary-50'],
      },
      success: getStateHover('green'),
      danger: getStateHover('red'),
      warning: getStateHover('orange'),
      info: getStateHover('blue'),
      teal: getSecondaryHover('teal'),
      blue: getSecondaryHover('blue'),
      orange: getSecondaryHover('orange'),
      pink: getSecondaryHover('pink'),
      green: getSecondaryHover('green'),
      violet: getSecondaryHover('violet'),
    },
    sizes: {
      xs: {
        padding: `${space.xxs} ${space.xs}`,
        height: sizes.xs,
        fontSize: fontSizes.xs,
        gap: space.xs,
        borderRadius: radii.sm,
      },
      sm: {
        padding: `${space.xs} ${space.sm}`,
        height: sizes.sm,
        fontSize: fontSizes.xs,
        gap: space.xs,
      },
      md: {
        padding: `${space.xs} ${space.sm}`,
        height: sizes.md,
        fontSize: fontSizes.sm,
        gap: space.sm,
      },
    },
    icon: {
      xs: toRem(12),
      sm: toRem(12),
      md: toRem(16),
    },
    shape: {
      xs: {
        width: sizes.xs,
        height: sizes.xs,
      },
      sm: {
        width: sizes.sm,
        height: sizes.sm,
      },
      md: {
        width: sizes.md,
        height: sizes.md,
      },
    },
  }
}
