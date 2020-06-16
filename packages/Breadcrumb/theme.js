export const getBreadcrumbs = theme => {
  const { colors, fontSizes, fontWeights, space } = theme

  return {
    list: {
      fontSize: fontSizes.body3,
      fontWeight: fontWeights.medium,
      lineHeight: '1.92',
      padding: `${space.sm} 0`
    },
    item: {
      default: {
        textDecoration: 'none',
        color: colors.light[100]
      },
      hover: {
        color: colors.dark[900]
      },
      active: {
        color: colors.dark[900]
      }
    },
    separator: {
      padding: `0 ${space.sm}`
    }
  }
}
