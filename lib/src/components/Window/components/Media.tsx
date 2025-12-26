import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { MediaProps } from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

export const Media = forwardRef<HTMLDivElement, MediaProps>(({ children, ...rest }, ref) => {
  return (
    <div className={cx('media')} data-window-media ref={ref} {...rest}>
      {children}
    </div>
  )
})

Media.displayName = 'Window.Media'
