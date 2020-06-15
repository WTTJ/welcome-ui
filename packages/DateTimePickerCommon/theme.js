export const getDateTimePickerCommon = theme => {
  const { borderWidths, colors, fontWeights } = theme

  return {
    item: {
      selected: {
        color: colors.light[900],
        fontWeight: fontWeights.bold,
        backgroundColor: colors.primary[500],
        borderColor: colors.primary[500]
      },
      today: {
        borderWidth: borderWidths.sm,
        borderColor: colors.dark[900],
        borderStyle: 'solid'
      }
    }
  }
}
