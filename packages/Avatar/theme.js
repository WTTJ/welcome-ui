export const getAvatars = theme => {
  const { colors, fontWeights, toRem } = theme

  return {
    sizes: {
      sm: toRem(20),
      md: toRem(30),
      lg: toRem(40),
      xl: toRem(50),
      xxl: toRem(60)
    },
    text: {
      color: colors.light[900],
      fontWeight: fontWeights.bold
    }
  }
}
