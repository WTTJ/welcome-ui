import React from 'react'

import { Box } from '@old/Box'
import { Button } from '@old/Button'
import { CrossIcon } from '@old/Icons'

import { Arrow } from './Arrow'
import type { PopoverProps } from './Popover'
import type { UsePopover, UsePopoverHover } from './usePopover'

export interface ContentOptions {
  children: PopoverProps['children']
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopover | UsePopoverHover
}

export const Content = ({ children, onClose, store }: ContentOptions) => {
  const handleClose = () => {
    if (onClose) onClose()
    store?.hide()
  }

  const { withCloseButton } = store

  return (
    <Box position="relative">
      <Arrow store={store} />
      {children as React.ReactElement}
      {withCloseButton ? (
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
      ) : null}
    </Box>
  )
}
