import React, { cloneElement, forwardRef, ReactNode, useEffect, useState } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { useViewportSize } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'

import { useInterval } from './use-interval'
import * as S from './styles'

export interface RenderPaginationProps {
  idx: number
  'aria-controls': React.HTMLAttributes<HTMLElement>['aria-controls']
  'aria-label': React.HTMLAttributes<HTMLElement>['aria-label']
  'aria-selected': React.HTMLAttributes<HTMLElement>['aria-selected']
  onClick: () => void
  pageIdx: number
}

export interface UseSwiperProps {
  autoplay?: boolean
  duration?: number
  loop?: boolean
  slidesToShow?: number
  slidesToSwipe?: number
  nextButton?: ReactNode
  prevButton?: ReactNode
}

export interface UseSwiperState {
  goNext: React.MouseEventHandler<HTMLDivElement>
  goPrev: React.MouseEventHandler<HTMLDivElement>
  loop: boolean
  numberOfSlides: number
  pageIdx: number
  setNumberOfSlides: (slidesLength: number) => void
  setPageIdx: (idx: number) => void
  slidesToShow: number
  slidesToSwipe: number
  nextButton?: ReactNode
  prevButton?: ReactNode
}

export interface SwiperOptions {
  renderPaginationItem?: (props: RenderPaginationProps) => ReactNode
  children: React.ReactNode[]
}

export type SwiperProps = SwiperOptions &
  UseSwiperState &
  React.HTMLAttributes<HTMLDivElement> &
  WuiProps

export const SwiperComponent = forwardRef<HTMLDivElement, SwiperProps>((props, ref) => {
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

  // Get array with indexes of visible slides so we know which ones are (aria-)hidden
  const visibleSlides = Array(slidesToShow)
    .fill('')
    .map((_, idx) => pageIdx + idx)

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
        {children.map((child, idx) =>
          cloneElement(child as React.ReactElement, {
            key: idx,
            role: 'group',
            'aria-hidden': !visibleSlides.includes(idx),
            'aria-readonly': true,
            'aria-roledescription': 'slide',
            'aria-label': `${idx + 1} of ${numberOfSlides}`,
          })
        )}
      </S.Swiper>
      <S.Pagination
        className="swiper-pagination"
        data-testid={dataTestId && `${dataTestId}-pagination`}
      >
        {children.map((_, idx) => {
          const props: RenderPaginationProps = {
            idx,
            'aria-controls': id,
            'aria-label': `${idx + 1} of ${numberOfSlides}`,
            'aria-selected': idx === pageIdx,
            onClick: () => setPageIdx(idx),
            pageIdx,
          }
          if (renderPaginationItem) {
            return renderPaginationItem(props)
          }
          // eslint-disable-next-line react/no-array-index-key
          return <S.Bullet active={idx === pageIdx} key={idx} {...props} />
        })}
      </S.Pagination>
      {prevButton && (
        <S.Prev
          aria-controls={id}
          aria-label="Previous slide"
          className="swiper-prev"
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
          className="swiper-next"
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

SwiperComponent.displayName = 'Swiper'

export const Swiper = Object.assign(SwiperComponent, { Slide: S.Slide, Bullet: S.Bullet })

export const useSwiper = (props: UseSwiperProps = {}): UseSwiperState => {
  const { autoplay, duration = 5000, loop, ...rest } = props
  let { slidesToShow = 1, slidesToSwipe = slidesToShow } = props

  // Set slidesToShow to 1 for mobile
  const theme = useTheme()
  const { width: viewportWidth } = useViewportSize()
  if (viewportWidth <= theme.screens.sm) {
    slidesToShow = 1
    slidesToSwipe = 1
  }

  const [numberOfSlides, setNumberOfSlides] = useState(0)
  const [pageIdx, setPageIdx] = useState(0)

  const lastSlideIdx = numberOfSlides ? numberOfSlides - slidesToShow : 0

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
    const nextPageIdx = Math.min(pageIdx + slidesToSwipe, lastSlideIdx)

    if (pageIdx === lastSlideIdx && loop) {
      setPageIdx(0)
    } else if (nextPageIdx <= lastSlideIdx) {
      setPageIdx(nextPageIdx)
    }
  }

  const goPrev = () => {
    const prevPageIdx = Math.max(pageIdx - slidesToSwipe, 0)

    if (pageIdx === 0 && loop) {
      setPageIdx(lastSlideIdx)
    } else if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
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
    ...rest,
  }
}
