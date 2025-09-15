import * as Ariakit from '@ariakit/react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'
import type { UsePopover } from './usePopover'

export type PopoverTriggerProps = CreateWuiProps<'button', { store: UsePopover }>

export const PopoverTrigger = forwardRef<'button', PopoverTriggerProps>(
  ({ as: As, store, ...rest }, ref) => {
    return (
      <Ariakit.PopoverDisclosure
        ref={ref}
        render={As ? props => <As {...props} /> : undefined}
        store={store}
        {...(rest as Ariakit.PopoverDisclosureProps)}
      />
    )
  }
)

export type PopoverHoverTriggerProps = CreateWuiProps<'button', { store: UsePopover }>

export const PopoverHoverTrigger = forwardRef<'button', PopoverHoverTriggerProps>(
  ({ as, store, ...rest }, ref) => {
    return <S.PopoverHoverTrigger store={store} {...rest} forwardedAs={as} ref={ref} />
  }
)
