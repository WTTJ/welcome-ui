import { hexToRGBA } from '@welcome-ui/utils'

import { WuiTheme } from './types'

type CommonAttributesTag = {
  color?: string
  fontSize?: string
  fontWeight?: string
  letterSpacing?: number
  borderRadius?: string
  backgroundColor?: string
  borderColor?: string
}

type BorderAttributesTag = {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
  backgroundColor?: string
}

type SizeAttributesTag = {
  padding?: string
  height?: string
  fontSize?: string
}

type ShapeAttributesTag = {
  height?: string
  width?: string
}

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

type Size = 'sm' | 'md' | 'lg'

export type ThemeTags = {
  default: CommonAttributesTag
  variants: Record<Variant, CommonAttributesTag & BorderAttributesTag>
  sizes: Record<Size, SizeAttributesTag>
  shape: Record<Size, ShapeAttributesTag>
}

export const getTags = (theme: WuiTheme): ThemeTags => {
  const { borderWidths, colors, fontSizes, fontWeights, space, toRem } = theme

  const sizes = {
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
