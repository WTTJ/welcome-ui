import React, { memo, useState } from 'react'
import { bool, func, node, string } from 'prop-types'

import * as S from './styles'

export const Swiper = memo(function Swiper({
  children,
  keyPrefix = 'swiper',
  loop,
  renderNextButton,
  renderPaginationItem,
  renderPrevButton,
  ...props
}) {
  const [pageIdx, setPageIdx] = useState(0)

  const maxSlides = children.length

  const nextPage = () => {
    const nextPageIdx = pageIdx + 1

    if (nextPageIdx < maxSlides) {
      setPageIdx(nextPageIdx)
    } else if (loop) {
      setPageIdx(0)
    }
  }

  const prevPage = () => {
    const prevPageIdx = pageIdx - 1

    if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
    } else if (maxSlides - 1 >= 0 && loop) {
      setPageIdx(maxSlides - 1)
    }
  }

  const translateX = -(pageIdx * 100)

  return (
    <S.Wrapper {...props}>
      <S.Swiper translateX={translateX}>{children}</S.Swiper>
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
  renderPrevButton: func
}
