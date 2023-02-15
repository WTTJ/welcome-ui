import { welcomeTheme } from '../../Themes/Welcome'
import { createTheme } from '../src/theme/core'
import { colors } from '../src/theme/colors'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe(colors['dark-900'])
})

test('welcomeTheme correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme(welcomeTheme)

  expect(theme.buttons.primary.color).toBe('rgba(0, 0, 0, 1)')
})

test('Can overwrite welcomeTheme.buttons with custom button styles', () => {
  const theme = createTheme({
    ...welcomeTheme,
    buttons: {
      primary: {
        color: 'red',
      },
    },
  })

  expect(theme.buttons.primary.color).toBe('red')
})
