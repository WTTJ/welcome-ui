import { createTheme, darkTheme } from '@welcome-ui/core'

import { useThemeContext } from './theme'

const themeConfiguration = currentTheme => {
  return {
    core: createTheme(),
    dark: createTheme(darkTheme),
  }[currentTheme]
}

export function useThemeConfigurationContext() {
  const theme = useThemeContext()

  return themeConfiguration(theme)
}
