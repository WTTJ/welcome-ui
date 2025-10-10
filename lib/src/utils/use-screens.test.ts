/* eslint-disable perfectionist/sort-objects */

import { useScreens } from './use-screens'

vi.mock(import('@/theme/tokens/semantics.json'), async importOriginal => {
  const actual = await importOriginal()
  return {
    default: {
      ...actual,
      breakpoint: {
        ...actual.breakpoint,
        mobile: { value: '24rem' },
        tablet: { value: '380' },
      },
    },
  }
})

describe('useScreens', () => {
  it('should return the correct screen sizes', async () => {
    const screens = useScreens()
    expect(screens).toEqual({
      xs: 0,
      tablet: 380,
      sm: 480,
      md: 736,
      lg: 980,
      xl: 1280,
      '2xl': 1440,
      '3xl': 1620,
      '4xl': 1920,
    })
  })
})
