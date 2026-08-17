import debounce from 'lodash.debounce'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type { SwiperContextValue, SwiperProps } from './types'
import { useInitialScroll } from './useInitialScroll'
import { useInterval } from './utils'

export const useSwiperViewModel = ({ children, store }: SwiperProps): SwiperContextValue => {
  const { autoplay, navigation, slides } = store
  const { currentPage, setCurrentPage } = slides
  const ref = useRef<HTMLUListElement | null>(null)

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

  const consumeSnapBackSkip = useInitialScroll({
    alignment: slides.alignment,
    currentPage,
    currentSlidesPerView: slides.currentSlidesPerView,
    goTo,
    initialIndex: slides.initialIndex,
    numberOfPage,
    setCurrentPage,
    slidesLength,
  })

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        // Navigation state should always reflect the real geometry, guard or not
        getNavigationState()

        if (consumeSnapBackSkip()) {
          return
        }

        updatePage()
      }, 100),
    [getNavigationState, updatePage, consumeSnapBackSkip]
  )

  // Cancel exactly one pending call on unmount. Depending on `[handleScroll]`
  // would drop legitimate updates, since it is re-memoized on every
  // `currentPage` change — that is, mid-swipe.
  const handleScrollRef = useRef(handleScroll)
  handleScrollRef.current = handleScroll

  useEffect(() => () => handleScrollRef.current.cancel(), [])

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

  // if the childrens changed we need to check again the arrow states
  useEffect(() => {
    getNavigationState()
  }, [getNavigationState, children])

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

  return contextValue
}
