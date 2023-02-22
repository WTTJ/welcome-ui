import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'
import { Trigger } from './Trigger'
import { UsePopoverStateReturn } from './usePopoverState'

export interface PopoverOptions {
  /** call a function when popover closed */
  onClose?: () => void
  state: UsePopoverStateReturn
}

export type PopoverProps = CreateWuiProps<'div', PopoverOptions>

/* eslint-disable @typescript-eslint/no-unused-vars */
export const PopoverComponent = forwardRef<'div', PopoverProps>(
  ({ children, onClose, state, ...rest }, ref) => {
    const closePopover = () => {
      if (onClose) onClose()
      state?.hide()
    }

    const { placement, withCloseButton } = state
    // get the correct transform style for arrow
    const [parentPlacement] = placement.split('-')
    const transformMap: { [key: string]: string } = {
      top: 'rotateZ(180deg)',
      right: 'rotateZ(-90deg)',
      bottom: 'rotateZ(360deg)',
      left: 'rotateZ(90deg)',
    }
    const transform = transformMap[parentPlacement]

    return (
      <S.Popover {...state} {...rest} $withCloseButton={withCloseButton} ref={ref}>
        <Box position="relative">
          <S.Arrow {...state}>
            <S.ArrowItem $transform={transform} h={30} w={30} xmlns="http://www.w3.org/2000/svg">
              <path d="M6 30l9-10 9 10z" fill="currentColor" fillRule="nonzero" />
            </S.ArrowItem>
          </S.Arrow>
          {children}
          {withCloseButton && (
            <Button
              flex="0 0 auto"
              ml="md"
              onClick={closePopover}
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
      </S.Popover>
    )
  }
)

export const Popover = Object.assign(PopoverComponent, {
  Content: S.Content,
  Title: S.Title,
  Trigger: Trigger,
})

export * from './usePopoverState'
