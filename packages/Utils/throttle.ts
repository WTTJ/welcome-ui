export const throttle = (
  callback: (entries?: unknown) => unknown,
  wait: number,
  leading = true
): (() => void) => {
  let timeout: ReturnType<typeof setTimeout> = null
  let lastArgs: unknown = null

  return (...args) => {
    const next = () => {
      // todo
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callback(...lastArgs)
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
