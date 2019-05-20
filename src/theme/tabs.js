export const getTabs = theme => {
  const { borderWidths, colors, fontSizes, fontWeights } = theme

  return {
    tabs: {
      'border-style': 'solid',
      'border-color': colors.nude[200],
      'border-bottom-width': borderWidths.sm
    },
    item: {
      default: {
        color: colors.nude[600],
        'font-size': fontSizes.body2,
        'font-weight': fontWeights.medium
      },
      active: {
        color: colors.dark[700],
        'font-weight': fontWeights.bold
      },
      focus: {
        color: colors.nude[800]
      }
    },
    activeBar: {
      background: colors.primary[500],
      height: '3px',
      'border-radius': '3px'
    }
  }
}
