export const throttle = (callback, wait, leading = true) => {
  let timeout = null
  let lastArgs = null

  return (...args) => {
    const next = () => {
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
