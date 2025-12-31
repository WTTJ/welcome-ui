import { forwardRef } from 'react'

import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'
const cx = classNames(popoverStyles)

export const Content = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cx('content', className)} ref={ref} {...props} />
  }
)

Content.displayName = 'Popover.Content'
