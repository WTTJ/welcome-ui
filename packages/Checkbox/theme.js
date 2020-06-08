export const getCheckboxes = theme => {
  const { colors, toRem } = theme

  return {
    default: {
      width: toRem(20),
      height: toRem(20),
      'flex-shrink': 0
    },
    disabled: {
      'border-color': colors.nude[700]
    },
    checked: {
      'background-color': colors.primary[500],
      'border-color': colors.primary[500],
      color: colors.dark[900]
    }
  }
}
