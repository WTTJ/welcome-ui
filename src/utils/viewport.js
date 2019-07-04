import { useLayoutEffect, useState } from 'react'

export function useViewportSize() {
  const [size, setSize] = useState({})

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
