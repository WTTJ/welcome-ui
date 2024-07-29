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
  | 'teal'
  | 'blue'
  | 'red'
  | 'orange'
  | 'green'
  | 'pink'
  | 'purple'

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
    color: colors.black,
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
        backgroundColor: colors['brand-green'],
        color: colors['neutral-black'],
        borderColor: colors['neutral-20'],
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
      teal: { ...withoutVisibleBorder(colors['brand-teal']) },
      blue: { ...withoutVisibleBorder(colors['brand-blue']) },
      red: { ...withoutVisibleBorder(colors['brand-red']) },
      orange: { ...withoutVisibleBorder(colors['brand-orange']) },
      green: { ...withoutVisibleBorder(colors['brand-green']) },
      pink: { ...withoutVisibleBorder(colors['brand-pink']) },
      purple: { ...withoutVisibleBorder(colors['brand-purple']) },
    },
    hover: {
      default: {
        borderColor: colors['nude-60'],
      },
      primary: {},
      secondary: {
        borderColor: colors['neutral-40'],
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
      teal: {
        borderColor: colors['neutral-20'],
      },
      blue: {
        borderColor: colors['neutral-20'],
      },
      red: {
        borderColor: colors['neutral-20'],
      },
      orange: {
        borderColor: colors['neutral-20'],
      },
      green: {
        borderColor: colors['neutral-20'],
      },
      pink: {
        borderColor: colors['neutral-20'],
      },
      purple: {
        borderColor: colors['neutral-20'],
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
