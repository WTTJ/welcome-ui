import { createTheme } from './theme/core'
import { welcomeTheme } from './theme/welcome'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe('#FAFAFA')
})

test('welcomeTheme correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme(welcomeTheme)

  expect(theme.buttons.primary.color).toBe('#FFFFFF')
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
