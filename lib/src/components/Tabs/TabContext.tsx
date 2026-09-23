import React from 'react'

import type { Size } from './types'

export type TabOrientation = 'horizontal' | 'vertical'

type TabContextType = {
  orientation?: TabOrientation
  size?: Size
}

export const TabContext = React.createContext<null | TabContextType>(null)

export function useTabOrientation(): TabOrientation {
  const context = React.useContext(TabContext)
  return context?.orientation ?? 'horizontal'
}

export function useTabSize(): Size {
  const context = React.useContext(TabContext)
  return context?.size || 'lg'
}
