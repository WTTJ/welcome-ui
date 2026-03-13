import { useState } from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

type Size = {
  height: number
  width: number
}

export function useViewportSize(): Size {
  const [size, setSize] = useState<Size>({ height: undefined, width: undefined })

  // Throttle resize events to prevent excessive updates
  const handleResize = ({ height, width }: { height: number; width: number }) => {
    let timer: NodeJS.Timeout = undefined
    clearTimeout(timer)
    timer = setTimeout(() => {
      setSize({ height, width })
    }, 300)
  }

  useIsomorphicLayoutEffect(() => {
    // ResizeObserver is more performant than the window resize event
    const observer = new ResizeObserver(([entry]) => {
      const { blockSize: height, inlineSize: width } = entry.contentBoxSize[0]
      handleResize({ height, width })
    })

    observer.observe(document.documentElement)
    return () => observer.disconnect()
  }, [])

  return size
}
