import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react'
import { Icons } from '@welcome-ui/icons.font'
import debounce from 'lodash.debounce'
import { useViewportSize } from '@welcome-ui/utils'
import { useTheme } from '@xstyled/styled-components'
import { CreateWuiProps } from '@welcome-ui/system'

import { useInterval } from './use-interval'
import * as S from './styles'

export interface SwiperOptions {
  autoplay?: boolean
  /** If true the swiper will begin at the middle */
  centeredSlides?: boolean
  children: JSX.Element | JSX.Element[]
  dataTestId?: string
  duration?: number
  /** Won't be used if centeredSlides is true */
  firstSlideToShow?: number
  fullWidth?: boolean
  id?: string
  loop?: boolean
  /** Number of slides to show per view */
  slidesPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  /** Space between each slides */
  spaceBetween?: number
  /** Show left and rigth arrows on mobile/tablet or/and desktop */
  withArrows?: {
    mobile: boolean
    desktop: boolean
  }
  /** Use black colors for the pagination in case of slides too bright */
  withDarkPagination?: boolean
  /** Show bottom navigation on mobile/tablet or/and desktop */
  withPagination?: {
    mobile: boolean
    desktop: boolean
  }
}

export type SwiperProps = CreateWuiProps<'div', SwiperOptions>

export const Swiper = ({
  centeredSlides = false,
  children,
  dataTestId,
  firstSlideToShow = 0,
  fullWidth = false,
  id = 'swiper',
  slidesPerView = { mobile: 1, tablet: 1, desktop: 1 },
  spaceBetween = 20,
  withArrows = { mobile: true, desktop: true },
  withPagination = { mobile: false, desktop: false },
  loop = false,
  autoplay = false,
  duration = 5000,
  withDarkPagination = false,
  ...rest
}: SwiperProps) => {
  loop = loop || autoplay

  const { width: viewportWidth } = useViewportSize()
  const [currentPage, setCurrentPage] = useState(0)
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(slidesPerView.desktop)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const ref = useRef<HTMLUListElement>()
  const theme = useTheme()

  const slides = Children.map(children, (child, i) => {
    const key = `${id}-${i}`
    return cloneElement(child, {
      ...child.props,
      id: key,
      key,
      'aria-hidden': Math.ceil((i + 1) / currentSlidesPerView) - 1 !== currentPage,
      'aria-roledescription': 'slide',
      'aria-label': `${i + 1} of ${Children.toArray(children).length}`,
    })
  })
  const slidesLength = slides.length

  const numberOfPage = Math.ceil(slidesLength / currentSlidesPerView)
  const bullets = Array.from(Array(numberOfPage).keys())
  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === bullets.length - 1

  const firstPageToShow = centeredSlides
    ? // if centeredSlides is true, we calculate which number is the middle page
      Math.floor(numberOfPage / 2)
    : // if centeredSlides is false, we calculate on which page the number in firstSlideToShow props is
      Math.ceil(firstSlideToShow / currentSlidesPerView) - 1

  const getArrowStates = () => {
    const sliderContainer = ref?.current
    if (sliderContainer && !loop) {
      const { offsetWidth, scrollLeft, scrollWidth } = sliderContainer
      const isFirstPage = !(scrollLeft > spaceBetween)
      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > spaceBetween)

      setShowLeftArrow(!isFirstPage)
      setShowRightArrow(!isLastPage)
    } else {
      setShowLeftArrow(true)
      setShowRightArrow(true)
    }
  }

  const updatePage = () => {
    const sliderContainer = ref?.current
    if (sliderContainer) {
      const { children, offsetWidth, scrollLeft, scrollWidth } = sliderContainer
      const childWidth = children?.[0]?.getBoundingClientRect()?.width

      const isLastPage = !(scrollWidth - (scrollLeft + offsetWidth) > spaceBetween)
      const nextPage = isLastPage
        ? bullets.length - 1
        : scrollLeft / Math.round((childWidth + spaceBetween) * currentSlidesPerView)

      if (nextPage !== currentPage) {
        setCurrentPage(nextPage)
      }
    }
  }

  const handleScroll = debounce(() => {
    getArrowStates()
    updatePage()
  }, 100)

  const goTo = (page: number) => {
    const sliderContainer = ref?.current
    const childWidth = sliderContainer?.children?.[0]?.getBoundingClientRect()?.width

    sliderContainer?.scrollTo({
      left: page * (childWidth + spaceBetween) * currentSlidesPerView,
      top: 0,
      behavior: 'smooth',
    })
  }

  const goNext = () => {
    if (loop && isLastPage) {
      goTo(0)
    } else {
      goTo(currentPage + 1)
    }
  }

  const goPrev = () => {
    if (isFirstPage && loop) {
      goTo(bullets.length - 1)
    } else {
      goTo(currentPage - 1)
    }
  }

  const handleKeys = (e: KeyboardEvent) => {
    if (e.code === 'ArrowLeft') {
      goPrev()
    }

    if (e.code === 'ArrowRight') {
      goNext()
    }
  }

  const getCurrentSlidesPerView = useCallback(() => {
    if (viewportWidth <= theme.screens.md) {
      setCurrentSlidesPerView(slidesPerView.mobile)
    } else if (viewportWidth <= theme.screens.lg) {
      setCurrentSlidesPerView(slidesPerView.tablet)
    } else {
      setCurrentSlidesPerView(slidesPerView.desktop)
    }
  }, [slidesPerView, theme.screens.lg, theme.screens.md, viewportWidth])

  // Add autoplay
  useInterval(
    () => {
      if (autoplay) {
        goNext()
      }
    },
    autoplay ? duration : null
  )

  useEffect(() => {
    goTo(firstPageToShow)
    getArrowStates()

    window.addEventListener('keydown', handleKeys)

    return () => window.removeEventListener('keydown', handleKeys)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getCurrentSlidesPerView()
  }, [getCurrentSlidesPerView, viewportWidth])

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
        data-testid={dataTestId && `${dataTestId}-prev-button`}
        disabled={!showLeftArrow}
        left={10}
        onClick={goPrev}
        position="absolute"
        shape="circle"
        variant="ghost"
        withArrows={withArrows}
      >
        <Icons.Left />
      </S.Arrow>
      <S.Arrow
        data-testid={dataTestId && `${dataTestId}-next-button`}
        disabled={!showRightArrow}
        onClick={goNext}
        position="absolute"
        right={10}
        shape="circle"
        variant="ghost"
        withArrows={withArrows}
      >
        <Icons.Right />
      </S.Arrow>
      <S.Pagination
        className="swiper-pagination"
        data-testid={dataTestId && `${dataTestId}-pagination`}
        role="tablist"
        withPagination={withPagination}
      >
        {bullets.length > 1 &&
          bullets.map((_, idx) => {
            const props = {
              idx,
              role: 'tab',
              'aria-controls': `${id}-${idx}`,
              'aria-label': `${idx + 1} of ${bullets.length}`,
              'aria-selected': idx === currentPage,
              onClick: () => goTo(idx),
            }

            return (
              <S.Bullet
                active={idx === currentPage}
                key={`bullet-${idx + 1}`}
                withDarkPagination={withDarkPagination}
                {...props}
              />
            )
          })}
      </S.Pagination>
    </S.Swiper>
  )
}

Swiper.displayName = 'Swiper'
