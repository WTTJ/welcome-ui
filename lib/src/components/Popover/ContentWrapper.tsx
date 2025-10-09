import { Button } from '@/components/Button'
import { CrossIcon } from '@/components/Icon'
import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'

const cx = classNames(popoverStyles)

import { Arrow } from './Arrow'
import type { UsePopover, UsePopoverHover } from './usePopover'

import type { PopoverOptions } from './'

export interface ContentWrapperOptions {
  children: PopoverOptions['children']
  className?: string
  onClose?: () => void
  store: UsePopover | UsePopoverHover
}

export const ContentWrapper = ({ children, className, onClose, store }: ContentWrapperOptions) => {
  const handleClose = () => {
    if (onClose) onClose()
    store?.hide()
  }

  const { withCloseButton } = store

  return (
    <div className={cx('content-wrapper', className)}>
      <Arrow store={store} />
      {children as React.ReactElement}
      {withCloseButton ? (
        <Button className={cx('close-button')} onClick={handleClose} size="xs" variant="secondary">
          <CrossIcon />
        </Button>
      ) : null}
    </div>
  )
}
