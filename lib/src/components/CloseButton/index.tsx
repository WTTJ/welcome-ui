import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { CrossIcon } from '@/components/Icon'
import { classNames } from '@/utils'

import closeButtonStyles from './close-button.module.scss'
import type { CloseButtonProps } from './types'

const cx = classNames(closeButtonStyles)

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ animatePresence = false, className, ...props }, ref) => {
    return (
      <Button
        aria-label="Close"
        className={cx('root', animatePresence && 'animate-presence', className)}
        ref={ref}
        shape="circle"
        size="sm"
        variant="ghost"
        {...props}
      >
        <CrossIcon size="lg" />
      </Button>
    )
  }
)
