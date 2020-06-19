export const getCards = theme => {
  const { colors, radii } = theme
  return {
    default: {
      overflow: 'hidden',
      color: colors.dark[200]
    },
    cover: {
      borderTopLeftRadius: radii.sm,
      borderTopRightRadius: radii.sm
    }
  }
}
