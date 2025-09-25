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
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export const getSlideWidth = (slidesPerView: number, spaceBetween: number) => {
  if (spaceBetween === 0) {
    return `${100 / slidesPerView}%`
  }

  const space = slidesPerView === 1 ? 4 : 2
  const spaceCss = (spaceBetween * space) / 16

  return `calc(${100 / slidesPerView}% - ${spaceCss}rem)`
}
