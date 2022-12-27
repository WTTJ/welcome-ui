import { createTheme } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { darkTheme } from '@welcome-ui/themes.dark'
import { welcomeDarkTheme } from '@welcome-ui/themes.welcome-dark'

import { useThemeContext } from './theme'

const themeConfiguration = currentTheme => {
  return {
    core: createTheme(),
    dark: createTheme(darkTheme),
    welcome: createTheme(welcomeTheme),
    welcomeDark: createTheme(welcomeDarkTheme),
  }[currentTheme]
}

export function useThemeConfigurationContext() {
  const theme = useThemeContext()

  return themeConfiguration(theme)
}
