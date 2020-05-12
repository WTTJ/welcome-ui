export const getSwipers = theme => {
  const { colors } = theme

  return {
    navigationActiveBullet: {
      'background-color': colors.primary[500]
    },
    navigationBullet: {
      'background-color': colors.nude[500]
    }
  }
}
