import { DialogDismiss } from '@ariakit/react'

import { Window } from '@/components/Window'
import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { CloseProps } from '../types'

const cx = classNames(styles)

export const Close = ({ className }: CloseProps) => {
  return (
    <DialogDismiss
      render={props => (
        <Window.Header.CloseButton
          aria-label="Close"
          className={cx('drawer-close', className)}
          {...props}
        />
      )}
    />
  )
}

Close.displayName = 'Drawer.Close'
