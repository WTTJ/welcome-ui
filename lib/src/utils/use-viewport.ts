import { useState } from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

type Size = {
  height: number | undefined
  width: number | undefined
}

export function useViewportSize(): Size {
  const [size, setSize] = useState<Size>({ height: undefined, width: undefined })

  useIsomorphicLayoutEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth })

    function handleResize() {
      setSize({ height: window.innerHeight, width: window.innerWidth })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
