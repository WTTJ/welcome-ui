import { createTheme } from './core'
import { get } from './helpers'

test('Can create theme with different base font size', () => {
  const theme = createTheme({
    defaultFontSize: 50
  })

  expect(get('fontSizes.html')({ theme })).toBe('50px')
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

  expect(get('fontFamilies.texts')({ theme })).toBe('HKCompakt')
  expect(get('fontFamilies.headings')({ theme })).toBe('welcomeweb')
  expect(get('fontFamilies.quotes')({ theme })).toBe('HKCompakt')
  expect(theme.fonts.HKCompakt).toBeDefined()
})
