import { useRef, useState } from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

type Size = {
  height: number
  width: number
}

export function useViewportSize(): Size {
  const [size, setSize] = useState<Size>({ height: undefined, width: undefined })
  // Persisted across resize events so each new resize cancels the previous pending frame
  const frameRef = useRef<number>()

  useIsomorphicLayoutEffect(() => {
    // ResizeObserver is more performant than the window resize event
    const observer = new ResizeObserver(([entry]) => {
      const { blockSize: height, inlineSize: width } = entry.contentBoxSize[0]

      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        setSize({ height, width })
      })
    })

    observer.observe(document.documentElement)
    return () => {
      cancelAnimationFrame(frameRef.current)
      observer.disconnect()
    }
  }, [])

  return size
}
