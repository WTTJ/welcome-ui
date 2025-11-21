import { DialogDismiss } from '@ariakit/react'

import { CloseButton } from '@/components/CloseButton'
import type { CloseButtonProps } from '@/components/CloseButton/types'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'

const cx = classNames(modalStyles)

export const Close = (props: CloseButtonProps) => {
  return <DialogDismiss render={<CloseButton className={cx('close')} {...props} />} />
}

Close.displayName = 'Modal.Close'
