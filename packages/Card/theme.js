export const getCards = theme => {
  const { radii } = theme
  return {
    default: {
      overflow: 'hidden'
    },
    cover: {
      borderTopLeftRadius: radii.sm,
      borderTopRightRadius: radii.sm
    }
  }
}
