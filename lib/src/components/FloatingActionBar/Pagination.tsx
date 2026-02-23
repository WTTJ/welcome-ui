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
      navigationAriaLabels,
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
    const nextPageText = navigationAriaLabels?.nextPage || 'Next Page'
    const previousPageText = navigationAriaLabels?.previousPage || 'Previous Page'

    const handlePrevious = () => {
      if (!isPrevButtonDisabled) onChange?.(page - 1)
    }

    const handleNext = () => {
      if (!isNextButtonDisabled) onChange?.(page + 1)
    }

    return (
      <div className={cx('pagination', className)} data-testid={dataTestId} ref={ref} {...rest}>
        <Button
          aria-label={previousPageText}
          className={cx(isPrevButtonDisabled && 'disabled-arrow')}
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
          className={cx(isNextButtonDisabled && 'disabled-arrow')}
          data-testid={dataTestId ? `${dataTestId}-arrow-next` : undefined}
          disabled={isNextButtonDisabled}
          onClick={handleNext}
          size={size}
          variant={variant}
          {...buttonNextProps}
        >
          <Icon className={cx('icon')} name="angle-right" size="lg" />
        </Button>
      </div>
    )
  }
)

Pagination.displayName = 'FloatingActionBar.Pagination'
