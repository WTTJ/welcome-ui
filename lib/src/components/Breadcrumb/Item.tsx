import { forwardRef } from 'react'

import { classNames } from '@/utils'

import breadcrumbItemStyles from './item.module.scss'
import type { BreadcrumbItemProps } from './types'

const cx = classNames(breadcrumbItemStyles)

/**
 * @name Breadcrumb.Item
 */
export const Item = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ children, 'data-testid': dataTestId, isActive, separator, ...rest }, ref) => {
    const isClickable = rest.href || rest.to

    return (
      <li aria-label="breadcrumb" className={cx('root')} data-testid={dataTestId}>
        {separator ? (
          <span className={cx('separator')} role="presentation">
            {separator}
          </span>
        ) : null}
        <a
          aria-current={isActive ? 'page' : undefined}
          aria-disabled={!isClickable}
          {...rest}
          className={cx('item', rest.className)}
          ref={ref}
        >
          {children}
        </a>
      </li>
    )
  }
)
