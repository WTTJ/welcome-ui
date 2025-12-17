import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { BodyProps } from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

/**
 * @name Window.Body
 */
export const Body = forwardRef<HTMLDivElement, BodyProps>(
  ({ children, size = 'md', ...rest }, ref) => {
    return (
      <div className={cx('body', `size-${size}`)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

Body.displayName = 'Window.Body'
