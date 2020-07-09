import React, { cloneElement, forwardRef, useEffect, useState } from 'react'
import { bool, func, node, number, string } from 'prop-types'
import { useTheme } from '@xstyled/styled-components'
import { useViewportSize } from '@welcome-ui/utils'

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
  let { loop, slidesToShow = 1, slidesToSwipe = slidesToShow, ...rest } = props

  // Set slidesToShow to 1 for mobile
  const theme = useTheme()
  const { width: viewportWidth } = useViewportSize()
  if (viewportWidth <= theme.breakpoints.sm) {
    slidesToShow = 1
    slidesToSwipe = 1
  }

  const [numberOfSlides, setNumberOfSlides] = useState(0)
  const [pageIdx, setPageIdx] = useState(0)

  const goNext = () => {
    let nextPageIdx
    if (loop) {
      nextPageIdx = pageIdx + slidesToSwipe
    } else {
      nextPageIdx = Math.min(pageIdx + slidesToSwipe, numberOfSlides - slidesToSwipe)
    }

    if (nextPageIdx < numberOfSlides) {
      setPageIdx(nextPageIdx)
    } else if (loop) {
      setPageIdx(0)
    }
  }

  const goPrev = () => {
    const prevPageIdx = pageIdx - slidesToSwipe

    if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
    } else if (numberOfSlides - 1 >= 0 && loop) {
      setPageIdx(numberOfSlides - 1)
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

Swiper.propTypes = {
  children: node,
  dataTestId: string,
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
