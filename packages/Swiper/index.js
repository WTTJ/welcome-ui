import React, { memo, useCallback, useMemo, useState } from 'react'
import { func, node, string } from 'prop-types'

import * as S from './styles'

export const Swiper = memo(function Swiper({
  children,
  keyPrefix = 'swiper',
  renderNextButton,
  renderPaginationItem,
  renderPrevButton,
  ...props
}) {
  const [pageIdx, setPageIdx] = useState(0)

  const maxSlides = useMemo(() => children.length, [children])

  const nextPage = useCallback(() => {
    const nextPageIdx = pageIdx + 1

    if (nextPageIdx < maxSlides) {
      setPageIdx(nextPageIdx)
    }
  }, [pageIdx, maxSlides])

  const prevPage = useCallback(() => {
    const prevPageIdx = pageIdx - 1

    if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
    }
  }, [pageIdx])

  const translateX = -(pageIdx * 100)

  return (
    <S.SwiperWrapper {...props}>
      <S.Swiper translateX={translateX}>{children}</S.Swiper>
      <S.PaginationWrapper>
        {children.map((_, idx) =>
          renderPaginationItem ? (
            renderPaginationItem(idx, { onClick: () => setPageIdx(idx), active: idx === pageIdx })
          ) : (
            <S.PaginationBullet
              active={idx === pageIdx}
              // eslint-disable-next-line react/no-array-index-key
              key={`${keyPrefix}-bullet-${idx}`}
              onClick={() => setPageIdx(idx)}
            />
          )
        )}
      </S.PaginationWrapper>
      <S.PrevWrapper onClick={prevPage}>{renderPrevButton && renderPrevButton()}</S.PrevWrapper>
      <S.NextWrapper onClick={nextPage}>{renderNextButton && renderNextButton()}</S.NextWrapper>
    </S.SwiperWrapper>
  )
})

Swiper.Page = S.SwiperPage

Swiper.propTypes = {
  children: node,
  keyPrefix: string,
  renderNextButton: func,
  renderPaginationItem: func,
  renderPrevButton: func
}
