import { getSource } from '../font'

describe('getSource', () => {
  it('should return correct font-face rules if not variable', () => {
    const directive = getSource(
      'https://cdn.welcometothejungle.com/fonts/welcome-font-regular',
      ['woff', 'woff2'],
      false
    )

    expect(directive).toBe(
      "url('https://cdn.welcometothejungle.com/fonts/welcome-font-regular.woff') format('woff'), url('https://cdn.welcometothejungle.com/fonts/welcome-font-regular.woff2') format('woff2')"
    )
  })

  it('should return correct font-face rules if variable', () => {
    const directive = getSource(
      'https://cdn.welcometothejungle.com/fonts/welcome-font-regular',
      ['woff', 'woff2'],
      true
    )

    expect(directive).toBe(
      "url('https://cdn.welcometothejungle.com/fonts/welcome-font-regular.woff') format('woff-variations'), url('https://cdn.welcometothejungle.com/fonts/welcome-font-regular.woff2') format('woff2-variations')"
    )
  })
})
