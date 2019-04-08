import { setTheme } from './core'
import { fontFamily, fontSize } from '../utils/theme'

test('Can create theme with different base font size', () => {
  const theme = setTheme({
    defaultFontSize: 50
  })

  expect(fontSize('html')(theme)).toBe('50px')
})

test('Can create theme with different fonts', () => {
  const theme = setTheme({
    fonts: {
      HKCompakt: [
        {
          url: 'https://cdn.welcometothejungle.co/common/assets/fonts/HKCompakt-Regular',
          weight: '400',
          extensions: ['woff2', 'woff', 'ttf']
        }
      ]
    },
    fontFamily: {
      texts: 'HKCompakt'
    }
  })

  console.debug('theme', theme.fontFamily)

  // TODO: Fix this
  expect(fontFamily('texts')(theme)).toBe('welcomeweb')
})
