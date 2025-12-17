import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { BoxTextProps } from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

/**
 * @name Window.BoxText
 */
export const BoxText = forwardRef<HTMLDivElement, BoxTextProps>(({ children, ...rest }, ref) => {
  return (
    <div className={cx('box-text')} ref={ref} {...rest}>
      {children}
    </div>
  )
})

BoxText.displayName = 'Window.BoxText'
