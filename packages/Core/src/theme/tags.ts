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
  variants: Record<Variant, CSSObject>
  hover: Record<Variant, CSSObject>
  sizes: Record<Size, CSSObject>
  icon: Record<Size, string>
  shape: Record<Size, CSSObject>
}

export const getTags = (theme: WuiTheme): ThemeTags => {
  const { borderWidths, colors, fontSizes, fontWeights, space, toRem } = theme

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
    color: colors.white,
  })

  return {
    default: {
      fontWeight: fontWeights.medium,
      backgroundColor: colors['neutral-white'],
      color: colors['nude-80'],
    },
    variants: {
      default: {
        backgroundColor: colors['nude-30'],
        borderColor: colors['nude-40'],
        ...border,
      },
      primary: { ...withoutVisibleBorder(colors['primary-40']), color: colors['neutral-black'] },
      secondary: {
        backgroundColor: colors['secondary-green'],
        color: colors['neutral-black'],
        borderColor: colors['dark-100'],
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
        backgroundColor: colors['info-10'],
        color: colors['info-50'],
        borderColor: colors['info-30'],
        ...border,
      },
      1: { ...withoutVisibleBorder(colors['secondary-blue']), color: colors['neutral-black'] },
      2: { ...withoutVisibleBorder(colors['secondary-blue']), color: colors['neutral-white'] },
      3: { ...withoutVisibleBorder(colors['secondary-red']), color: colors['neutral-white'] },
      4: { ...withoutVisibleBorder(colors['secondary-red']), color: colors['neutral-black'] },
      5: { ...withoutVisibleBorder(colors['secondary-green']), color: colors['neutral-black'] },
      6: { ...withoutVisibleBorder(colors['secondary-green']), color: colors['neutral-white'] },
      7: { ...withoutVisibleBorder(colors['secondary-purple']), color: colors['neutral-black'] },
    },
    hover: {
      default: {
        borderColor: colors['nude-60'],
      },
      primary: {},
      secondary: {
        borderColor: colors['dark-400'],
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
        borderColor: colors['info-50'],
      },
      1: {
        borderColor: colors['dark-200'],
      },
      2: {
        borderColor: colors['dark-200'],
      },
      3: {
        borderColor: colors['dark-200'],
      },
      4: {
        borderColor: colors['dark-200'],
      },
      5: {
        borderColor: colors['dark-200'],
      },
      6: {
        borderColor: colors['dark-200'],
      },
      7: {
        borderColor: colors['dark-200'],
      },
    },
    sizes: {
      xs: {
        padding: `${space.xxs} ${space.xs}`,
        height: sizes.xs,
        fontSize: fontSizes.xs,
        gap: space.xs,
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
