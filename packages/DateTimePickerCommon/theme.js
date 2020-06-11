export const getDateTimePickerCommon = theme => {
  const { colors, fontWeights } = theme

  return {
    item: {
      selected: {
        color: colors.light[900],
        fontWeight: fontWeights.bold,
        backgroundColor: colors.primary[500]
      }
    }
  }
}
