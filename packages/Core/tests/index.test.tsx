import { darkTheme } from '../../Themes/Dark'
import { createTheme } from '../src/theme/core'
import { colors } from '../src/theme/colors'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe(colors['dark-900'])
})

test('darkTheme correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme(darkTheme)

  expect(theme.buttons.primary.color).toBe('rgba(0, 0, 0, 1)')
})

test('Can overwrite darkTheme.buttons with custom button styles', () => {
  const theme = createTheme({
    ...darkTheme,
    buttons: {
      primary: {
        color: 'red',
      },
    },
  })

  expect(theme.buttons.primary.color).toBe('red')
})
