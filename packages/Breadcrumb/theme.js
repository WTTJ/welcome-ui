export const getBreadcrumbs = theme => {
  const { borderWidths, colors, fontSizes, fontWeights, space } = theme

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
        transition: fontWeights.medium,
        color: colors.light[100],
        borderBottom: `${borderWidths.sm} solid transparent`
      },
      hover: {
        color: colors.dark[900],
        borderBottomColor: colors.underline
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
