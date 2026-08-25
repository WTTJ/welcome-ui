import React from 'react'

import type { Size } from './types'

type TabContextType = {
  size?: Size
  vertical?: boolean
}

export const TabContext = React.createContext<null | TabContextType>(null)

export function useTabSize(): Size {
  const context = React.useContext(TabContext)
  return context?.size || 'lg'
}

export function useTabVertical(): boolean {
  const context = React.useContext(TabContext)
  return context?.vertical ?? false
}
