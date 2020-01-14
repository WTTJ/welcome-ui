export const getCards = theme => {
  const { radii } = theme
  return {
    default: {
      overflow: 'hidden'
    },
    cover: {
      'border-top-left-radius': radii.sm,
      'border-top-right-radius': radii.sm
    }
  }
}
