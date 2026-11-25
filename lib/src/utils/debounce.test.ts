import { debounce } from './debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('calls the callback once, with the last arguments, after the wait', () => {
    const callback = vi.fn()
    const debounced = debounce(callback, 100)

    debounced('a')
    vi.advanceTimersByTime(50)
    debounced('b')
    vi.advanceTimersByTime(99)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('b')
  })

  it('drops the pending call on cancel', () => {
    const callback = vi.fn()
    const debounced = debounce(callback, 100)

    debounced()
    debounced.cancel()
    vi.advanceTimersByTime(100)

    expect(callback).not.toHaveBeenCalled()
  })
})
