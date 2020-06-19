export const getHints = theme => {
  const { colors, fontSizes, fontWeights } = theme

  return {
    color: colors.light[500],
    fontSize: fontSizes.body4,
    fontWeight: fontWeights.regular
  }
}
