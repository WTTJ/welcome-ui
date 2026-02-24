import { Children, cloneElement, type CSSProperties, useEffect } from 'react'

import { classNames } from '@/utils'

import { useSwiperContext } from '..'
import styles from '../swiper.module.scss'
import type { SwiperSlidesProps } from '../types'
import { getSlideWidth } from '../utils'

const cx = classNames(styles)

export const SwiperSlides = ({ children }: SwiperSlidesProps) => {
  const {
    slides: {
      currentPage,
      currentSlidesPerView,
      expandOnLargeScreens,
      gap,
      handleScroll,
      id,
      isLastPage,
      length,
      perView,
      ref,
      setLength,
    },
  } = useSwiperContext()

  const slidesArray = Children.toArray(children)

  // Report slides length to parent context
  useEffect(() => {
    setLength(slidesArray.length)
  }, [slidesArray.length, setLength])

  const slides = Children.map(slidesArray, (child, i) => {
    const key = `${id}-${i}`
    const currentSlide = i + 1
    const pageForThisSlide = Math.ceil(currentSlide / currentSlidesPerView) - 1
    // item can be visible on the last page even if it isn't on the current page due to the automatic filling of the last page
    const isHidden = isLastPage
      ? length - currentSlide >= currentSlidesPerView
      : pageForThisSlide !== currentPage

    if (typeof child === 'object' && child && 'props' in child) {
      return cloneElement(child, {
        ...child.props,
        'aria-hidden': isHidden,
        'aria-label': `${currentSlide} of ${length}`,
        'aria-roledescription': 'slide',
        id: key,
        key,
      })
    }
    return child
  })

  return (
    <ul
      className={cx(
        'container',
        perView.mobile && 'container-mobile',
        perView.desktop && 'container-desktop',
        perView.tablet && 'container-tablet',
        perView.desktop && expandOnLargeScreens && 'container-full-width'
      )}
      onScroll={handleScroll}
      ref={ref}
      style={
        {
          '--slideDesktop': perView.desktop,
          '--slideMobile': perView.mobile,
          '--slideTablet': perView.tablet,
          '--slideWidthDesktop': getSlideWidth(perView.desktop, gap),
          '--slideWidthMobile': getSlideWidth(perView.mobile, gap),
          '--slideWidthTablet': getSlideWidth(perView.tablet, gap),
          '--slideWithDesktopFullWidth': getSlideWidth(perView.desktop + 2, gap),
          '--spaceBetween': `${gap / 16}rem`,
        } as CSSProperties
      }
    >
      {slides}
    </ul>
  )
}
