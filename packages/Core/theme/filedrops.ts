import { WuiTheme } from './types'

export type ThemeFiledrops = {
  default: {
    borderStyle: string
    minHeight: string
  }
  dragAccept: Record<string, unknown>
  dragReject: Record<string, unknown>
  disabled: Record<string, unknown>
}

export const getFiledrops = (theme: WuiTheme): ThemeFiledrops => {
  const { toRem } = theme

  return {
    default: {
      borderStyle: 'dashed',
      minHeight: toRem(200)
    },
    dragAccept: {},
    dragReject: {},
    disabled: {}
  }
}
