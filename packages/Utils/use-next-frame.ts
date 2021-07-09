import { useEffect, useState } from 'react'

export function useNextFrame(value: unknown): unknown {
  const [delayedValue, setDelayedValue] = useState(value)
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const id = requestAnimationFrame(() => {
      setDelayedValue(value)
    })

    // eslint-disable-next-line no-undef
    return () => cancelAnimationFrame(id)
  }, [value])
  return delayedValue
}
