import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { BoxTextProps } from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

export const BoxText = forwardRef<HTMLDivElement, BoxTextProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('box-text', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

BoxText.displayName = 'Window.BoxText'
