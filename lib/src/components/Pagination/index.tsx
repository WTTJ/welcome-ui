import React, { useCallback, useRef } from 'react'

import { usePages } from './utils'
import * as S from './styles'

import { LeftIcon, RightIcon } from '@/Icons'
import { CreateWuiProps, forwardRef } from '@/System'

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
      dataTestId,
      getHref,
      leftArrow,
      onChange,
      page,
      pageCount,
      rangeDisplay = 5,
      rightArrow,
      ...rest
    },
    ref
  ) => {
    const pages = usePages({ page, pageCount, rangeDisplay })
    const firstPageRef = useRef<HTMLAnchorElement>(null)
    const lastPageRef = useRef<HTMLAnchorElement>(null)
    const isPrevButtonDisabled = page === 1
    const isNextButtonDisabled = page === pageCount

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

    return (
      <S.Pagination
        aria-label={ariaLabel}
        data-testid={dataTestId}
        ref={ref}
        role="navigation"
        {...rest}
      >
        <S.List>
          <S.Item>
            <S.ArrowLink
              aria-disabled={isPrevButtonDisabled}
              data-testid={dataTestId ? `${dataTestId}-arrow-prev` : undefined}
              href={getHref ? getHref(isPrevButtonDisabled ? page : page - 1) : ''}
              onClick={!isPrevButtonDisabled ? handlePrevious : undefined}
              ref={firstPageRef}
            >
              {leftArrow || <LeftIcon size="sm" />}
            </S.ArrowLink>
          </S.Item>
          {pages.map((iPage: string | number, i: number) =>
            iPage === '-' ? (
              // eslint-disable-next-line react/no-array-index-key
              <S.Item key={`${i}-`}>
                <S.Dots>...</S.Dots>
              </S.Item>
            ) : (
              <S.Item key={iPage}>
                <S.PageLink
                  aria-current={iPage === page}
                  data-testid={dataTestId ? `${dataTestId}-${iPage}` : undefined}
                  href={getHref ? getHref(iPage) : ''}
                  onClick={event => {
                    event.preventDefault()
                    onChange(iPage)
                  }}
                >
                  {iPage}
                </S.PageLink>
              </S.Item>
            )
          )}
          <S.Item>
            <S.ArrowLink
              aria-disabled={isNextButtonDisabled}
              data-testid={dataTestId ? `${dataTestId}-arrow-next` : undefined}
              href={getHref ? getHref(isNextButtonDisabled ? page : page + 1) : ''}
              onClick={!isNextButtonDisabled ? handleNext : undefined}
              ref={lastPageRef}
            >
              {rightArrow || <RightIcon size="sm" />}
            </S.ArrowLink>
          </S.Item>
        </S.List>
      </S.Pagination>
    )
  }
)
