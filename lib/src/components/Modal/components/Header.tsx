import { forwardRef } from 'react'

import { Window as WUIWindow } from '@/components/Window'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { HeaderProps } from '../types'
const cx = classNames(modalStyles)

/**
 * @name Modal.Header
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <WUIWindow.Header className={cx('header', className)} ref={ref} {...rest}>
        {children}
      </WUIWindow.Header>
    )
  }
)

Header.displayName = 'Modal.Header'
