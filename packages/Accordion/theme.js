export const getAccordions = theme => {
  const { colors, fontSizes, fontWeights, radii, toRem } = theme

  return {
    padding: toRem(20),
    wrapper: {
      'background-color': colors.light[500],
      'border-radius': radii.md
    },
    icon: {
      color: colors.nude[600]
    },
    content: {
      'font-size': fontSizes.body2
    },
    title: {
      color: colors.secondary[500],
      'font-weight': fontWeights.medium
    }
  }
}
