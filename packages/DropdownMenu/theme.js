export const getDropdownMenu = theme => {
  const { colors, fontSizes, space, toRem } = theme
  const borderColor = colors.nude[200]

  return {
    inner: {
      fontSize: fontSizes.body3,
      minWidth: toRem(130)
    },
    item: {
      padding: `${space.sm} ${space.md}`,
      backgroundColor: 'transparent',
      color: colors.nude[800],
      '&:hover': {
        backgroundColor: colors.primary[100]
      },
      '&:focus': {
        backgroundColor: colors.primary[100]
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors.nude[600],
        cursor: 'not-allowed'
      }
    },
    separator: {
      backgroundColor: borderColor
    }
  }
}
