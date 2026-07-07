import { act, renderHook } from '@testing-library/react'

import { useViewportSize } from './use-viewport'

describe('useViewportSize', () => {
  let resizeCallback: (
    entries: Array<{ contentBoxSize: [{ blockSize: number; inlineSize: number }] }>
  ) => void
  const disconnect = vi.fn()
  const observe = vi.fn()

  const triggerResize = (width: number, height: number) => {
    resizeCallback([{ contentBoxSize: [{ blockSize: height, inlineSize: width }] }])
  }

  beforeEach(() => {
    vi.useFakeTimers()

    global.ResizeObserver = vi.fn().mockImplementation(function (callback) {
      resizeCallback = callback
      this.disconnect = disconnect
      this.observe = observe
      this.unobserve = vi.fn()
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.clearAllMocks()
  })

  it('returns an undefined size before any resize is observed', () => {
    const { result } = renderHook(() => useViewportSize())

    expect(result.current).toEqual({ height: undefined, width: undefined })
  })

  it('observes the document element on mount', () => {
    renderHook(() => useViewportSize())

    expect(observe).toHaveBeenCalledWith(document.documentElement)
  })

  it('updates the size once a resize is observed', () => {
    const { result } = renderHook(() => useViewportSize())

    act(() => {
      triggerResize(1024, 768)
      vi.runAllTimers()
    })

    expect(result.current).toEqual({ height: 768, width: 1024 })
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = renderHook(() => useViewportSize())

    unmount()

    expect(disconnect).toHaveBeenCalled()
  })
})
