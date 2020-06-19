export const getRadioTabs = theme => {
  const { colors } = theme

  return {
    default: {
      '&:hover': {
        backgroundColor: colors.nude[200]
      }
    },
    checked: {
      backgroundColor: colors.primary[500],
      color: colors.light[900],
      borderColor: colors.primary[500],
      '&:hover': {
        backgroundColor: colors.primary[200]
      }
    }
  }
}
