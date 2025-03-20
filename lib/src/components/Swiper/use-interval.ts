import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number): void => {
  const savedCallback = useRef<() => void>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.()
    }

    if (delay !== 0) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }

    return
  }, [delay])
}
