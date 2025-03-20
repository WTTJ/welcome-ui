import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

type CreatePortal = typeof createPortal

/**
 * Hook that mimic the React createPortal function in order to make it SSR friendly
 */
export function useCreatePortal(disable = false) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return useMemo(() => {
    if (disable) {
      return (children: React.ReactNode) => children as unknown
    }

    return mounted
      ? (children: React.ReactNode, container?: DocumentFragment | Element, key?: null | string) =>
          createPortal(children, container || document.body, key)
      : () => null as unknown as CreatePortal
  }, [disable, mounted])
}
