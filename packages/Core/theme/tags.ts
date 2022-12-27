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
      backgroundColor: colors['light-900'],
      color: colors['nude-900'],
    },
    variants: {
      default: {
        backgroundColor: colors['nude-200'],
        borderColor: colors['nude-400'],
        ...border,
      },
      primary: { ...withoutVisibleBorder(colors['primary-500']), color: colors['dark-900'] },
      secondary: {
        backgroundColor: colors['sub-5'],
        color: colors['dark-900'],
        borderColor: colors['dark-100'],
        ...border,
      },
      success: {
        backgroundColor: colors['success-100'],
        color: colors['success-500'],
        borderColor: colors['success-200'],
        ...border,
      },
      error: {
        backgroundColor: colors['danger-100'],
        color: colors['danger-500'],
        borderColor: colors['danger-200'],
        ...border,
      },
      warning: {
        backgroundColor: colors['warning-100'],
        color: colors['warning-500'],
        borderColor: colors['warning-200'],
        ...border,
      },
      info: {
        backgroundColor: colors['info-100'],
        color: colors['info-500'],
        borderColor: colors['info-300'],
        ...border,
      },
      1: { ...withoutVisibleBorder(colors['sub-1']), color: colors['dark-900'] },
      2: { ...withoutVisibleBorder(colors['sub-2']), color: colors['light-900'] },
      3: { ...withoutVisibleBorder(colors['sub-3']), color: colors['light-900'] },
      4: { ...withoutVisibleBorder(colors['sub-4']), color: colors['dark-900'] },
      5: { ...withoutVisibleBorder(colors['sub-5']), color: colors['dark-900'] },
      6: { ...withoutVisibleBorder(colors['sub-6']), color: colors['light-900'] },
      7: { ...withoutVisibleBorder(colors['sub-7']), color: colors['dark-900'] },
    },
    hover: {
      default: {
        borderColor: colors['nude-600'],
      },
      primary: {},
      secondary: {
        borderColor: colors['dark-400'],
      },
      success: {
        borderColor: colors['success-500'],
      },
      error: {
        borderColor: colors['danger-500'],
      },
      warning: {
        borderColor: colors['warning-500'],
      },
      info: {
        borderColor: colors['info-500'],
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
