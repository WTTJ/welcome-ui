import { forwardRef, useCallback, useRef } from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import styles from './pagination.module.scss'
import type { PaginationProps } from './types'
import { usePages } from './utils'

const cx = classNames(styles)

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      'aria-label': ariaLabel,
      buttonNextProps,
      buttonPrevProps,
      dataTestId,
      getHref,
      listProps,
      onChange,
      page,
      pageCount,
      rangeDisplay = 5,
      ...rest
    },
    ref
  ) => {
    const pages = usePages({ page, pageCount, rangeDisplay })
    const firstPageRef = useRef<HTMLButtonElement>(null)
    const lastPageRef = useRef<HTMLButtonElement>(null)
    const isPrevButtonDisabled = page === 1
    const isNextButtonDisabled = page === pageCount

    const handlePrevious = useCallback(() => {
      if (isPrevButtonDisabled) return

      const previousPage = Math.max(page - 1, 1)
      onChange(previousPage)
    }, [isPrevButtonDisabled, page, onChange])

    const handleNext = useCallback(() => {
      if (isNextButtonDisabled) return

      const nextPage = Math.min(page + 1, pageCount)
      onChange(nextPage)
    }, [isNextButtonDisabled, page, pageCount, onChange])

    return (
      <nav aria-label={ariaLabel ?? 'Pagination'} data-testid={dataTestId} ref={ref} {...rest}>
        <ol className={cx('list')} {...listProps}>
          <li>
            <button
              aria-label="Previous Page"
              className={cx('item', isPrevButtonDisabled && 'disabled-arrow')}
              data-testid={dataTestId ? `${dataTestId}-arrow-prev` : undefined}
              disabled={isPrevButtonDisabled}
              onClick={handlePrevious}
              ref={firstPageRef}
              type="button"
              {...buttonPrevProps}
            >
              <Icon name="angle-left-b" size="sm" />
            </button>
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
                    if (onChange) {
                      event.preventDefault()
                      onChange(iPage)
                    }
                  }}
                >
                  {iPage}
                </a>
              </li>
            )
          )}
          <li>
            <button
              aria-label="Next Page"
              className={cx('item', isNextButtonDisabled && 'disabled-arrow')}
              data-testid={dataTestId ? `${dataTestId}-arrow-next` : undefined}
              disabled={isNextButtonDisabled}
              onClick={handleNext}
              ref={lastPageRef}
              type="button"
              {...buttonNextProps}
            >
              <Icon name="angle-right-b" size="sm" />
            </button>
          </li>
        </ol>
      </nav>
    )
  }
)
