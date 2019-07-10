import { useEffect, useState } from 'react'
export function useNextFrame(value) {
  const [delayedValue, setDelayedValue] = useState(value)
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDelayedValue(value)
    })

    return () => cancelAnimationFrame(id)
  }, [value])
  return delayedValue
}
