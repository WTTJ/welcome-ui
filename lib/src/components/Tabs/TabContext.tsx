import React from 'react'

import type { Size } from './types'

type TabContextType = {
  size?: Size
}

export const TabContext = React.createContext<null | TabContextType>(null)

export function useTabSize(): Size {
  const context = React.useContext(TabContext)
  return context?.size || 'lg'
}
