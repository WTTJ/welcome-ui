import { WuiTheme } from './types'

export type ThemeAccordions = {
  padding: string
  wrapper: {
    backgroundColor: string
    border: string
  }
  icon: {
    color: string
  }
  content: {
    color: string
    fontSize: string
  }
  title: {
    color: string
    fontSize: string
    fontWeight: string
  }
}

export const getAccordions = (theme: WuiTheme): ThemeAccordions => {
  const { borderWidths, colors, fontSizes, fontWeights, toRem } = theme

  return {
    padding: toRem(20),
    wrapper: {
      backgroundColor: colors.light[900],
      border: `${borderWidths.sm} solid ${colors.light[800]}`
    },
    icon: {
      color: colors.dark[900]
    },
    content: {
      color: colors.dark[200],
      fontSize: fontSizes.body3
    },
    title: {
      color: colors.dark[900],
      fontSize: fontSizes.h5,
      fontWeight: fontWeights.bold
    }
  }
}
