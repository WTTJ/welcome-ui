export const getBreadcrumbs = theme => {
  const { colors, fontSizes, fontWeights, space } = theme

  return {
    list: {
      fontSize: fontSizes.body3,
      fontWeight: fontWeights.medium
    },
    item: {
      default: {
        color: 'inherit',
        textDecoration: 'none',
        transition: fontWeights.medium,
        padding: `${space.sm} 0`
      },
      hover: {
        color: colors.primary[200]
      },
      active: {
        color: colors.primary[500]
      }
    },
    separator: {
      padding: `0 ${space.sm}`
    }
  }
}
