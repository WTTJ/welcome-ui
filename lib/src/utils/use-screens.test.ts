import { useScreens } from './use-screens'

vi.mock(import('@/theme/tokens.json'), async importOriginal => {
  const actual = await importOriginal()
  return {
    default: {
      ...actual,
      breakpoint: {
        ...actual.breakpoint,
        mobile: { $value: '24rem' },
        tablet: { $value: '380' },
      },
    },
  }
})

describe('useScreens', () => {
  it('should return the correct screen sizes', async () => {
    const screens = useScreens()
    expect(screens).toEqual({
      '2xl': 1440,
      '3xl': 1620,
      '4xl': 1920,
      lg: 980,
      md: 736,
      sm: 480,
      tablet: 380,
      xl: 1280,
      xs: 0,
    })
  })
})
