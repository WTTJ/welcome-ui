export interface DebouncedFunc<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void
  cancel: () => void
}

/** Trailing-edge debounce with `cancel`, the subset of `lodash.debounce` the lib uses. */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  callback: T,
  wait: number
): DebouncedFunc<T> => {
  let timeout: ReturnType<typeof setTimeout> = null

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      callback(...args)
    }, wait)
  }

  debounced.cancel = () => {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
