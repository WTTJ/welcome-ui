import { forwardRef } from 'react'

import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'
const cx = classNames(popoverStyles)

export const Content = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return <div className={cx('content')} ref={ref} {...props} />
})
