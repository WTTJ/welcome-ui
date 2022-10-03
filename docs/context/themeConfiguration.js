import { createTheme } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { darkTheme } from '@welcome-ui/themes.dark'
import { welcomeDarkTheme } from '@welcome-ui/themes.welcome-dark'
import { useThemeContext } from './theme'

const themeConfiguration = currentTheme => {
  const defaultTheme = createTheme()

  return {
    core: defaultTheme,
    dark: {
      ...defaultTheme,
      darkTheme,
    },
    welcome: {
      ...defaultTheme,
      welcomeTheme,
    },
    welcomeDark: {
      ...defaultTheme,
      welcomeDarkTheme,
    },
  }[currentTheme]
}

export function useThemeConfigurationContext() {
  const theme = useThemeContext()

  return themeConfiguration(theme)
}
