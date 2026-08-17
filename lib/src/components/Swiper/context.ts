import { createContext, useContext } from 'react'

import type { SwiperContextValue } from './types'

export const SwiperContext = createContext<null | SwiperContextValue>(null)

export const useSwiperContext = () => {
  const context = useContext(SwiperContext)
  if (!context) {
    throw new Error('Swiper components must be used within a Swiper component')
  }
  return context
}
