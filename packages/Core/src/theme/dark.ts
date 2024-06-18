import { createTheme } from './core'
import { WuiTheme } from './types'

const theme = createTheme()

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

export const colors: WuiTheme['colors'] = {
  ...theme.colors,
  'gray-10': theme.colors['gray-80'],
  'gray-20': theme.colors['gray-70'],
  'gray-30': theme.colors['gray-60'],
  'gray-40': theme.colors['gray-50'],
  'gray-50': theme.colors['gray-40'],
  'gray-60': theme.colors['gray-30'],
  'gray-70': theme.colors['gray-20'],
  'gray-80': theme.colors['gray-10'],
  'beige-10': theme.colors['beige-100'],
  'beige-20': theme.colors['beige-90'],
  'beige-30': theme.colors['beige-80'],
  'beige-40': theme.colors['beige-70'],
  'beige-50': theme.colors['beige-60'],
  'beige-60': theme.colors['beige-50'],
  'beige-70': theme.colors['beige-40'],
  'beige-80': theme.colors['beige-30'],
  'beige-90': theme.colors['beige-20'],
  'beige-100': theme.colors['beige-10'],
  'nude-10': theme.colors['nude-100'],
  'nude-20': theme.colors['nude-90'],
  'nude-30': theme.colors['nude-80'],
  'nude-40': theme.colors['nude-70'],
  'nude-50': theme.colors['nude-60'],
  'nude-60': theme.colors['nude-50'],
  'nude-70': theme.colors['nude-40'],
  'nude-80': theme.colors['nude-30'],
  'nude-90': theme.colors['nude-20'],
  'nude-100': theme.colors['nude-10'],
  'neutral-white': theme.colors['neutral-black'],
  'neutral-10': theme.colors['neutral-80'],
  'neutral-20': theme.colors['neutral-70'],
  'neutral-30': theme.colors['neutral-60'],
  'neutral-40': theme.colors['neutral-50'],
  'neutral-50': theme.colors['neutral-40'],
  'neutral-60': theme.colors['neutral-30'],
  'neutral-80': theme.colors['neutral-20'],
  'neutral-black': theme.colors['neutral-white'],
  border: theme.colors['neutral-70'],
}

export const darkTheme: RecursivePartial<WuiTheme> = {
  colors,
}
