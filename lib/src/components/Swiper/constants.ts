import type { UseSwiperOptions } from './types'

export const defaultOptions = {
  autoplay: { duration: 5000, enabled: false, loop: false },
  navigation: { desktop: true, mobile: true },
  slides: {
    alignment: 'default',
    expandOnLargeScreens: false,
    gap: 20,
    id: 'swiper',
    initialIndex: 0,
    perView: { desktop: 1, mobile: 1, tablet: 1 },
  },
} satisfies UseSwiperOptions

export const defaultStore = {
  autoplay: defaultOptions.autoplay!,
  navigation: defaultOptions.navigation!,
  slides: {
    alignment: defaultOptions.slides!.alignment!,
    currentPage: 0,
    currentSlidesPerView: defaultOptions.slides!.perView!.desktop,
    expandOnLargeScreens: defaultOptions.slides!.expandOnLargeScreens!,
    gap: defaultOptions.slides!.gap!,
    id: defaultOptions.slides!.id!,
    initialIndex: defaultOptions.slides!.initialIndex!,
    perView: defaultOptions.slides!.perView!,
    setCurrentPage: () => {},
  },
}
