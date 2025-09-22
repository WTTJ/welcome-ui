import { forwardRef } from 'react'

import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'
const cx = classNames(popoverStyles)

export const Title = forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
  (props, ref) => {
    return <h6 className={cx('title')} ref={ref} {...props} />
  }
)
