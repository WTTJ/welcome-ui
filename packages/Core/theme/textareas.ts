import { WuiTheme } from './types'

export type ThemeTextareas = {
  minHeight: string
}

export const getTextareas = (theme: WuiTheme): ThemeTextareas => {
  const { toRem } = theme

  return {
    minHeight: toRem(130),
  }
}
