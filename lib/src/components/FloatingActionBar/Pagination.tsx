import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './floating-action-bar.module.scss'
import type { FloatingActionBarPaginationProps } from './types'

const cx = classNames(styles)

export const Pagination = forwardRef<HTMLDivElement, FloatingActionBarPaginationProps>(
  (
    {
      buttonNextProps,
      buttonPrevProps,
      className,
      dataTestId,
      navigationTexts,
      onChange,
      page,
      pageCount,
      size = 'md',
      variant = 'secondary',
      ...rest
    },
    ref
  ) => {
    const isPrevButtonDisabled = page === 1
    const isNextButtonDisabled = page === pageCount
    const nextPageText = navigationTexts?.nextPage || 'Next Page'
    const previousPageText = navigationTexts?.previousPage || 'Previous Page'

    const handlePrevious = () => {
      if (page > 1) onChange?.(String(page - 1))
    }

    const handleNext = () => {
      if (page < pageCount) onChange?.(String(page + 1))
    }

    return (
      <div {...rest} className={cx('pagination', className)} data-testid={dataTestId} ref={ref}>
        <Button
          aria-label={previousPageText}
          className={cx(
            navigationTexts?.previousPage && 'with-text-right',
            isPrevButtonDisabled && 'disabled-arrow'
          )}
          data-testid={dataTestId ? `${dataTestId}-arrow-prev` : undefined}
          disabled={isPrevButtonDisabled}
          onClick={handlePrevious}
          size={size}
          variant={variant}
          {...buttonPrevProps}
        >
          <Icon className={cx('icon')} name="angle-left" size="lg" />
        </Button>
        <Text
          aria-label={`Page ${page} of ${pageCount}`}
          className={cx('pagination-text')}
          variant="body-md"
        >
          {page} / {pageCount}
        </Text>
        <Button
          aria-label={nextPageText}
          className={cx(
            navigationTexts?.nextPage && 'with-text-left',
            isNextButtonDisabled && 'disabled-arrow'
          )}
          data-testid={dataTestId ? `${dataTestId}-arrow-next` : undefined}
          disabled={isNextButtonDisabled}
          onClick={handleNext}
          size={size}
          variant={variant}
          {...buttonNextProps}
        >
          {navigationTexts?.nextPage ? nextPageText : null}
          <Icon className={cx('icon')} name="angle-right" size="lg" />
        </Button>
      </div>
    )
  }
)

Pagination.displayName = 'FloatingActionBar.Pagination'
