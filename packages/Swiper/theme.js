export const getSwipers = theme => {
  const { colors } = theme

  return {
    navigation: {
      bullet: {
        active: { 'background-color': colors.primary[500] },
        default: { 'background-color': colors.nude[500] }
      }
    }
  }
}
