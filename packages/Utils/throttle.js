export const throttle = (callback, wait) => {
  let timeout = null
  let lastArgs = null

  return (...args) => {
    const next = () => {
      callback(...lastArgs)
      timeout = null
    }

    lastArgs = args

    if (!timeout) {
      next()
      timeout = setTimeout(next, wait)
    }
  }
}
