import { welcomeTheme } from '../Themes/Welcome'

import { createTheme } from './theme/core'
import { colors } from './theme/colors'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe(colors.light[900])
})

test('welcomeTheme correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme(welcomeTheme)

  expect(theme.buttons.primary.color).toBe('#000000')
})

test('Can overwrite welcomeTheme.buttons with custom button styles', () => {
  const theme = createTheme({
    ...welcomeTheme,
    buttons: {
      primary: {
        color: 'red'
      }
    }
  })

  expect(theme.buttons.primary.color).toBe('red')
})
