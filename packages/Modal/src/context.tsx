import React, { createContext, ReactNode, useContext, useMemo } from 'react'

import { ModalStateReturn } from './index'

type ModalProviderProps = {
  children?: ReactNode
  state: ModalStateReturn
}

export const ModalContext = createContext<ModalStateReturn>({} as ModalStateReturn)

/**
 * As Reakit doesn't handle scrolling content we have to forward the modalState to the Modal.Content
 * in order to check when the modal is visible and enable the scroll.
 * @link https://github.com/ariakit/ariakit/issues/469
 */
export const ModalProvider = ({ children, state }: ModalProviderProps) => {
  const modalState = useMemo(() => state, [state])

  return <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
}

export function useModal() {
  return useContext(ModalContext)
}
