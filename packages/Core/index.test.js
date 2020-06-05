import { welcomeTheme } from '../Themes/Welcome'

import { createTheme } from './theme/core'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe('#C8C8C8')
})

test('welcomeTheme correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme(welcomeTheme)

  expect(theme.buttons.primary.color).toBe('#B3B3B3')
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
