import * as Ariakit from '@ariakit/react'
import React from 'react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import { Content } from './Content'
import * as S from './styles'
import { PopoverHoverTrigger } from './Trigger'
import type { UsePopoverHover } from './usePopover'

export interface PopoverHoverOptions extends Ariakit.HovercardProps {
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopoverHover
}

export type PopoverHoverProps = CreateWuiProps<'div', PopoverHoverOptions>

const PopoverHoverComponent = forwardRef<'div', PopoverHoverProps>(
  ({ children, onClose, store, ...rest }, ref) => {
    const { withCloseButton } = store

    return (
      <S.Popover
        as={Ariakit.Hovercard}
        store={store}
        {...rest}
        $withCloseButton={withCloseButton}
        ref={ref}
      >
        <Content onClose={onClose} store={store}>
          {children}
        </Content>
      </S.Popover>
    )
  }
)

export const PopoverHover = Object.assign(PopoverHoverComponent, {
  Content: S.Content,
  Title: S.Title,
  Trigger: PopoverHoverTrigger,
})
