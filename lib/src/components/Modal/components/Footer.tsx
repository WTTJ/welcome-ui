import { forwardRef } from 'react'

import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { FooterProps } from '../types'

const cx = classNames(modalStyles)

/**
 * @name Modal.Footer
 */
export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <footer className={cx('footer', className)} ref={ref} {...rest}>
        {children ? <div className={cx('footer-children-wrapper')}>{children}</div> : null}
      </footer>
    )
  }
)

Footer.displayName = 'Modal.Footer'
