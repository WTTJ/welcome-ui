import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { BackdropProps } from '../types'

const cx = classNames(styles)

export const Backdrop = ({ hideOnInteractOutside = true, ...rest }: BackdropProps) => {
  return (
    <div
      className={cx('backdrop', hideOnInteractOutside && `drawer-hide-on-interact-outside`)}
      {...rest}
    />
  )
}
