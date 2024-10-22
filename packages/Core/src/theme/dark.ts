import { WuiTheme } from './types'
import { colors } from './colors'

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

export const colorsDark: WuiTheme['colors'] = {
  ...colors,
  'primary-50': '#FF0000',
}

export const darkTheme: RecursivePartial<WuiTheme> = {
  colors: colorsDark,
}
