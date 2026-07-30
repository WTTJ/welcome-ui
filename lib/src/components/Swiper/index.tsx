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

export { swiperStyles as swiperClasses }

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
    ref: React.RefObject<HTMLUListElement | null>
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
  const ref = useRef<HTMLUListElement | null>(null)
  const hasInitializedRef = useRef(false)
  // Pending frame of the deferred initial scroll, `undefined` once it has run.
  const initFrameRef = useRef<number>()
  // Swallows the scroll-snap correction that follows our own initial scroll.
  const skipSnapBackRef = useRef(false)
  const skipNextPageScrollRef = useRef(false)
  // Read inside the deferred frame so it reflects the viewport-corrected perView.
  const firstPageToShowRef = useRef(0)

  const [slidesLength, setSlidesLength] = useState(0)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const numberOfPage = Math.ceil(slidesLength / slides.currentSlidesPerView) || 1

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
      const childWidth = children?.[0]?.getBoundingClientRect()?.width

      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > slides.gap)

      const nextPage = isLastPage
        ? numberOfPage - 1
        : Math.round(scrollLeft / ((childWidth + slides.gap) * slides.currentSlidesPerView))

      if (nextPage !== currentPage) {
        setCurrentPage(nextPage)
      }
    }
  }, [numberOfPage, currentPage, slides.currentSlidesPerView, ref, setCurrentPage, slides.gap])

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        // Navigation state should always reflect the real geometry, guard or not
        getNavigationState()

        if (skipSnapBackRef.current) {
          skipSnapBackRef.current = false

          return
        }

        updatePage()
      }, 100),
    [getNavigationState, updatePage]
  )

  // Cancel exactly one pending call on unmount. Depending on `[handleScroll]`
  // would drop legitimate updates, since it is re-memoized on every
  // `currentPage` change — that is, mid-swipe.
  const handleScrollRef = useRef(handleScroll)
  handleScrollRef.current = handleScroll

  useEffect(() => () => handleScrollRef.current.cancel(), [])

  // Navigation functions

  const goTo = useCallback(
    (page: number, isFirstInit = false) => {
      const sliderContainer = ref?.current
      const childWidth = sliderContainer?.children?.[0]?.getBoundingClientRect()?.width || 0

      sliderContainer?.scrollTo({
        // We don't want to have a scroll effect when we first render the swiper
        behavior: !isFirstInit ? 'smooth' : 'auto',
        left: page * (childWidth + slides.gap) * slides.currentSlidesPerView,
        top: 0,
      })
    },
    [slides.currentSlidesPerView, slides.gap, ref]
  )

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === numberOfPage - 1

  const goNext = useCallback(() => {
    if (autoplay.enabled && autoplay.loop && isLastPage) {
      goTo(0)
    } else {
      goTo(currentPage + 1)
    }
  }, [currentPage, goTo, isLastPage, autoplay.enabled, autoplay.loop])

  const goPrev = useCallback(() => {
    if (isFirstPage && autoplay.enabled && autoplay.loop) {
      goTo(numberOfPage - 1)
    } else {
      goTo(currentPage - 1)
    }
  }, [numberOfPage, currentPage, goTo, isFirstPage, autoplay.enabled, autoplay.loop])

  // Add autoplay
  useInterval(
    () => {
      if (autoplay.enabled) {
        goNext()
      }
    },
    autoplay.enabled ? autoplay.duration : null
  )

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

  const pageForInitialIndex =
    slides.alignment === 'center'
      ? // if centeredSlides is true, we calculate which number is the middle page
        Math.floor(numberOfPage / 2)
      : // if centeredSlides is false, we calculate on which page the number in firstSlideToShow props is
        Math.ceil(slides.initialIndex / slides.currentSlidesPerView) - 1

  // `initialIndex` is 1-based, so its default of `0` computes to page -1, and a
  // value past the last slide would scroll beyond the end and then fight the
  // `isLastPage` branch of `updatePage`. An explicit `initialIndex: undefined`
  // shadows the default and computes to NaN, so guard that too.
  const firstPageToShow = Number.isFinite(pageForInitialIndex)
    ? Math.min(Math.max(pageForInitialIndex, 0), numberOfPage - 1)
    : 0

  firstPageToShowRef.current = firstPageToShow

  useEffect(() => {
    // Only navigate to the initial page once, when slidesLength is first known.
    // `hasInitializedRef` is set synchronously as it also gates the
    // external-`setCurrentPage` effect below.
    if (!slidesLength || hasInitializedRef.current) {
      return
    }

    hasInitializedRef.current = true

    // The scroll must land after the first paint: issued during the first layout
    // pass it is reverted to 0 by the browser's `scroll-snap-type: x mandatory`
    // correction. One frame is not enough — a callback scheduled from a passive
    // effect still runs before the next paint. The second frame also lets
    // `useViewportSize` commit, so `firstPageToShowRef` is breakpoint-correct.
    initFrameRef.current = requestAnimationFrame(() => {
      initFrameRef.current = requestAnimationFrame(() => {
        initFrameRef.current = undefined

        const initialPage = firstPageToShowRef.current

        // The track already starts on the first page, so it needs no scroll
        if (initialPage <= 0) {
          return
        }

        skipSnapBackRef.current = true
        goTo(initialPage, true)
        // `currentPage` is otherwise only synced by the scroll handler, which we
        // just told to skip this scroll, so set it here.
        skipNextPageScrollRef.current = true
        setCurrentPage(initialPage)
      })
    })

    return () => {
      if (initFrameRef.current === undefined) {
        return
      }

      // The deferred scroll never ran (unmount, or a StrictMode remount) — let
      // the next mount schedule it again
      cancelAnimationFrame(initFrameRef.current)
      initFrameRef.current = undefined
      hasInitializedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesLength])

  // if the childrens changed we need to check again the arrow states
  useEffect(() => {
    getNavigationState()
  }, [getNavigationState, children])

  // Triggers navigation when currentPage is changed by external setCurrentPage calls
  useEffect(() => {
    if (skipNextPageScrollRef.current) {
      // The initial scroll already put us on this page, no need to scroll again
      skipNextPageScrollRef.current = false

      return
    }

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

// Attach compound components
Swiper.PrevButton = SwiperPrevButton
Swiper.NextButton = SwiperNextButton
Swiper.Slides = SwiperSlides

Swiper.displayName = 'Swiper'
