import { WuiTheme } from './types'

export type ThemeRadios = {
  default: {
    width: string
    height: string
  }
  checked: {
    backgroundColor: string
    borderColor: string
  }
  withHint: {
    default: {
      fontSize: string
      color: string
    }
    hint: {
      marginTop: string
      color: string
    }
  }
}

export const getRadios = (theme: WuiTheme): ThemeRadios => {
  const { colors, fontSizes, space, toRem } = theme

  return {
    default: {
      width: toRem(20),
      height: toRem(20),
    },
    checked: {
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500],
    },
    withHint: {
      default: {
        fontSize: fontSizes.body2,
        color: colors.dark[900],
      },
      hint: {
        marginTop: space.xs,
        color: colors.dark[200],
      },
    },
  }
}
