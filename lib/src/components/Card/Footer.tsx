import { forwardRef } from 'react'

import { classNames } from '@/utils'

import cardStyles from './card.module.scss'
import type { FooterProps } from './types'

const cx = classNames(cardStyles)

/**
 * @name Card.Footer
 */
export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('footer', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

Footer.displayName = 'Card.Footer'
