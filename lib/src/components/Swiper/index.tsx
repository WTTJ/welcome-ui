/**
 * Swiper Component - A carousel/slider component with touch support, keyboard navigation, and autoplay
 * Features: responsive slides, navigation buttons, autoplay with loop option, keyboard controls
 */

import debounce from 'lodash.debounce'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

import { classNames } from '@/utils'
import { useScreens } from '@/utils/use-screens'
import { useViewportSize } from '@/utils/use-viewport'

import { SwiperNextButton } from './components/SwiperNextButton'
import { SwiperPrevButton } from './components/SwiperPrevButton'
import { SwiperSlides } from './components/SwiperSlides'
import swiperStyles from './swiper.module.scss'
import type { SwiperComponent, SwiperProps, UseSwiperOptions } from './types'
import { useInterval } from './utils'

const cx = classNames(swiperStyles)

type SwiperContextValue = {
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
    ref: React.RefObject<HTMLUListElement>
    setLength: (length: number) => void
  }
}

const SwiperContext = createContext<null | SwiperContextValue>(null)

export const useSwiperContext = () => {
  const context = useContext(SwiperContext)
  if (!context) {
    throw new Error('Swiper components must be used within a Swiper component')
  }
  return context
}

const defaultOptions = {
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

const defaultStore = {
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

export const useSwiper = (
  options: UseSwiperOptions = defaultOptions
): {
  autoplay: { duration: number; enabled: boolean; loop: boolean }
  navigation: { desktop: boolean; mobile: boolean }
  slides: {
    alignment: 'center' | 'default'
    currentPage: number
    currentSlidesPerView: number
    expandOnLargeScreens: boolean
    gap: number
    id: string
    initialIndex: number
    perView: { desktop: number; mobile: number; tablet: number }
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  }
} => {
  const [currentPage, setCurrentPage] = useState(0)

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
      alignment: mergedOptions.slides.alignment!,
      currentPage,
      currentSlidesPerView,
      expandOnLargeScreens: mergedOptions.slides.expandOnLargeScreens!,
      gap: mergedOptions.slides.gap!,
      id: mergedOptions.slides.id!,
      initialIndex: mergedOptions.slides.initialIndex!,
      perView: slidesPerView,
      setCurrentPage,
    },
  }
}

export const Swiper: SwiperComponent = ({
  children,
  className,
  store = defaultStore,
  ...rest
}: SwiperProps) => {
  const { autoplay, navigation, slides } = store
  const { currentPage, setCurrentPage } = slides
  const ref = useRef<HTMLUListElement>()
  const hasInitializedRef = useRef(false)

  const [slidesLength, setSlidesLength] = useState(0)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const numberOfPage = Math.ceil(slidesLength / slides.currentSlidesPerView) || 1

  // Ensure page index stays within valid range (0 to numberOfPage - 1)
  const clampPageIndex = useCallback(
    (page: number) => Math.min(Math.max(page, 0), numberOfPage - 1),
    [numberOfPage]
  )

  const getNavigationState = useCallback(() => {
    const sliderContainer = ref?.current
    if (sliderContainer && !autoplay.enabled) {
      const { offsetWidth, scrollLeft, scrollWidth } = sliderContainer
      const isFirstPage = !(scrollLeft > slides.gap)
      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > slides.gap)

      setIsPrevDisabled(isFirstPage)
      setIsNextDisabled(isLastPage)
    } else {
      setIsPrevDisabled(false)
      setIsNextDisabled(false)
    }
  }, [autoplay.enabled, slides.gap])

  const updatePage = useCallback(() => {
    const sliderContainer = ref?.current
    if (sliderContainer) {
      const { children, offsetWidth, scrollLeft, scrollWidth } = sliderContainer
      // Get width of first slide to calculate page width
      const childWidth = children?.[0]?.getBoundingClientRect()?.width

      if (childWidth == null) {
        return
      }

      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > slides.gap)

      const pageWidth = (childWidth + slides.gap) * slides.currentSlidesPerView

      const nextPage = isLastPage ? numberOfPage - 1 : Math.floor(scrollLeft / pageWidth)

      const estimatedNextPage = clampPageIndex(nextPage)

      if (estimatedNextPage !== currentPage) {
        setCurrentPage(estimatedNextPage)
      }
    }
  }, [
    numberOfPage,
    currentPage,
    slides.currentSlidesPerView,
    ref,
    setCurrentPage,
    slides.gap,
    clampPageIndex,
  ])

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        getNavigationState()
        updatePage()
      }, 100),
    [getNavigationState, updatePage]
  )

  const goTo = useCallback(
    (page: number, isFirstInit = false) => {
      const sliderContainer = ref?.current
      const childWidth = sliderContainer?.children?.[0]?.getBoundingClientRect()?.width

      if (!sliderContainer || childWidth == null) {
        return
      }

      const estimatedPage = clampPageIndex(page)

      sliderContainer.scrollTo({
        // We don't want to have a scroll effect when we first render the swiper
        behavior: !isFirstInit ? 'smooth' : 'auto',
        left: estimatedPage * (childWidth + slides.gap) * slides.currentSlidesPerView,
        top: 0,
      })
    },
    [slides.currentSlidesPerView, slides.gap, ref, clampPageIndex]
  )

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === numberOfPage - 1

  const goNext = useCallback(() => {
    if (autoplay.enabled && autoplay.loop && isLastPage) {
      goTo(0)
    } else {
      goTo(clampPageIndex(currentPage + 1))
    }
  }, [currentPage, goTo, isLastPage, autoplay.enabled, autoplay.loop, clampPageIndex])

  const goPrev = useCallback(() => {
    if (isFirstPage && autoplay.enabled && autoplay.loop) {
      goTo(numberOfPage - 1)
    } else {
      goTo(clampPageIndex(currentPage - 1))
    }
  }, [
    numberOfPage,
    currentPage,
    goTo,
    isFirstPage,
    autoplay.enabled,
    autoplay.loop,
    clampPageIndex,
  ])

  // Automatically advance to next slide at specified duration if enabled
  useInterval(
    () => {
      if (autoplay.enabled) {
        goNext()
      }
    },
    autoplay.enabled ? autoplay.duration : null
  )

  // Allow users to navigate with arrow keys
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') {
        goPrev()
      }

      if (e.code === 'ArrowRight') {
        goNext()
      }
    }

    window.addEventListener('keydown', handleKeys)

    return () => window.removeEventListener('keydown', handleKeys)
  }, [goPrev, goNext])

  const firstPageToShow =
    slides.alignment === 'center'
      ? Math.floor(numberOfPage / 2)
      : Math.ceil(slides.initialIndex / slides.currentSlidesPerView) - 1

  // Navigate to initial page once when slides are loaded
  useEffect(() => {
    // Only navigate to initial page once, when slidesLength is first known
    if (slidesLength > 0 && !hasInitializedRef.current) {
      goTo(firstPageToShow, true)
      hasInitializedRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesLength])

  useEffect(() => {
    getNavigationState()

    const raf = window.requestAnimationFrame(getNavigationState)

    return () => window.cancelAnimationFrame(raf)
  }, [getNavigationState, children, slidesLength, slides.currentSlidesPerView])

  useEffect(() => {
    if (hasInitializedRef.current) {
      goTo(currentPage)
    }
  }, [currentPage, goTo])

  const contextValue = useMemo(
    () => ({
      navigation: {
        goNext,
        goPrev,
        isNextDisabled,
        isPrevDisabled,
        ...navigation,
      },
      slides: {
        alignment: slides.alignment,
        currentPage,
        currentSlidesPerView: slides.currentSlidesPerView,
        expandOnLargeScreens: slides.expandOnLargeScreens,
        gap: slides.gap,
        handleScroll,
        id: slides.id,
        initialIndex: slides.initialIndex,
        isLastPage,
        length: slidesLength,
        perView: slides.perView,
        ref,
        setLength: setSlidesLength,
      },
    }),
    [
      goNext,
      goPrev,
      isNextDisabled,
      isPrevDisabled,
      navigation,
      currentPage,
      handleScroll,
      isLastPage,
      slidesLength,
      slides,
    ]
  )

  return (
    <SwiperContext.Provider value={contextValue}>
      <div className={cx('root', className)} {...rest}>
        {children}
      </div>
    </SwiperContext.Provider>
  )
}

Swiper.PrevButton = SwiperPrevButton
Swiper.NextButton = SwiperNextButton
Swiper.Slides = SwiperSlides

Swiper.displayName = 'Swiper'
