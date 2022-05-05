import { createTheme, WuiTheme } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import merge from 'ramda/src/mergeDeepRight'

const theme = createTheme(welcomeTheme)

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

const palette = {
  // dark nudes
  isabelline: '#22201E',
  pampas: '#3D3A37',
  timberwolf: '#504E4B',
  naturalgray: '#8B8987',
  ironside: '#A8A6A5',
  dune: '#C5C4C3',
}

export const colors = {
  light: {
    100: theme.colors.dark[100],
    200: theme.colors.dark[200],
    400: theme.colors.dark[400],
    500: theme.colors.dark[500],
    700: theme.colors.dark[700],
    900: theme.colors.dark[900],
  },
  dark: {
    100: theme.colors.light[100],
    200: theme.colors.light[200],
    400: theme.colors.light[400],
    500: theme.colors.light[500],
    700: theme.colors.light[700],
    900: theme.colors.light[900],
  },
  nude: {
    100: palette.isabelline,
    200: palette.pampas,
    400: palette.timberwolf,
    600: palette.naturalgray,
    700: palette.ironside,
    900: palette.dune,
  },
  border: theme.colors.light[200],
  underline: theme.colors.primary[700],
}

export const welcomeDarkTheme: RecursivePartial<WuiTheme> = merge(welcomeTheme, {
  colors,
}) as WuiTheme
