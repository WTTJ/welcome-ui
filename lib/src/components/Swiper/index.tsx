import { useTheme } from '@xstyled/styled-components'
import debounce from 'lodash.debounce'
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IconsFont } from '@/IconsFont'
import type { CreateWuiProps } from '@/System'

import { useViewportSize } from '../../utils/use-viewport'
import * as S from './styles'
import { useInterval } from './use-interval'

export interface UseSwiperProps {
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

export const useSwiper = (options: UseSwiperProps = {}) => {
  const {
    autoplay = false,
    centeredSlides = false,
    duration = 5000,
    firstSlideToShow = 0,
    fullWidth = false,
    id = 'swiper',
    loop = false,
    navigationSize = 'md',
    slidesPerView = { desktop: 1, mobile: 1, tablet: 1 },
    spaceBetween = 20,
    withDarkUI = false,
    withNavigation = { desktop: true, mobile: true },
    withPagination = { desktop: false, mobile: false },
  } = options

  const shouldLoop = loop || autoplay
  const { width: viewportWidth } = useViewportSize()
  const [currentPage, setCurrentPage] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const ref = useRef<HTMLUListElement | null>(null)
  const { screens } = useTheme()

  const currentSlidesPerView = useMemo(() => {
    if (viewportWidth) {
      if (viewportWidth <= screens.md) {
        return slidesPerView.mobile
      } else if (viewportWidth <= screens.lg) {
        return slidesPerView.tablet
      } else if (viewportWidth >= screens['4xl'] && fullWidth) {
        return slidesPerView.desktop + 2
      } else {
        return slidesPerView.desktop
      }
    } else {
      return slidesPerView.desktop
    }
  }, [fullWidth, viewportWidth, screens, slidesPerView])

  return {
    autoplay,
    centeredSlides,
    currentPage,
    currentSlidesPerView,
    duration,
    firstSlideToShow,
    fullWidth,
    id,
    navigationSize,
    ref,
    setCurrentPage,
    setShowLeftArrow,
    setShowRightArrow,
    shouldLoop,
    showLeftArrow,
    showRightArrow,
    slidesPerView,
    spaceBetween,
    withDarkUI,
    withNavigation,
    withPagination,
  }
}

export type SwiperInitialProps = {
  children: JSX.Element | JSX.Element[]
  dataTestId?: string
  store: UseSwiper
}

export type SwiperProps = CreateWuiProps<'div', SwiperInitialProps>

export type UseSwiper = ReturnType<typeof useSwiper>

export const Swiper = ({ children, dataTestId, store, ...rest }: SwiperProps) => {
  const {
    autoplay,
    centeredSlides,
    currentPage,
    currentSlidesPerView,
    duration,
    firstSlideToShow,
    fullWidth,
    id,
    navigationSize,
    ref,
    setCurrentPage,
    setShowLeftArrow,
    setShowRightArrow,
    shouldLoop,
    showLeftArrow,
    showRightArrow,
    slidesPerView,
    spaceBetween,
    withDarkUI,
    withNavigation,
    withPagination,
  } = store

  const slidesLength = Children.toArray(children).length
  const numberOfPage = Math.ceil(slidesLength / currentSlidesPerView)
  const bullets = Array.from(Array(numberOfPage).keys())

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === bullets.length - 1

  const slides = Children.map(children, (child, i) => {
    const key = `${id}-${i}`
    const currentSlide = i + 1
    const pageForThisSlide = Math.ceil(currentSlide / currentSlidesPerView) - 1
    // item can be visible on the last page even if it isn't on the current page due to the automatic filling of the last page
    const isHidden = isLastPage
      ? slidesLength - currentSlide >= currentSlidesPerView
      : pageForThisSlide !== currentPage

    return cloneElement(child, {
      ...child.props,
      'aria-hidden': isHidden,
      'aria-label': `${currentSlide} of ${slidesLength}`,
      'aria-roledescription': 'slide',
      id: key,
      key,
    })
  })

  const firstPageToShow = centeredSlides
    ? // if centeredSlides is true, we calculate which number is the middle page
      Math.floor(numberOfPage / 2)
    : // if centeredSlides is false, we calculate on which page the number in firstSlideToShow props is
      Math.ceil(firstSlideToShow / currentSlidesPerView) - 1

  const getArrowStates = useCallback(() => {
    const sliderContainer = ref?.current
    if (sliderContainer && !shouldLoop) {
      const { offsetWidth, scrollLeft, scrollWidth } = sliderContainer
      const isFirstPage = !(scrollLeft > spaceBetween)
      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > spaceBetween)

      setShowLeftArrow(!isFirstPage)
      setShowRightArrow(!isLastPage)
    } else {
      setShowLeftArrow(true)
      setShowRightArrow(true)
    }
  }, [ref, setShowLeftArrow, setShowRightArrow, shouldLoop, spaceBetween])

  const updatePage = () => {
    const sliderContainer = ref?.current
    if (sliderContainer) {
      const { children, offsetWidth, scrollLeft, scrollWidth } = sliderContainer
      const childWidth = children?.[0]?.getBoundingClientRect()?.width

      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > spaceBetween)

      const nextPage = isLastPage
        ? bullets.length - 1
        : Math.round(scrollLeft / ((childWidth + spaceBetween) * currentSlidesPerView))

      if (nextPage !== currentPage) {
        setCurrentPage(nextPage)
      }
    }
  }

  const handleScroll = debounce(() => {
    getArrowStates()
    updatePage()
  }, 100)

  const goTo = useCallback(
    (page: number, isFirstInit = false) => {
      const sliderContainer = ref?.current
      const childWidth = sliderContainer?.children?.[0]?.getBoundingClientRect()?.width || 0

      sliderContainer?.scrollTo({
        // We don't want to have a scroll effect when we first render the swiper
        behavior: !isFirstInit ? 'smooth' : 'auto',
        left: page * (childWidth + spaceBetween) * currentSlidesPerView,
        top: 0,
      })
    },
    [currentSlidesPerView, spaceBetween, ref]
  )

  const goNext = useCallback(() => {
    if (shouldLoop && isLastPage) {
      goTo(0)
    } else {
      goTo(currentPage + 1)
    }
  }, [currentPage, goTo, isLastPage, shouldLoop])

  const goPrev = useCallback(() => {
    if (isFirstPage && shouldLoop) {
      goTo(bullets.length - 1)
    } else {
      goTo(currentPage - 1)
    }
  }, [bullets.length, currentPage, goTo, isFirstPage, shouldLoop])

  // Add autoplay
  useInterval(
    () => {
      if (autoplay) {
        goNext()
      }
    },
    autoplay ? duration : 0
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

  useEffect(() => {
    goTo(firstPageToShow, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** if the childrens changed we need to check again the arrow states */
  useEffect(() => {
    getArrowStates()
  }, [getArrowStates, children])

  return (
    <S.Swiper data-testid={dataTestId} {...rest}>
      <S.Container
        fullWidth={fullWidth}
        onScroll={handleScroll}
        ref={ref}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
      >
        {slides}
      </S.Container>
      <S.Arrow
        aria-label="Previous slide"
        data-testid={dataTestId ? `${dataTestId}-prev-button` : null}
        disabled={!showLeftArrow}
        left={10}
        onClick={goPrev}
        position="absolute"
        shape="circle"
        size={navigationSize}
        variant={withDarkUI ? 'secondary' : 'ghost'}
        withDarkUI={withDarkUI}
        withNavigation={withNavigation}
      >
        <IconsFont.Left />
      </S.Arrow>
      <S.Arrow
        aria-label="Next slide"
        data-testid={dataTestId ? `${dataTestId}-next-button` : null}
        disabled={!showRightArrow}
        onClick={goNext}
        position="absolute"
        right={10}
        shape="circle"
        size={navigationSize}
        variant={withDarkUI ? 'secondary' : 'ghost'}
        withDarkUI={withDarkUI}
        withNavigation={withNavigation}
      >
        <IconsFont.Right />
      </S.Arrow>
      <S.Pagination
        className="swiper-pagination"
        data-testid={dataTestId ? `${dataTestId}-pagination` : null}
        role="tablist"
        withPagination={withPagination}
      >
        {bullets.length > 1 &&
          bullets.map((_, idx) => {
            const props = {
              'aria-controls': `${id}-${idx}`,
              'aria-label': `${idx + 1} of ${bullets.length}`,
              'aria-selected': idx === currentPage,
              idx,
              onClick: () => goTo(idx),
              role: 'tab',
            }

            return (
              <S.Bullet
                active={idx === currentPage}
                key={`bullet-${idx + 1}`}
                withDarkUI={withDarkUI}
                {...props}
              />
            )
          })}
      </S.Pagination>
    </S.Swiper>
  )
}

Swiper.displayName = 'Swiper'
export const StyledSwiper = S.Swiper
