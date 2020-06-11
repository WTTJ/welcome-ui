export const getAlerts = theme => {
  const { borderWidths, colors, fontSizes, radii, space } = theme

  return {
    default: {
      fontSize: fontSizes.body3,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      borderRadius: radii.md,
      padding: space.xl
    },
    error: {
      backgroundColor: colors.danger[100],
      borderColor: colors.danger[500]
    },
    warning: {
      backgroundColor: colors.warning[100],
      borderColor: colors.warning[500]
    },
    info: {
      backgroundColor: colors.info[100],
      borderColor: colors.info[500]
    },
    success: {
      backgroundColor: colors.success[100],
      borderColor: colors.success[500]
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
