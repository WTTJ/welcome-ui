import { th } from '@xstyled/system'

import { createTheme } from './core'

test('Can create theme with different fonts', () => {
  const theme = createTheme({
    fontFaces: {
      HKCompakt: [
        {
          url: 'https://cdn.welcometothejungle.co/common/assets/fonts/HKCompakt-Regular',
          weight: '400',
          extensions: ['woff2', 'woff', 'ttf']
        }
      ]
    },
    fonts: {
      texts: 'HKCompakt',
      quotes: 'HKCompakt'
    }
  })

  expect(th.font('texts')({ theme })).toBe('HKCompakt')
  expect(th.font('headings')({ theme })).toBe('welcomeweb')
  expect(th.font('quotes')({ theme })).toBe('HKCompakt')
  expect(theme.fontFaces.HKCompakt).toBeDefined()
})
