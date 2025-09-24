import { forwardRef } from 'react'

import { classNames } from '@/utils'

import cardStyles from './card.module.scss'
import type { BodyProps } from './types'

const cx = classNames(cardStyles)

/**
 * @name Card.Body
 */
export const Body = forwardRef<HTMLDivElement, BodyProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('body', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)
