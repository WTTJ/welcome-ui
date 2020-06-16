import { hexToRGB } from '@welcome-ui/utils'

export const getPaginations = theme => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, toRem } = theme

  return {
    default: {
      color: colors.dark[900],
      fontWeight: fontWeights.bold,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      borderRadius: '50%',
      width: toRem(30),
      height: toRem(30),
      '&:hover, &:focus': {
        backgroundColor: `rgba(${hexToRGB(colors.dark[900])}, 0.1)`
      },
      '&:focus': focus(colors.dark[900])
    },
    active: {
      color: colors.light[900],
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500],
      '&:hover, &:focus': {
        color: colors.light[900],
        borderColor: colors.primary[500],
        backgroundColor: colors.primary[500]
      },
      '&:focus': focus()
    },
    number: {
      fontSize: fontSizes.body3
    },
    dots: {
      color: colors.nude[600],
      fontSize: fontSizes.body3,
      borderColor: 'transparent',
      '&:hover, &:focus': {
        border: 'none'
      }
    }
  }
}
