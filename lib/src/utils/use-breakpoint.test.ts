import { renderHook } from '@testing-library/react'

import { useBreakpoint } from './use-breakpoint'

describe('useBreakpoint', () => {
  const originalInnerWidth = window.innerWidth

  afterEach(() => {
    window.innerWidth = originalInnerWidth
  })

  it.each([
    { expected: 'xs', width: 0 },
    { expected: 'xs', width: 479 },
    { expected: 'sm', width: 480 },
    { expected: 'sm', width: 735 },
    { expected: 'md', width: 736 },
    { expected: 'md', width: 979 },
    { expected: 'lg', width: 980 },
    { expected: 'lg', width: 1279 },
    { expected: 'xl', width: 1280 },
    { expected: 'xl', width: 1439 },
    { expected: '2xl', width: 1440 },
    { expected: '2xl', width: 1619 },
    { expected: '3xl', width: 1620 },
    { expected: '3xl', width: 1919 },
    { expected: '4xl', width: 1920 },
  ])('returns $expected for a $widthpx wide viewport', ({ expected, width }) => {
    window.innerWidth = width

    const { result } = renderHook(() => useBreakpoint())

    expect(result.current).toBe(expected)
  })

  it.each([
    { expected: 'xs', width: 480 },
    { expected: 'sm', width: 736 },
    { expected: 'md', width: 980 },
  ])(
    'returns $expected for a $widthpx wide viewport when the boundary is "excludeThreshold"',
    ({ expected, width }) => {
      window.innerWidth = width

      const { result } = renderHook(() => useBreakpoint('excludeThreshold'))

      expect(result.current).toBe(expected)
    }
  )
})
