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
    nextButton,
    pageIdx,
    prevButton,
    renderPaginationItem,
    setNumberOfSlides,
    setPageIdx,
    slidesToShow,
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
            'aria-label': `${i + 1} of ${children.length || children.size}`
          })
        )}
      </S.Swiper>
      <S.Pagination data-testid={dataTestId && `${dataTestId}-pagination`}>
        <Pagination
          id={id}
          pageIdx={pageIdx}
          renderPaginationItem={renderPaginationItem}
          setPageIdx={setPageIdx}
        >
          {children}
        </Pagination>
      </S.Pagination>
      {prevButton && (
        <S.Prev
          aria-controls={id}
          aria-label="Previous slide"
          data-testid={dataTestId && `${dataTestId}-button-prev`}
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
          onClick={goNext}
        >
          {nextButton}
        </S.Next>
      )}
    </S.Wrapper>
  )
})

const Pagination = ({ children, id, pageIdx, renderPaginationItem, setPageIdx }) => {
  return children.map((_, idx) => {
    if (renderPaginationItem) {
      return renderPaginationItem(idx, {
        onClick: () => setPageIdx(idx),
        active: idx === pageIdx
      })
    }
    return (
      <S.Bullet
        active={idx === pageIdx}
        aria-controls={id}
        aria-label={`${idx + 1} of ${children.length || children.size}`}
        aria-selected={idx === pageIdx}
        // eslint-disable-next-line react/no-array-index-key
        key={idx}
        onClick={() => setPageIdx(idx)}
      />
    )
  })
}

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
    const nextPageIdx = pageIdx + slidesToSwipe

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

  return { goNext, goPrev, pageIdx, setNumberOfSlides, setPageIdx, slidesToShow, ...rest }
}

Swiper.propTypes = {
  children: node,
  dataTestId: string,
  goNext: func,
  goPrev: func,
  id: string,
  loop: bool,
  nextButton: func,
  pageIdx: number,
  prevButton: func,
  renderPaginationItem: func,
  setNumberOfSlides: func,
  setPageIdx: func,
  slidesToShow: number,
  slidesToSwipe: number
}
