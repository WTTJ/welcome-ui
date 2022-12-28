import React, { useCallback, useRef } from 'react'
import { Composite, CompositeItem, useCompositeState } from 'ariakit/composite'
import { LeftIcon, RightIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { usePages } from './utils'
import * as S from './styles'

export interface PaginationOptions {
  'aria-label': string
  getHref?: (page: string | number) => string
  leftArrow?: React.ReactElement
  onChange: (page: string | number) => void
  page: number
  pageCount: number
  rangeDisplay?: number
  rightArrow?: React.ReactElement
}

export type PaginationProps = CreateWuiProps<'ul', PaginationOptions>

export const Pagination = forwardRef<'ul', PaginationProps>(
  (
    {
      'aria-label': ariaLabel,
      getHref,
      leftArrow,
      onChange,
      page,
      pageCount,
      rangeDisplay = 5,
      rightArrow,
    },
    ref
  ) => {
    const compositeState = useCompositeState()
    const pages = usePages({ page, pageCount, rangeDisplay })
    const firstPageRef = useRef<HTMLButtonElement>(null)
    const lastPageRef = useRef<HTMLButtonElement>(null)

    const handlePrevious = useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault()
        const previousPage = page - 1

        if (previousPage === 1) {
          firstPageRef.current.focus()
        }

        onChange(previousPage)
      },
      [page, onChange]
    )

    const handleNext = useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault()
        const nextPage = page + 1

        if (nextPage === pageCount) {
          lastPageRef.current.focus()
        }

        onChange(nextPage)
      },
      [page, pageCount, onChange]
    )

    const handleItemClick = (event: React.ChangeEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      onChange(Number(event.target.ariaLabel))
    }

    return (
      <S.Pagination aria-label={ariaLabel} ref={ref} role="navigation">
        <S.List>
          <S.Item>
            <Composite state={compositeState}>
              <CompositeItem
                as={S.ArrowLink}
                disabled={page === 1}
                href={getHref && getHref(page - 1)}
                onClick={handlePrevious}
              >
                {leftArrow || <LeftIcon size="sm" />}
              </CompositeItem>
            </Composite>
          </S.Item>
          {pages.map((iPage: string | number, i: number) =>
            iPage === '-' ? (
              // eslint-disable-next-line react/no-array-index-key
              <S.Item key={`${i}-`}>
                <S.Dots>...</S.Dots>
              </S.Item>
            ) : (
              <S.Item key={iPage}>
                <Composite state={compositeState}>
                  <CompositeItem
                    aria-current={iPage === page}
                    aria-label={iPage}
                    as={S.PageLink}
                    href={getHref && getHref(iPage)}
                    onClick={handleItemClick}
                    ref={iPage === 1 ? firstPageRef : iPage === pageCount ? lastPageRef : null}
                  >
                    {iPage}
                  </CompositeItem>
                </Composite>
              </S.Item>
            )
          )}
          <S.Item>
            <Composite state={compositeState}>
              <CompositeItem
                as={S.ArrowLink}
                disabled={page === pageCount}
                href={getHref && getHref(page + 1)}
                onClick={handleNext}
              >
                {rightArrow || <RightIcon size="sm" />}
              </CompositeItem>
            </Composite>
          </S.Item>
        </S.List>
      </S.Pagination>
    )
  }
)
