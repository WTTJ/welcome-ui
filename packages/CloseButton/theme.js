export const getCloseButton = theme => {
  const { colors, focus } = theme
  return {
    default: {
      backgroundColor: colors.nude[200],
      color: colors.nude[200],
      borderColor: colors.nude[200]
    },
    hover: {
      backgroundColor: colors.nude[100],
      color: colors.nude[100],
      borderColor: colors.nude[100]
    },
    active: {
      backgroundColor: colors.nude[500],
      color: colors.nude[500],
      borderColor: colors.nude[500]
    },
    focus: focus(colors.nude[700])
  }
}
