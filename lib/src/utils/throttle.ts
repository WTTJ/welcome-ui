interface ThrottledFunc<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void
}

export const throttle = <T extends (...args: unknown[]) => unknown>(
  callback: T,
  wait?: number,
  leading = true
): ThrottledFunc<T> => {
  let timeout: null | ReturnType<typeof setTimeout> = null
  let lastArgs: null | unknown[] = null

  return (...args) => {
    const next = () => {
      if (lastArgs) {
        callback(...lastArgs)
      }
      timeout = null
    }
    lastArgs = args

    if (!timeout) {
      if (leading) {
        next()
      }
      timeout = setTimeout(next, wait)
    }
  }
}
