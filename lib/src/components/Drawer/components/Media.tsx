'use client'
import { forwardRef } from 'react'

import { Window } from '@/components/Window'
import { classNames } from '@/utils'

import styles from '../drawer.module.scss'

const cx = classNames(styles)

export const Media = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <Window.Media className={cx('media', className)} ref={ref} {...rest} />
  )
)

Media.displayName = 'Drawer.Media'
