export const getTabs = theme => {
  const { borderWidths, colors, fontSizes, fontWeights, space } = theme

  return {
    tabsBorder: {
      bottom: borderWidths.sm,
      width: '100%',
      height: borderWidths.sm,
      'background-color': colors.light[800]
    },
    item: {
      default: {
        color: colors.light[100],
        'font-weight': fontWeights.medium,
        'font-size': fontSizes.body1
      },
      active: {
        color: colors.dark[900]
      },
      focus: {
        color: colors.dark[900]
      },
      disabled: {
        color: colors.light[700]
      }
    },
    panel: {
      'margin-top': space.xl,
      '&:focus': {
        outline: 'none'
      }
    },
    activeBar: {
      bottom: '1px',
      background: colors.primary[500],
      height: '1px'
    }
  }
}
