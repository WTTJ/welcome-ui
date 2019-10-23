export const getAlerts = theme => {
  const { colors, fontSizes, radii, space } = theme

  return {
    default: {
      'font-size': fontSizes.body3,
      'border-radius': radii.md,
      padding: space.lg
    },
    error: {
      'background-color': colors.danger[100],
      color: colors.danger[500]
    },
    warning: {
      'background-color': colors.warning[100],
      color: colors.warning[500]
    },
    info: {
      'background-color': colors.info[100],
      color: colors.info[500]
    },
    success: {
      'background-color': colors.success[100],
      color: colors.success[500]
    }
  }
}
