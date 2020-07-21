export const getLabels = theme => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors.light[100],
    fontSize: fontSizes.body3,
    fontWeight: fontWeights.medium
  }
}
