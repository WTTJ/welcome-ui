import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Button } from '../Button'
import type { ButtonProps } from '../Button/types'
import { CrossIcon } from '../Icon'

import closeButtonStyles from './close-button.module.scss'

const cx = classNames(closeButtonStyles)

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  return (
    <Button
      className={cx('root')}
      ref={ref}
      shape="circle"
      size="sm"
      title="Close"
      variant="ghost"
      {...props}
    >
      <CrossIcon size="lg" />
    </Button>
  )
})
