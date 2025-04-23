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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (children: React.ReactNode) => children as any
    }

    return mounted
      ? (children: React.ReactNode, container?: Element | DocumentFragment, key?: string | null) =>
          createPortal(children, container || document.body, key)
      : () => null as unknown as CreatePortal
  }, [disable, mounted])
}
