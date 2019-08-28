export const getTabs = theme => {
  const { borderWidths, colors, fontSizes, fontWeights, space } = theme

  return {
    tabsBorder: {
      bottom: borderWidths.sm,
      width: '100%',
      height: borderWidths.sm,
      'background-color': colors.nude[200]
    },
    item: {
      default: {
        color: colors.nude[600],
        'font-size': fontSizes.body2,
        'font-weight': fontWeights.medium
      },
      active: {
        color: colors.dark[700]
      },
      focus: {
        color: colors.nude[800]
      },
      disabled: {
        color: colors.nude[400]
      }
    },
    panel: {
      'margin-top': space.xl
    },
    activeBar: {
      bottom: 0,
      background: colors.primary[500],
      height: '3px',
      'border-radius': '3px'
    }
  }
}
