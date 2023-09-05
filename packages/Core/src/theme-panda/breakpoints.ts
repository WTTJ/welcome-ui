import type { Theme } from '@pandacss/types'

type BreakpointConfig = Theme['breakpoints']

export const breakpoints: BreakpointConfig = {
  xs: '0px',
  sm: '480px',
  md: '736px',
  lg: '980px',
  xl: '1280px',
  xxl: '1440px',
  '3xl': '1620px',
  '4xl': '1920px',
}
