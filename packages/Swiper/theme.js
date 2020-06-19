export const getSwipers = theme => {
  const { colors } = theme

  return {
    navigation: {
      bullet: {
        active: { backgroundColor: colors.primary[500] },
        default: { backgroundColor: colors.nude[500] }
      }
    }
  }
}
