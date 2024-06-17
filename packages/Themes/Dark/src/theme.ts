import { createTheme, WuiTheme } from '@welcome-ui/core'

const theme = createTheme()

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

export const colors = {
  ...theme.colors,
}

export const darkTheme: RecursivePartial<WuiTheme> = {
  colors,
}
