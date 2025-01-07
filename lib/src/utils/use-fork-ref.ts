import { ForwardedRef, useMemo } from 'react'

export function setRef(ref: ForwardedRef<unknown>, value: unknown): void {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
}

export function useForkRef(
  refA: ForwardedRef<unknown>,
  refB: ForwardedRef<unknown>
): (instance: unknown) => void {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }
    return instance => {
      setRef(refA, instance)
      setRef(refB, instance)
    }
  }, [refA, refB])
}
