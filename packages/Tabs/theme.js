export const getTabs = theme => {
  const { borderWidths, colors, fontSizes, fontWeights, space } = theme

  return {
    tabsBorder: {
      boxShadow: `inset 0 -${borderWidths.sm} 0 ${colors.light[800]}`
    },
    item: {
      default: {
        color: colors.light[100],
        fontWeight: fontWeights.medium,
        fontSize: fontSizes.body2,
        textDecoration: 'none'
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
      marginTop: space.xl,
      '&:focus': {
        outline: 'none'
      }
    },
    activeBar: {
      bottom: 0,
      background: colors.primary[500],
      height: borderWidths.lg
    }
  }
}
