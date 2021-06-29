import { useLayoutEffect, useState } from 'react'

type Size = {
  height: number
  width: number
}

export function useViewportSize(): Size {
  const [size, setSize] = useState<Size>({ height: undefined, width: undefined })

  useLayoutEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight })

    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
