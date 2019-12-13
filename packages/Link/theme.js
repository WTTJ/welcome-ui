export const getLinks = theme => {
  const { colors, underline } = theme
  return {
    default: {
      color: colors.dark[500]
    },
    primary: underline,
    secondary: {}
  }
}
