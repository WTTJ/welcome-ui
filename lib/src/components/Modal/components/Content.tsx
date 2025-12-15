import { forwardRef } from 'react'

import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { ContentProps } from '../types'

import { Close } from './Close'

const cx = classNames(modalStyles)

/**
 * @name Modal.Content
 */
export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, withClosingButton = true, ...rest }, ref) => {
    return (
      <div
        className={cx('content', withClosingButton && 'with-close-button', className)}
        ref={ref}
        {...rest}
      >
        <Close />
        {children}
      </div>
    )
  }
)
