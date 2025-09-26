import React, { forwardRef, useCallback, useRef } from 'react'

import { LeftIcon, RightIcon } from '@/components/Icon'
import { classNames } from '@/utils'

import styles from './pagination.module.scss'
import type { PaginationProps } from './types'
import { usePages } from './utils'

const cx = classNames(styles)

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    { className, dataTestId, getHref, onChange, page, pageCount, rangeDisplay = 5, ...rest },
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
          firstPageRef.current?.focus()
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
          lastPageRef.current?.focus()
        }
        onChange(nextPage)
      },
      [page, pageCount, onChange]
    )

    return (
      <nav className={className} data-testid={dataTestId} ref={ref} role="navigation" {...rest}>
        <ol className={cx('list')}>
          <li>
            <a
              aria-disabled={isPrevButtonDisabled}
              className={cx('item', 'arrow')}
              data-testid={dataTestId ? `${dataTestId}-arrow-prev` : undefined}
              href={getHref ? getHref(isPrevButtonDisabled ? page : page - 1) : ''}
              onClick={!isPrevButtonDisabled ? handlePrevious : undefined}
              ref={firstPageRef}
            >
              <LeftIcon size="sm" />
            </a>
          </li>
          {pages.map((iPage: number | string, i: number) =>
            iPage === '-' ? (
              <li key={`${i}-`}>
                <span className={cx('dots')}>...</span>
              </li>
            ) : (
              <li key={iPage}>
                <a
                  aria-current={iPage === page}
                  className={cx('item', 'page')}
                  data-testid={dataTestId ? `${dataTestId}-${iPage}` : undefined}
                  href={getHref?.(iPage)}
                  onClick={event => {
                    event.preventDefault()
                    onChange(iPage)
                  }}
                >
                  {iPage}
                </a>
              </li>
            )
          )}
          <li>
            <a
              aria-disabled={isNextButtonDisabled}
              className={cx('item', 'arrow')}
              data-testid={dataTestId ? `${dataTestId}-arrow-next` : undefined}
              href={getHref ? getHref(isNextButtonDisabled ? page : page + 1) : ''}
              onClick={!isNextButtonDisabled ? handleNext : undefined}
              ref={lastPageRef}
            >
              <RightIcon size="sm" />
            </a>
          </li>
        </ol>
      </nav>
    )
  }
)
