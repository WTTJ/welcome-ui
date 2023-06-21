import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'
import { Trigger } from './Trigger'
import { UsePopoverStoreReturn } from './usePopoverStore'

export interface PopoverOptions {
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopoverStoreReturn
}

export type PopoverProps = CreateWuiProps<'div', PopoverOptions>

/* eslint-disable @typescript-eslint/no-unused-vars */
export const PopoverComponent = forwardRef<'div', PopoverProps>(
  ({ children, onClose, store, ...rest }, ref) => {
    const closePopover = () => {
      if (onClose) onClose()
      store?.hide()
    }

    const placement = store.useState('currentPlacement')
    const { withCloseButton } = store
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
      <S.Popover store={store} {...rest} $withCloseButton={withCloseButton} ref={ref}>
        <Box position="relative">
          <S.Arrow store={store}>
            <S.ArrowItem $transform={transform} h={30} w={30} xmlns="http://www.w3.org/2000/svg">
              <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
              <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
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

export * from './usePopoverStore'
