import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { forwardRef } from '@welcome-ui/system'

import { UsePopover, UsePopoverHover } from './usePopover'
import { Arrow } from './Arrow'
import { PopoverProps } from './Popover'

export interface ContentOptions {
  children: PopoverProps['children']
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopover | UsePopoverHover
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const Content = forwardRef<'div', ContentOptions>(({ children, onClose, store }, ref) => {
  const handleClose = () => {
    if (onClose) onClose()
    store?.hide()
  }

  const { withCloseButton } = store

  return (
    <Box position="relative">
      <Arrow store={store} />
      {children as React.ReactElement}
      {withCloseButton && (
        <Button
          flex="0 0 auto"
          ml="md"
          onClick={handleClose}
          position="absolute"
          right={1}
          shape="square"
          size="xs"
          top={1}
          variant="secondary"
        >
          <CrossIcon />
        </Button>
      )}
    </Box>
  )
})
