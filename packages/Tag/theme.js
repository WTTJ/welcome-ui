import { hexToRGBA } from '@welcome-ui/utils'

export const getTags = theme => {
  const { borderWidths, colors, fontSizes, fontWeights, space, toRem } = theme

  const sizes = {
    sm: toRem(22),
    md: toRem(28),
    lg: toRem(34)
  }

  const border = {
    'border-width': borderWidths.sm,
    'border-style': 'solid'
  }

  return {
    default: {
      'font-weight': fontWeights.medium,
      color: colors.light[900]
    },
    variants: {
      default: {
        'background-color': colors.nude[200],
        color: colors.light[100],
        'border-color': hexToRGBA(colors.dark[900], 0.1),
        ...border
      },
      primary: { 'background-color': colors.primary[500], color: colors.dark[900] },
      secondary: {
        'background-color': colors.sub[4],
        color: colors.light[900],
        'border-color': hexToRGBA(colors.dark[900], 0.1),
        ...border
      },
      dark: { 'background-color': colors.dark[900] },
      success: {
        'background-color': colors.success[100],
        color: colors.success[500],
        'border-color': colors.success[200],
        ...border
      },
      error: {
        'background-color': colors.danger[100],
        color: colors.danger[700],
        'border-color': colors.danger[500],
        ...border
      },
      warning: {
        'background-color': colors.warning[100],
        color: colors.warning[700],
        'border-color': colors.warning[500],
        ...border
      },
      info: {
        'background-color': colors.info[100],
        color: colors.info[500],
        'border-color': colors.info[200],
        ...border
      },
      1: { 'background-color': colors.sub[1] },
      2: { 'background-color': colors.sub[2] },
      3: { 'background-color': colors.sub[3] },
      4: { 'background-color': colors.sub[4] },
      5: { 'background-color': colors.sub[5] },
      6: { 'background-color': colors.sub[6] }
    },
    sizes: {
      sm: {
        padding: `0 ${space.xxs}`,
        height: sizes.sm,
        'font-size': fontSizes.meta2
      },
      md: {
        padding: `0 ${space.xs}`,
        height: sizes.md,
        'font-size': fontSizes.meta1
      },
      lg: {
        padding: `0 ${space.sm}`,
        height: sizes.lg
      }
    },
    shape: {
      sm: {
        width: sizes.sm,
        height: sizes.sm
      },
      md: {
        width: sizes.md,
        height: sizes.md
      },
      lg: {
        width: sizes.lg,
        height: sizes.lg
      }
    }
  }
}
