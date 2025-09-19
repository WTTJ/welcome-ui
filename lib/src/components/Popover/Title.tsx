import { forwardRef } from 'react'

import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'
const cx = classNames(popoverStyles)

export const Title = forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
  (props, ref) => {
    return <h6 className={cx('title')} ref={ref} {...props} />
  }
)

export const SubContentComponent = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return <div className={cx('sub-content-wrapper')} ref={ref} {...props} />
  }
)
