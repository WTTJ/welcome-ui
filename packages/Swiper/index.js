import React, { cloneElement, forwardRef, useEffect, useState } from 'react'
import { bool, func, node, number, string } from 'prop-types'
import { useTheme } from '@xstyled/styled-components'
import { useViewportSize } from '@welcome-ui/utils'

import { useInterval } from './use-interval'
import * as S from './styles'

export const Swiper = forwardRef((props, ref) => {
  const {
    children,
    dataTestId,
    goNext,
    goPrev,
    id = 'swiper',
    loop,
    nextButton,
    numberOfSlides,
    pageIdx,
    prevButton,
    renderPaginationItem,
    setNumberOfSlides,
    setPageIdx,
    slidesToShow,
    slidesToSwipe,
    ...rest
  } = props

  const translateX = -(pageIdx * 100)

  useEffect(() => {
    // TODO: Allow for immutable objects - remove when no longer needed
    setNumberOfSlides(children.length || children.size)
  }, [children, setNumberOfSlides])

  return (
    <S.Wrapper
      {...rest}
      aria-live="off"
      aria-roledescription="carousel"
      id={id}
      ref={ref}
      role="region"
    >
      <S.Swiper slidesToShow={slidesToShow} translateX={translateX}>
        {children.map((child, i) =>
          cloneElement(child, {
            key: i,
            role: 'group',
            'aria-hidden': i !== pageIdx,
            'aria-readonly': true,
            'aria-roledescription': 'slide',
            'aria-label': `${i + 1} of ${numberOfSlides}`
          })
        )}
      </S.Swiper>
      <S.Pagination data-testid={dataTestId && `${dataTestId}-pagination`}>
        {children.map((_, idx) => {
          const props = {
            active: idx === pageIdx,
            'aria-controls': id,
            'aria-label': `${idx + 1} of ${numberOfSlides}`,
            'aria-selected': idx === pageIdx,
            onClick: () => setPageIdx(idx)
          }
          if (renderPaginationItem) {
            return renderPaginationItem(idx, props)
          }
          // eslint-disable-next-line react/no-array-index-key
          return <S.Bullet key={idx} {...props} />
        })}
      </S.Pagination>
      {prevButton && (
        <S.Prev
          aria-controls={id}
          aria-label="Previous slide"
          data-testid={dataTestId && `${dataTestId}-button-prev`}
          disabled={!loop && pageIdx === 0}
          onClick={goPrev}
        >
          {prevButton}
        </S.Prev>
      )}
      {nextButton && (
        <S.Next
          aria-controls={id}
          aria-label="Next slide"
          data-testid={dataTestId && `${dataTestId}-button-next`}
          disabled={!loop && pageIdx >= numberOfSlides - slidesToSwipe}
          onClick={goNext}
        >
          {nextButton}
        </S.Next>
      )}
    </S.Wrapper>
  )
})

Swiper.Slide = S.Slide
Swiper.Bullet = S.Bullet
Swiper.displayName = 'Swiper'

export const useSwiper = (props = {}) => {
  let {
    autoplay,
    duration = 5000,
    loop,
    slidesToShow = 1,
    slidesToSwipe = slidesToShow,
    ...rest
  } = props

  // Set slidesToShow to 1 for mobile
  const theme = useTheme()
  const { width: viewportWidth } = useViewportSize()
  if (viewportWidth <= theme.breakpoints.sm) {
    slidesToShow = 1
    slidesToSwipe = 1
  }

  const [numberOfSlides, setNumberOfSlides] = useState(0)
  const [pageIdx, setPageIdx] = useState(0)

  const lastSlideIdx = numberOfSlides
    ? Math.ceil((numberOfSlides - slidesToShow) / slidesToSwipe) + 1
    : 0

  // Add autoplay
  useInterval(
    () => {
      if (autoplay) {
        goNext()
      }
    },
    autoplay ? duration : null
  )

  const goNext = () => {
    const nextPageIdx = pageIdx + slidesToSwipe

    if (nextPageIdx < lastSlideIdx) {
      setPageIdx(nextPageIdx)
    } else if (loop) {
      setPageIdx(0)
    }
  }

  const goPrev = () => {
    const prevPageIdx = pageIdx - slidesToSwipe

    if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
    } else if (loop) {
      setPageIdx(lastSlideIdx - 1)
    }
  }

  return {
    goNext,
    goPrev,
    loop,
    numberOfSlides,
    pageIdx,
    setNumberOfSlides,
    setPageIdx,
    slidesToShow,
    slidesToSwipe,
    ...rest
  }
}

Swiper.propTypes /* remove-proptypes */ = {
  autoplay: bool,
  children: node,
  dataTestId: string,
  duration: number,
  goNext: func,
  goPrev: func,
  id: string,
  loop: bool,
  nextButton: node,
  numberOfSlides: number,
  pageIdx: number,
  prevButton: node,
  renderPaginationItem: func,
  setNumberOfSlides: func,
  setPageIdx: func,
  slidesToShow: number,
  slidesToSwipe: number
}
