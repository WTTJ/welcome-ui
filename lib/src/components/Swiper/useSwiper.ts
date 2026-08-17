import { useMemo, useState } from 'react'

import { useScreens } from '@/utils/use-screens'
import { useViewportSize } from '@/utils/use-viewport'

import { defaultOptions } from './constants'
import type { UseSwiperOptions } from './types'

export const useSwiper = (options: UseSwiperOptions = defaultOptions) => {
  const [currentPage, setCurrentPage] = useState(0)

  // Merge with defaults to handle partial options
  const mergedOptions = {
    autoplay: { ...defaultOptions.autoplay, ...options.autoplay },
    navigation: { ...defaultOptions.navigation, ...options.navigation },
    slides: {
      ...defaultOptions.slides,
      ...options.slides,
      perView: {
        ...defaultOptions.slides.perView,
        ...options.slides?.perView,
      },
    },
  }

  const {
    autoplay,
    navigation,
    slides: { expandOnLargeScreens, perView: slidesPerView },
  } = mergedOptions

  const { width: viewportWidth } = useViewportSize()

  const screens = useScreens()

  const currentSlidesPerView = useMemo(() => {
    if (viewportWidth <= screens.md) {
      return slidesPerView.mobile
    } else if (viewportWidth <= screens.lg) {
      return slidesPerView.tablet
    } else if (viewportWidth >= screens['4xl'] && expandOnLargeScreens) {
      return slidesPerView.desktop + 2
    } else {
      return slidesPerView.desktop
    }
  }, [viewportWidth, screens, expandOnLargeScreens, slidesPerView])

  return {
    autoplay,
    navigation,
    slides: {
      alignment: mergedOptions.slides.alignment,
      currentPage,
      currentSlidesPerView,
      expandOnLargeScreens: mergedOptions.slides.expandOnLargeScreens,
      gap: mergedOptions.slides.gap,
      id: mergedOptions.slides.id,
      initialIndex: mergedOptions.slides.initialIndex,
      perView: slidesPerView,
      setCurrentPage,
    },
  }
}
