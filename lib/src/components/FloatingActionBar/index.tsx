import { classNames, forwardRefWithAs } from '@/utils'

import styles from './floating-action-bar.module.scss'
import type { FloatingActionBarProps } from './types'

const cx = classNames(styles)

export const FloatingActionBar = forwardRefWithAs<FloatingActionBarProps, 'div'>(
  ({ as: Component = 'div', children, className, dataTestId, ...rest }, ref) => {
    return (
      <Component
        className={cx('floating-action-bar', className)}
        data-testid={dataTestId}
        role="toolbar"
        {...rest}
        ref={ref}
      >
        <div className={cx('container')}>{children}</div>
      </Component>
    )
  }
)
