export const getRadios = theme => {
  const { colors, fontSizes, space, toRem } = theme

  return {
    default: {
      width: toRem(20),
      height: toRem(20)
    },
    checked: {
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500]
    },
    withHint: {
      default: {
        fontSize: fontSizes.body2,
        color: colors.dark[900]
      },
      hint: {
        marginTop: space.xs,
        color: colors.dark[200]
      }
    }
  }
}
