import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'

type Size = 'xs' | 'sm' | 'md'

export type ThemeTags = {
  default: CSSObject
  hover: Record<Variant, CSSObject>
  icon: Record<Size, string>
  shape: Record<Size, CSSObject>
  sizes: Record<Size, CSSObject>
  variants: Record<Variant, CSSObject>
}

export const getTags = (theme: WuiTheme): ThemeTags => {
  const { borderWidths, colors, fontSizes, fontWeights, radii, space, toRem } = theme

  const sizes = {
    xs: toRem(20),
    sm: toRem(24),
    md: toRem(32),
  }

  const border = {
    borderWidth: borderWidths.sm,
    borderStyle: 'solid',
  }

  const withoutVisibleBorder = (color: string) => ({
    ...border,
    borderColor: color,
    backgroundColor: color,
    color: colors['neutral-10'],
  })

  return {
    default: {
      fontWeight: fontWeights.medium,
      backgroundColor: colors['neutral-10'],
      color: colors['beige-80'],
      borderRadius: radii.md,
    },
    variants: {
      default: {
        backgroundColor: colors['beige-30'],
        borderColor: colors['beige-40'],
        ...border,
      },
      primary: { ...withoutVisibleBorder(colors['primary-40']), color: colors['neutral-90'] },
      secondary: {
        backgroundColor: colors['secondary-green'],
        color: colors['neutral-90'],
        borderColor: colors['neutral-30'],
        ...border,
      },
      success: {
        backgroundColor: colors['success-10'],
        color: colors['success-50'],
        borderColor: colors['success-20'],
        ...border,
      },
      error: {
        backgroundColor: colors['danger-10'],
        color: colors['danger-50'],
        borderColor: colors['danger-20'],
        ...border,
      },
      warning: {
        backgroundColor: colors['warning-10'],
        color: colors['warning-50'],
        borderColor: colors['warning-20'],
        ...border,
      },
      info: {
        backgroundColor: colors['information-10'],
        color: colors['information-50'],
        borderColor: colors['information-30'],
        ...border,
      },
      1: { ...withoutVisibleBorder(colors['secondary-teal']), color: colors['neutral-90'] },
      2: { ...withoutVisibleBorder(colors['secondary-blue']), color: colors['neutral-10'] },
      3: { ...withoutVisibleBorder(colors['secondary-orange']), color: colors['neutral-10'] },
      4: { ...withoutVisibleBorder(colors['secondary-pink']), color: colors['neutral-90'] },
      5: { ...withoutVisibleBorder(colors['secondary-green']), color: colors['neutral-90'] },
      6: { ...withoutVisibleBorder(colors['secondary-green']), color: colors['neutral-10'] },
      7: { ...withoutVisibleBorder(colors['secondary-violet']), color: colors['neutral-90'] },
    },
    hover: {
      default: {
        borderColor: colors['beige-60'],
      },
      primary: {},
      secondary: {
        borderColor: colors['neutral-50'],
      },
      success: {
        borderColor: colors['success-50'],
      },
      error: {
        borderColor: colors['danger-50'],
      },
      warning: {
        borderColor: colors['warning-50'],
      },
      info: {
        borderColor: colors['information-50'],
      },
      1: {
        borderColor: colors['neutral-30'],
      },
      2: {
        borderColor: colors['neutral-30'],
      },
      3: {
        borderColor: colors['neutral-30'],
      },
      4: {
        borderColor: colors['neutral-30'],
      },
      5: {
        borderColor: colors['neutral-30'],
      },
      6: {
        borderColor: colors['neutral-30'],
      },
      7: {
        borderColor: colors['neutral-30'],
      },
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
