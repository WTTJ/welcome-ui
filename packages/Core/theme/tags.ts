import { hexToRGBA } from '@welcome-ui/utils'
import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'dark'
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

type Size = 'xs' | 'sm' | 'md' | 'lg'

export type ThemeTags = {
  default: CSSObject
  variants: Record<Variant, CSSObject>
  sizes: Record<Size, CSSObject>
  shape: Record<Size, CSSObject>
}

export const getTags = (theme: WuiTheme): ThemeTags => {
  const { borderWidths, colors, fontSizes, fontWeights, space, toRem } = theme

  const sizes = {
    xs: toRem(17),
    sm: toRem(22),
    md: toRem(28),
    lg: toRem(34),
  }

  const border = {
    borderWidth: borderWidths.sm,
    borderStyle: 'solid',
  }

  const withoutVisibleBorder = (color: string) => ({
    ...border,
    borderColor: color,
    backgroundColor: color,
  })

  return {
    default: {
      fontWeight: fontWeights.medium,
      backgroundColor: colors.light[900],
      color: colors.light[900],
    },
    variants: {
      default: {
        backgroundColor: colors.nude[200],
        color: colors.light[100],
        borderColor: hexToRGBA(colors.dark[900], 0.1),
        ...border,
      },
      primary: { ...withoutVisibleBorder(colors.primary[500]), color: colors.light[900] },
      secondary: {
        backgroundColor: colors.sub[4],
        color: colors.light[900],
        borderColor: hexToRGBA(colors.dark[900], 0.1),
        ...border,
      },
      dark: {
        backgroundColor: colors.dark[700],
        color: colors.light[700],
        borderColor: colors.dark[500],
        ...border,
      },
      success: {
        backgroundColor: colors.success[100],
        color: colors.success[700],
        borderColor: colors.success[500],
        ...border,
      },
      error: {
        backgroundColor: colors.danger[100],
        color: colors.danger[700],
        borderColor: colors.danger[500],
        ...border,
      },
      warning: {
        backgroundColor: colors.warning[100],
        color: colors.warning[700],
        borderColor: colors.warning[500],
        ...border,
      },
      info: {
        backgroundColor: colors.info[100],
        color: colors.info[700],
        borderColor: colors.info[500],
        ...border,
      },
      1: { ...withoutVisibleBorder(colors.sub[1]) },
      2: { ...withoutVisibleBorder(colors.sub[2]) },
      3: { ...withoutVisibleBorder(colors.sub[3]) },
      4: { ...withoutVisibleBorder(colors.sub[4]) },
      5: { ...withoutVisibleBorder(colors.sub[5]) },
      6: { ...withoutVisibleBorder(colors.sub[6]) },
      7: { ...withoutVisibleBorder(colors.sub[7]) },
    },
    sizes: {
      xs: {
        padding: `0 ${space.xxs}`,
        height: sizes.xs,
        fontSize: toRem(10),
      },
      sm: {
        padding: `0 ${space.xxs}`,
        height: sizes.sm,
        fontSize: fontSizes.meta2,
      },
      md: {
        padding: `0 ${space.xs}`,
        height: sizes.md,
        fontSize: fontSizes.meta1,
      },
      lg: {
        padding: `0 ${space.sm}`,
        height: sizes.lg,
      },
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
      lg: {
        width: sizes.lg,
        height: sizes.lg,
      },
    },
  }
}
