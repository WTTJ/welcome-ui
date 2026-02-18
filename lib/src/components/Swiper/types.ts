import type { ComponentProps, FC, ReactNode } from 'react'

import type { ButtonProps } from '@/components/Button/types'

import type { useSwiper } from '.'

export interface SwiperComponent extends FC<SwiperProps> {
  NextButton: FC<SwiperNextButtonProps>
  PrevButton: FC<SwiperPrevButtonProps>
  Slides: FC<SwiperSlidesProps>
}

export type SwiperNextButtonProps = Omit<ButtonProps, 'aria-label' | 'disabled' | 'onClick'> & {
  placement?: 'inline' | 'side'
}
export type SwiperPrevButtonProps = Omit<ButtonProps, 'aria-label' | 'disabled' | 'onClick'> & {
  placement?: 'inline' | 'side'
}
export type SwiperProps = ComponentProps<'div'> & SwiperOptions
export type SwiperSlidesProps = { children: ReactNode }

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
