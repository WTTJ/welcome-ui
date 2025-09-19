import { Button } from '@/components/Button'
import { CrossIcon } from '@/components/Icon'
import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'

const cx = classNames(popoverStyles)

import { Arrow } from './Arrow'
import type { PopoverOptions } from './Popover'
import type { UsePopover, UsePopoverHover } from './usePopover'

export interface ContentOptions {
  children: PopoverOptions['children']
  className?: string
  onClose?: () => void
  store: UsePopover | UsePopoverHover
}

export const Content = ({ children, className, onClose, store }: ContentOptions) => {
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
        <Button
          className={cx('close-button')}
          onClick={handleClose}
          shape="square"
          size="xs"
          variant="secondary"
        >
          <CrossIcon />
        </Button>
      ) : null}
    </div>
  )
}
