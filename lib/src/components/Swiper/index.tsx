import debounce from 'lodash.debounce'
import type { CSSProperties } from 'react'
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@/components/Button'
import { LeftIcon, RightIcon } from '@/components/Icon'
import { classNames } from '@/utils'
import { useScreens } from '@/utils/use-screens'
import { useViewportSize } from '@/utils/use-viewport'

import swiperStyles from './swiper.module.scss'
import type { SwiperProps, UseSwiperOptions } from './types'
import { getSlideWidth, useInterval } from './utils'

const cx = classNames(swiperStyles)

export const useSwiper = (options: UseSwiperOptions = {}) => {
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
  const ref = useRef<HTMLUListElement>()
  const screens = useScreens()

  const currentSlidesPerView = useMemo(() => {
    if (viewportWidth <= screens.md) {
      return slidesPerView.mobile
    } else if (viewportWidth <= screens.lg) {
      return slidesPerView.tablet
    } else if (viewportWidth >= screens['4xl'] && fullWidth) {
      return slidesPerView.desktop + 2
    } else {
      return slidesPerView.desktop
    }
  }, [viewportWidth, screens, fullWidth, slidesPerView])

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

export const Swiper = ({ children, className, store, ...rest }: SwiperProps) => {
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
  const withNavigationMobile = withNavigation.mobile || false
  const withNavigationDesktop = withNavigation.desktop || false

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
      const childWidth = sliderContainer?.children?.[0]?.getBoundingClientRect()?.width

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
    autoplay ? duration : null
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
    <div className={cx('root', withDarkUI && 'dark', className)} {...rest}>
      <ul
        className={cx(
          'container',
          slidesPerView.mobile && 'container-mobile',
          slidesPerView.desktop && 'container-desktop',
          slidesPerView.tablet && 'container-tablet',
          slidesPerView.desktop && fullWidth && 'container-full-width'
        )}
        onScroll={handleScroll}
        ref={ref}
        style={
          {
            '--slideDesktop': slidesPerView.desktop,
            '--slideMobile': slidesPerView.mobile,
            '--slideTablet': slidesPerView.tablet,
            '--slideWidthDesktop': getSlideWidth(slidesPerView.desktop, spaceBetween),
            '--slideWidthMobile': getSlideWidth(slidesPerView.mobile, spaceBetween),
            '--slideWidthTablet': getSlideWidth(slidesPerView.tablet, spaceBetween),
            '--slideWithDesktopFullWidth': getSlideWidth(slidesPerView.desktop + 2, spaceBetween),
            '--spaceBetween': `${spaceBetween / 16}rem`,
          } as CSSProperties
        }
      >
        {slides}
      </ul>
      <Button
        aria-label="Previous slide"
        className={cx(
          'arrow',
          'arrow-left',
          !withDarkUI && 'arrow-background',
          withNavigationMobile && 'arrow-mobile',
          withNavigationDesktop && 'arrow-desktop'
        )}
        disabled={!showLeftArrow}
        onClick={goPrev}
        shape="circle"
        size={navigationSize}
        variant={withDarkUI ? 'secondary' : 'ghost'}
      >
        <LeftIcon />
      </Button>
      <Button
        aria-label="Next slide"
        className={cx(
          'arrow',
          'arrow-right',
          !withDarkUI && 'arrow-background',
          withNavigationMobile && 'arrow-mobile',
          withNavigationDesktop && 'arrow-desktop'
        )}
        disabled={!showRightArrow}
        onClick={goNext}
        shape="circle"
        size={navigationSize}
        variant={withDarkUI ? 'secondary' : 'ghost'}
      >
        <RightIcon />
      </Button>
      <div
        className={cx(
          'pagination',
          withPagination.mobile && 'pagination-mobile',
          withPagination.desktop && 'pagination-desktop'
        )}
        role="tablist"
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
              <div
                className={cx('bullet', idx === currentPage && 'bullet-active')}
                key={`bullet-${idx + 1}`}
                {...props}
              />
            )
          })}
      </div>
    </div>
  )
}
