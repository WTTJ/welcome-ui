export const getDropdownMenu = theme => {
  const { borderWidths, colors, fontSizes, radii, shadows, space, toRem } = theme
  const borderColor = colors.nude[200]

  return {
    inner: {
      'background-color': colors.light[100],
      'border-style': 'solid',
      'border-color': borderColor,
      'border-radius': radii.md,
      'border-width': borderWidths.sm,
      'box-shadow': shadows.sm,
      'font-size': fontSizes.body3,
      margin: `${space.xs} 0`,
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
