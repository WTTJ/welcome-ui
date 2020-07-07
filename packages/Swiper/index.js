import React, { memo, useState } from 'react'
import { bool, func, node, number, string } from 'prop-types'
import { useTheme } from '@xstyled/styled-components'
import { useViewportSize } from '@welcome-ui/utils'

import * as S from './styles'

export const Swiper = memo(function Swiper({
  children,
  keyPrefix = 'swiper',
  loop,
  renderNextButton,
  renderPaginationItem,
  renderPrevButton,
  slidesToShow = 1,
  slidesToSwipe = slidesToShow,
  ...props
}) {
  const [pageIdx, setPageIdx] = useState(0)

  const maxSlides = children.length

  // Set slidesToShow to 1 for mobile
  const theme = useTheme()
  const { width: viewportWidth } = useViewportSize()
  if (viewportWidth <= theme.breakpoints.sm) {
    slidesToShow = 1
    slidesToSwipe = 1
  }

  const nextPage = () => {
    const nextPageIdx = pageIdx + slidesToSwipe

    if (nextPageIdx < maxSlides) {
      setPageIdx(nextPageIdx)
    } else if (loop) {
      setPageIdx(0)
    }
  }

  const prevPage = () => {
    const prevPageIdx = pageIdx - slidesToSwipe

    if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
    } else if (maxSlides - 1 >= 0 && loop) {
      setPageIdx(maxSlides - 1)
    }
  }

  const translateX = -(pageIdx * 100)

  return (
    <S.Wrapper {...props}>
      <S.Swiper slidesToShow={slidesToShow} translateX={translateX}>
        {children}
      </S.Swiper>
      <S.Pagination>
        {children.map((_, idx) =>
          renderPaginationItem ? (
            renderPaginationItem(idx, { onClick: () => setPageIdx(idx), active: idx === pageIdx })
          ) : (
            <S.Bullet
              active={idx === pageIdx}
              // eslint-disable-next-line react/no-array-index-key
              key={`${keyPrefix}-bullet-${idx}`}
              onClick={() => setPageIdx(idx)}
            />
          )
        )}
      </S.Pagination>
      <S.Prev onClick={prevPage}>{renderPrevButton && renderPrevButton()}</S.Prev>
      <S.Next onClick={nextPage}>{renderNextButton && renderNextButton()}</S.Next>
    </S.Wrapper>
  )
})

Swiper.Slide = S.Slide
Swiper.Bullet = S.Bullet

Swiper.propTypes = {
  children: node,
  keyPrefix: string,
  loop: bool,
  renderNextButton: func,
  renderPaginationItem: func,
  renderPrevButton: func,
  slidesToShow: number,
  slidesToSwipe: number
}
