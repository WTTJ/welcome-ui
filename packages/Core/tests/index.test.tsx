import { createTheme } from '../src/theme/core'
import { colors } from '../src/theme/colors'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe(colors['neutral-black'])
})

test('correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme({ buttons: { primary: { color: 'red' } } })

  expect(theme.buttons.primary.color).toBe('red')
})
