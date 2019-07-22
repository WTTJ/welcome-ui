import { createTheme } from '../src/theme/core'

const theme = createTheme()

export const getThemeValues = () => JSON.stringify(theme, null, 2)

export const THEMES = [
  { value: 'welcomekit', label: 'WelcomeKit' },
  { value: 'welcome', label: 'WelcomeToTheJungle' },
  { value: 'core', label: 'Core' }
]
