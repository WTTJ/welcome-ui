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
        backgroundColor: colors.nude[200],
        color: colors.dark[900]
      },
      '&:focus': {
        backgroundColor: colors.nude[200],
        color: colors.dark[900]
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors.nude[500],
        cursor: 'not-allowed'
      }
    },
    separator: {
      backgroundColor: borderColor
    }
  }
}
