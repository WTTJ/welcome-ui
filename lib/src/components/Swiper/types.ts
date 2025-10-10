import type { ComponentProps } from 'react'

import type { useSwiper } from '.'

export type SwiperProps = ComponentProps<'div'> & SwiperOptions

export interface UseSwiperOptions {
  autoplay?: boolean
  /** If true the swiper will begin at the middle */
  centeredSlides?: boolean
  duration?: number
  /** Won't be used if centeredSlides is true */
  firstSlideToShow?: number
  fullWidth?: boolean
  id?: string
  loop?: boolean
  /** Size of left and right navigation arrows */
  navigationSize?: 'lg' | 'md' | 'sm' | 'xs'
  /** Number of slides to show per view */
  slidesPerView?: {
    desktop: number
    mobile: number
    tablet: number
  }
  /** Space between each slides */
  spaceBetween?: number
  /** Use black colors for the pagination and arrows in case of slides too bright */
  withDarkUI?: boolean
  /** Show left and rigth navigation arrows on mobile/tablet or/and desktop */
  withNavigation?: {
    desktop: boolean
    mobile: boolean
  }
  /** Show bottom pagination on mobile/tablet or/and desktop */
  withPagination?: {
    desktop: boolean
    mobile: boolean
  }
}

interface SwiperOptions {
  children: JSX.Element | JSX.Element[]
  store: ReturnType<typeof useSwiper>
}
