import type { ComponentProps, ReactNode, RefObject } from 'react'

import type { ButtonProps } from '@/components/Button/types'

import type { useSwiper } from './useSwiper'

export type SwiperContextValue = {
  navigation: {
    desktop: boolean
    goNext: () => void
    goPrev: () => void
    isNextDisabled: boolean
    isPrevDisabled: boolean
    mobile: boolean
  }
  slides: {
    alignment: 'center' | 'default'
    currentPage: number
    currentSlidesPerView: number
    expandOnLargeScreens: boolean
    gap: number
    handleScroll: () => void
    id: string
    initialIndex: number
    isLastPage: boolean
    length: number
    perView: {
      desktop: number
      mobile: number
      tablet: number
    }
    ref: RefObject<HTMLUListElement | null>
    setLength: (length: number) => void
  }
}

export type SwiperNextButtonProps = Omit<ButtonProps, 'aria-label' | 'disabled' | 'onClick'> & {
  placement?: 'inline' | 'side'
}
export type SwiperPrevButtonProps = Omit<ButtonProps, 'aria-label' | 'disabled' | 'onClick'> & {
  placement?: 'inline' | 'side'
}
export type SwiperProps = ComponentProps<'div'> & SwiperOptions
export type SwiperSlidesProps = { children: ReactNode; className?: string }

export interface UseSwiperOptions {
  /** If true the swiper will automatically transition between slides */
  autoplay?: {
    duration?: number
    enabled?: boolean
    loop?: boolean
  }

  /** Navigation arrow visibility per breakpoint */
  navigation?: {
    desktop: boolean
    mobile: boolean
  }
  /** Slide display and spacing configuration */
  slides?: {
    /** Visual alignment of slides within the viewport */
    alignment?: 'center' | 'default'
    expandOnLargeScreens?: boolean
    /** Space between each slides */
    gap?: number
    id?: string
    /** Won't be used if alignment is center */
    initialIndex?: number
    /** Number of slides to show per view */
    perView?: {
      desktop: number
      mobile: number
      tablet: number
    }
  }
}

interface SwiperOptions {
  children: ReactNode
  store: ReturnType<typeof useSwiper>
}
