import { setTheme } from './core'
import { fontSize } from '../utils/theme'

test('Can create theme with different base font size', () => {
  const theme = setTheme({
    defaultFontSize: 50
  })

  expect(fontSize('html')(theme)).toBe('50px')
})
