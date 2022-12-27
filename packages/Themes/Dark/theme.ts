import { createTheme, WuiTheme } from '@welcome-ui/core'

const theme = createTheme()

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

export const colors = {
  ...theme.colors,
  'light-100': theme.colors['dark-100'],
  'light-200': theme.colors['dark-200'],
  'light-400': theme.colors['dark-400'],
  'light-500': theme.colors['dark-500'],
  'light-700': theme.colors['dark-700'],
  'light-900': theme.colors['dark-900'],
  'dark-100': theme.colors['light-100'],
  'dark-200': theme.colors['light-200'],
  'dark-400': theme.colors['light-400'],
  'dark-500': theme.colors['light-500'],
  'dark-700': theme.colors['light-700'],
  'dark-900': theme.colors['light-900'],
  'nude-100': '#252B2B',
  'nude-200': '#444E4E',
  'nude-400': '#576060',
  'nude-600': '#8F9595',
  'nude-700': '#8F9595',
  'nude-900': '#C7CACA',
  border: theme.colors['light-200'],
}

export const darkTheme: RecursivePartial<WuiTheme> = {
  colors,
}
