import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { CrossIcon } from '@/components/Icon'
import { classNames } from '@/utils'

import closeButtonStyles from './close-button.module.scss'

const cx = classNames(closeButtonStyles)

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        aria-label="Close"
        className={cx('root', className)}
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
