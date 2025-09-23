import { forwardRef } from 'react'

import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { ContentProps } from '../types'

const cx = classNames(styles)

export const Content = forwardRef<HTMLDivElement, ContentProps>(({ className, ...rest }, ref) => {
  return <div className={cx('content', className)} ref={ref} {...rest} />
})
