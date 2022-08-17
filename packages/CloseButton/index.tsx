import React from 'react'
import { CrossIcon } from '@welcome-ui/icons'
import { Button, ButtonProps } from '@welcome-ui/button'
import { forwardRef } from '@welcome-ui/system'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <Button ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
    <CrossIcon />
  </Button>
))
