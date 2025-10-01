import { forwardRef } from 'react'

import { classNames } from '@/utils'

import breadcrumStyles from './breadcrumb.module.scss'
import type { BreadcrumbItemProps } from './types'

const cx = classNames(breadcrumStyles)

/**
 * @name Breadcrumb.Item
 */
export const Item = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ children, 'data-testid': dataTestId, isActive, separator, ...rest }, ref) => {
    const isClickable = rest.href || rest.to

    return (
      <li aria-label="breadcrumb" className={cx('item-wrapper')} data-testid={dataTestId}>
        {separator ? (
          <span className={cx('item-separator')} role="presentation">
            {separator}
          </span>
        ) : null}
        <a
          aria-current={isActive ? 'page' : undefined}
          aria-disabled={!isClickable}
          {...rest}
          className={cx('item-content', rest.className)}
          ref={ref}
        >
          {children}
        </a>
      </li>
    )
  }
)
