/* eslint-disable perfectionist/sort-objects */

import { useScreens } from './use-screens'

describe('useScreens', () => {
  it('should return the correct screen sizes', async () => {
    const screens = useScreens()
    expect(screens).toEqual({
      xs: 0,
      sm: 480,
      md: 736,
      lg: 980,
      xl: 1280,
      '2xl': 1440,
      xxl: 1440,
      '3xl': 1620,
      '4xl': 1920,
    })
  })
})
