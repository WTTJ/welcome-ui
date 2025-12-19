import { forwardRef } from 'react'

import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { FooterProps } from '../types'

const cx = classNames(styles)

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({ className, ...rest }, ref) => {
  return <div className={cx('footer', className)} ref={ref} {...rest} />
})

Footer.displayName = 'Drawer.Footer'
