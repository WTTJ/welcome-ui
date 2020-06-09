import { hexToRGB } from '@welcome-ui/utils'

export const getPaginations = ({ colors, fontSizes, fontWeights, toRem }) => ({
  default: {
    color: colors.dark[900],
    'font-weight': fontWeights.bold,
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': '50%',
    width: toRem(30),
    height: toRem(30),
    '&:hover, &:focus': {
      'background-color': `rgba(${hexToRGB(colors.dark[900])}, 0.1)`
    }
  },
  active: {
    color: colors.light[900],
    'background-color': colors.primary[500],
    'border-color': colors.primary[500],
    '&:hover, &:focus': {
      color: colors.light[900],
      'border-color': colors.primary[500],
      'background-color': colors.primary[500]
    }
  },
  number: {
    'font-size': fontSizes.body3
  },
  dots: {
    color: colors.nude[600],
    'font-size': fontSizes.body3,
    'border-color': 'transparent',
    '&:hover, &:focus': {
      border: 'none'
    }
  }
})
