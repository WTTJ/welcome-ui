import { act, renderHook } from '@testing-library/react'

import { useCopyText } from './use-copy-text'

describe('useCopyText', () => {
  const writeText = vi.fn()

  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.clearAllMocks()
  })

  it('writes the value to the clipboard and resets `copied` after the timeout', async () => {
    vi.useFakeTimers()
    writeText.mockResolvedValue(undefined)
    const { result } = renderHook(() => useCopyText('hello', 1000))

    await act(async () => result.current[0]())

    expect(writeText).toHaveBeenCalledWith('hello')
    expect(result.current[1]).toBe(true)

    act(() => vi.advanceTimersByTime(1000))
    expect(result.current[1]).toBeFalsy()
  })

  it('reports `false` when the clipboard write is rejected', async () => {
    writeText.mockRejectedValue(new Error('denied'))
    const { result } = renderHook(() => useCopyText(42, 0))

    await act(async () => result.current[0]())

    expect(writeText).toHaveBeenCalledWith('42')
    expect(result.current[1]).toBe(false)
  })

  it('reports `false` when the Clipboard API is unavailable', () => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined })
    const { result } = renderHook(() => useCopyText('hello', 0))

    act(() => result.current[0]())

    expect(result.current[1]).toBe(false)
  })
})
