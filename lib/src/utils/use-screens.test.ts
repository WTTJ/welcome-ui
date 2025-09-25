// import * as tokens from '@/theme/tokens'

import { useScreens } from './use-screens'

vi.mock('@/theme/tokens', () => ({
  primitives: {
    screens: {
      '--breakpoint-md': '768px',
      '--breakpoint-sm': '640px',
      mobile: '24rem',
      tablet: 380,
    },
  },
}))

describe('useScreens', () => {
  it('should return the correct screen sizes', async () => {
    const screens = useScreens()
    expect(screens).toEqual({
      md: 768,
      sm: 640,
      tablet: 380,
    })
  })
})
