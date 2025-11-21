import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
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
        size="md"
        variant="tertiary"
        {...props}
      >
        <Icon name="times" size="lg" />
      </Button>
    )
  }
)

CloseButton.displayName = 'CloseButton'
