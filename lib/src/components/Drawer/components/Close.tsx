import { DialogDismiss } from '@ariakit/react'

import { CloseButton } from '@/components/CloseButton'
import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { CloseProps } from '../types'

const cx = classNames(styles)

export const Close = ({ className }: CloseProps) => {
  return (
    <DialogDismiss
      render={props => <CloseButton className={cx('drawer-close', className)} {...props} />}
    />
  )
}
