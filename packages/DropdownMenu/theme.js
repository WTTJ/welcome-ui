export const getDropdownMenu = theme => {
  const { colors, fontSizes, space, toRem } = theme
  const borderColor = colors.nude[200]

  return {
    inner: {
      'font-size': fontSizes.body3,
      'min-width': toRem(130)
    },
    item: {
      padding: `${space.sm} ${space.md}`,
      'background-color': 'transparent',
      color: colors.nude[800],
      '&:hover': {
        'background-color': colors.primary[100]
      },
      '&:focus': {
        'background-color': colors.primary[100]
      },
      '&[disabled]': {
        'background-color': 'transparent',
        color: colors.nude[600],
        cursor: 'not-allowed'
      }
    },
    separator: {
      'background-color': borderColor
    }
  }
}
