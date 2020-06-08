export const getAlerts = theme => {
  const { borderWidths, colors, fontSizes, radii, space } = theme

  return {
    default: {
      'font-size': fontSizes.body3,
      'border-width': borderWidths.sm,
      'border-style': 'solid',
      'border-radius': radii.md,
      padding: space.xl
    },
    error: {
      'background-color': colors.danger[100],
      'border-color': colors.danger[500]
    },
    warning: {
      'background-color': colors.warning[100],
      'border-color': colors.warning[500]
    },
    info: {
      'background-color': colors.info[100],
      'border-color': colors.info[500]
    },
    success: {
      'background-color': colors.success[100],
      'border-color': colors.success[500]
    },
    title: {
      error: {
        color: colors.danger[500]
      },
      warning: {
        color: colors.warning[500]
      },
      info: {
        color: colors.info[500]
      },
      success: {
        color: colors.success[500]
      }
    }
  }
}
