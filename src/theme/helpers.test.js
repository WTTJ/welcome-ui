import { createTheme } from './core'
import { get } from './helpers'

test('Can create theme with different base font size', () => {
  const theme = createTheme({
    defaultFontSize: 50
  })

  expect(get('fontSize.html')({ theme })).toBe('50px')
})

test('Can create theme with different fonts', () => {
  const theme = createTheme({
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
      texts: 'HKCompakt',
      quotes: 'HKCompakt'
    }
  })

  expect(get('fontFamily.texts')({ theme })).toBe('HKCompakt')
  expect(get('fontFamily.headings')({ theme })).toBe('Times')
  expect(get('fontFamily.quotes')({ theme })).toBe('HKCompakt')
  expect(theme.fonts.HKCompakt).toBeDefined()
})
