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
      buttonFirstProps,
      buttonLastProps,
      buttonNextProps,
      buttonPrevProps,
      dataTestId,
      getHref,
      listProps,
      navigationTexts,
      onChange,
      page,
      pageCount,
      rangeDisplay = 5,
      showEdgeControls = false,
      size = 'lg',
      ...rest
    },
    ref
  ) => {
    const pages = usePages({ page, pageCount, rangeDisplay })
    const firstPageRef = useRef<HTMLButtonElement>(null)
    const lastPageRef = useRef<HTMLButtonElement>(null)
    const isPrevButtonDisabled = page === 1
    const isNextButtonDisabled = page === pageCount
    const isFirstButtonDisabled = page === 1
    const isLastButtonDisabled = page === pageCount

    const firstPageText = navigationTexts?.firstPage || 'First Page'
    const lastPageText = navigationTexts?.lastPage || 'Last Page'
    const nextPageText = navigationTexts?.nextPage || 'Next Page'
    const previousPageText = navigationTexts?.previousPage || 'Previous Page'

    const handleFirst = useCallback(() => {
      if (isFirstButtonDisabled) return
      onChange(1)
    }, [isFirstButtonDisabled, onChange])

    const handleLast = useCallback(() => {
      if (isLastButtonDisabled) return
      onChange(pageCount)
    }, [isLastButtonDisabled, pageCount, onChange])

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
          {showEdgeControls ? (
            <li>
              <button
                aria-label={firstPageText}
                className={cx(
                  'item',
                  `size-${size}`,
                  navigationTexts?.firstPage && 'with-text-right',
                  isFirstButtonDisabled && 'disabled-arrow'
                )}
                data-testid={dataTestId ? `${dataTestId}-arrow-first` : undefined}
                disabled={isFirstButtonDisabled}
                onClick={handleFirst}
                type="button"
                {...buttonFirstProps}
              >
                <Icon className={cx('icon')} name="angle-double-left" size="lg" />
                {navigationTexts?.firstPage ? firstPageText : null}
              </button>
            </li>
          ) : null}
          <li>
            <button
              aria-label={previousPageText}
              className={cx(
                'item',
                `size-${size}`,
                navigationTexts?.previousPage && 'with-text-right',
                isPrevButtonDisabled && 'disabled-arrow'
              )}
              data-testid={dataTestId ? `${dataTestId}-arrow-prev` : undefined}
              disabled={isPrevButtonDisabled}
              onClick={handlePrevious}
              ref={firstPageRef}
              type="button"
              {...buttonPrevProps}
            >
              <Icon className={cx('icon')} name="angle-left" size="lg" />
              {navigationTexts?.previousPage ? previousPageText : null}
            </button>
          </li>
          {pages.map((iPage: number | string, i: number) =>
            iPage === '-' ? (
              <li key={`${i}-`}>
                <button
                  aria-label="Collapsed Pages"
                  className={cx('item', `size-${size}`)}
                  type="button"
                  {...buttonNextProps}
                >
                  ...
                </button>
              </li>
            ) : (
              <li key={iPage}>
                <a
                  aria-current={iPage === page}
                  className={cx('item', 'page', `size-${size}`)}
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
              aria-label={nextPageText}
              className={cx(
                'item',
                `size-${size}`,
                navigationTexts?.nextPage && 'with-text-left',
                isNextButtonDisabled && 'disabled-arrow'
              )}
              data-testid={dataTestId ? `${dataTestId}-arrow-next` : undefined}
              disabled={isNextButtonDisabled}
              onClick={handleNext}
              ref={lastPageRef}
              type="button"
              {...buttonNextProps}
            >
              {navigationTexts?.nextPage ? nextPageText : null}{' '}
              <Icon name="angle-right" size="lg" />
            </button>
          </li>
          {showEdgeControls ? (
            <li>
              <button
                aria-label={lastPageText}
                className={cx(
                  'item',
                  `size-${size}`,
                  navigationTexts?.lastPage && 'with-text-left',
                  isLastButtonDisabled && 'disabled-arrow'
                )}
                data-testid={dataTestId ? `${dataTestId}-arrow-last` : undefined}
                disabled={isLastButtonDisabled}
                onClick={handleLast}
                type="button"
                {...buttonLastProps}
              >
                {navigationTexts?.lastPage ? lastPageText : null}
                <Icon className={cx('icon')} name="angle-double-right" size="lg" />
              </button>
            </li>
          ) : null}
        </ol>
      </nav>
    )
  }
)
