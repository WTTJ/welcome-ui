import { wttjTheme } from '../Themes/Wttj'

import { createTheme } from './theme/core'

test('core theme has the correct color for buttons.primary.color', () => {
  const theme = createTheme()

  expect(theme.buttons.primary.color).toBe('#FAFAFA')
})

test('wttjTheme correctly overwrites core theme.buttons with its custom styles', () => {
  const theme = createTheme(wttjTheme)

  expect(theme.buttons.primary.color).toBe('#FFFFFF')
})

test('Can overwrite wttjTheme.buttons with custom button styles', () => {
  const theme = createTheme({
    ...wttjTheme,
    buttons: {
      primary: {
        color: 'red'
      }
    }
  })

  expect(theme.buttons.primary.color).toBe('red')
})
