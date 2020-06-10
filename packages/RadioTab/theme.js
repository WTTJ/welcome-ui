export const getRadioTabs = theme => {
  const { colors, defaultFields, shadows } = theme

  return {
    default: defaultFields.default,
    checked: {
      color: colors.dark[200],
      'background-color': colors.nude[200],
      'border-color': colors.primary[500],
      '&:hover': {
        'box-shadow': 'none'
      }
    },
    hover: {
      'background-color': colors.nude[200],
      'box-shadow': shadows.sm
    }
  }
}
