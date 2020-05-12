import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { bool, func, node } from 'prop-types'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import * as S from './styles'

export const Slider = memo(function Slider({
  children,
  disablePagination = false,
  renderNextButton,
  renderPagination,
  renderPrevButton
}) {
  const [swiper, setSwiper] = useState(null)
  const [currentPageIndex, setCurrentPageIndex] = useState(0)

  const pagination = useMemo(() => ({ el: '#pagination' }), [])

  const navigation = useMemo(
    () => ({
      nextEl: '#next',
      prevEl: '#prev'
    }),
    []
  )

  const handlePaginationRender = useCallback(
    ({ pagination }) => {
      if (!swiper || disablePagination) {
        return null
      }
      // ugly but slides are provided as object instead of array
      const numberOfSlides = swiper.slides.length
      return (
        <S.PaginationWrapper id={pagination.el}>
          {Array(numberOfSlides)
            .fill('')
            .map((_, idx) =>
              renderPagination ? (
                renderPagination(idx)
              ) : (
                <S.PaginationBullet
                  active={idx === currentPageIndex}
                  onClick={() => swiper.slideTo(idx)}
                />
              )
            )}
        </S.PaginationWrapper>
      )
    },
    [swiper, disablePagination, renderPagination, currentPageIndex]
  )

  const handleNextButtonRender = useCallback(
    () => (
      <S.NextWrapper onClick={() => swiper.slideNext()}>
        {renderNextButton && renderNextButton()}
      </S.NextWrapper>
    ),
    [renderNextButton, swiper]
  )
  const handlePrevButtonRender = useCallback(
    () => (
      <S.PrevWrapper onClick={() => swiper.slidePrev()}>
        {renderPrevButton && renderPrevButton()}
      </S.PrevWrapper>
    ),
    [renderPrevButton, swiper]
  )

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setCurrentPageIndex(swiper.activeIndex)
      })
    }
  }, [swiper])

  return (
    <Swiper
      getSwiper={setSwiper}
      navigation={navigation}
      pagination={pagination}
      renderNextButton={handleNextButtonRender}
      renderPagination={handlePaginationRender}
      renderPrevButton={handlePrevButtonRender}
    >
      {children}
    </Swiper>
  )
})

Slider.propTypes = {
  children: node,
  disablePagination: bool,
  renderNextButton: func,
  renderPagination: func,
  renderPrevButton: func
}
