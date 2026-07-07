import { useRef, useState } from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

type Size = {
  height: number
  width: number
}

const RESIZE_THROTTLE_MS = 300

export function useViewportSize(): Size {
  const [size, setSize] = useState<Size>({ height: undefined, width: undefined })
  // Persisted across resize events so each new resize cancels the previous pending update
  const timerRef = useRef<NodeJS.Timeout>()

  useIsomorphicLayoutEffect(() => {
    // ResizeObserver is more performant than the window resize event
    const observer = new ResizeObserver(([entry]) => {
      const { blockSize: height, inlineSize: width } = entry.contentBoxSize[0]

      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        setSize({ height, width })
      }, RESIZE_THROTTLE_MS)
    })

    observer.observe(document.documentElement)
    return () => {
      clearTimeout(timerRef.current)
      observer.disconnect()
    }
  }, [])

  return size
}
