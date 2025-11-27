import { Icon } from '@/components/Icon'
import { classNames, forwardRefWithAs } from '@/utils'

import type { IconName } from '../Icon/types'

import breadcrumbStyles from './breadcrumb.module.scss'
import type { BreadcrumbItemProps } from './types'

const cx = classNames(breadcrumbStyles)

/**
 * @name Breadcrumb.Item
 */
export const Item = forwardRefWithAs<BreadcrumbItemProps, 'a'>(
  (
    {
      as: Component = 'a',
      children,
      collapsed,
      'data-testid': dataTestId,
      icon: customIcon,
      isActive,
      separator,
      ...rest
    },
    ref
  ) => {
    const isClickable = rest.href || rest.to
    const isCollapsed = Boolean(collapsed && !isActive)

    let icon: IconName
    if (isCollapsed) {
      icon = 'ellipsis-h'
    } else if (customIcon === true) {
      icon = isActive ? 'folder-open' : 'folder'
    } else if (customIcon) {
      icon = customIcon
    }

    return (
      <li aria-label="breadcrumb" className={cx('item-wrapper')} data-testid={dataTestId}>
        {separator ? (
          <span className={cx('item-separator')} role="presentation">
            {separator}
          </span>
        ) : null}
        <Component
          aria-current={isActive ? 'page' : undefined}
          aria-disabled={!isClickable}
          {...rest}
          className={cx('item-content', rest.className)}
          ref={ref}
        >
          {icon ? <Icon name={icon} size="md" /> : null}
          {!isCollapsed ? children : null}
        </Component>
      </li>
    )
  }
)

Item.displayName = 'Breadcrumb.Item'
