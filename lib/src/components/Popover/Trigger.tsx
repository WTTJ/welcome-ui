import * as Ariakit from '@ariakit/react'

import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import type { UsePopover, UsePopoverHover } from './usePopover'

export type PopoverTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  store: UsePopover
}

export const PopoverTrigger = forwardRefWithAs<PopoverTriggerProps, 'button'>(
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

export type PopoverHoverTriggerProps = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  store: UsePopoverHover
}

export const PopoverHoverTrigger = forwardRefWithAs<PopoverHoverTriggerProps, 'a'>(
  ({ as: As, store, ...rest }, ref) => {
    return (
      <Ariakit.HovercardAnchor
        store={store}
        {...rest}
        ref={ref}
        render={As ? props => <As {...props} /> : undefined}
      />
    )
  }
)
