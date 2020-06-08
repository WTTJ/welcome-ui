export const getAccordions = theme => {
  const { colors, fontSizes, fontWeights, toRem } = theme

  return {
    padding: toRem(20),
    wrapper: {
      'background-color': colors.light[900],
      border: `1px solid ${colors.light[800]}`
    },
    icon: {
      color: colors.dark[900]
    },
    content: {
      'font-size': fontSizes.body3
    },
    title: {
      color: colors.dark[900],
      'font-size': fontSizes.h5,
      'font-weight': fontWeights.bold
    }
  }
}
