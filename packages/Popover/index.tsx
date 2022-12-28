import React from 'react'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { PopoverOptions as AriakitPopoverOptions } from 'ariakit/popover'

import * as S from './styles'
import { Trigger } from './Trigger'
import { UsePopoverStateReturn } from './usePopoverState'

export interface PopoverOptions {
  /** call a function when popover closed */
  onClose?: () => void
}

export type PopoverProps = CreateWuiProps<
  'div',
  PopoverOptions &
    AriakitPopoverOptions & {
      state: UsePopoverStateReturn
    }
>

const transformMapArrow: { [key: string]: string } = {
  top: 'rotate(180 15 15)',
  right: 'rotate(-90 15 15)',
  bottom: 'rotate(0 15 15)',
  left: 'rotate(90 15 15)',
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const PopoverComponent = forwardRef<'div', PopoverProps>(
  ({ children, onClose, state }, ref) => {
    const { currentPlacement, hide, withCloseButton, withLightBackground } = state

    // get the correct transform style for arrow
    const [arrowPlacement] = currentPlacement.split('-')
    const transformArrow = transformMapArrow[arrowPlacement]

    const closePopover = () => {
      if (onClose) onClose()
      hide()
    }

    return (
      <S.Popover
        $withCloseButton={withCloseButton}
        $withLightBackground={withLightBackground}
        ref={ref}
        state={state}
      >
        <S.Arrow>
          <svg display="block" viewBox="0 0 30 30">
            <g transform={transformArrow}>
              <path d="M6 30l9-10 9 10z" fill="currentColor" />
              <path d="M6 30l9-10 9 10z" stroke="none" />
            </g>
          </svg>
        </S.Arrow>
        {children}
        {withCloseButton && (
          <Button
            flex="0 0 auto"
            ml="md"
            onClick={closePopover}
            position="absolute"
            right={3}
            shape="square"
            size="xs"
            top={3}
            variant="secondary"
          >
            <CrossIcon />
          </Button>
        )}
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
