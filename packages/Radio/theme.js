export const getRadios = theme => {
  const { colors, toRem } = theme

  return {
    default: {
      width: toRem(18),
      height: toRem(18)
    },
    checked: {
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500]
    }
  }
}
