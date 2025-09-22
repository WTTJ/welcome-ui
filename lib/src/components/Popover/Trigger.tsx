import * as Ariakit from '@ariakit/react'

import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import type { UsePopover, UsePopoverHover } from './usePopover'

export type PopoverTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  store: UsePopover
}

export const PopoverTrigger = forwardRefWithAs<PopoverTriggerProps, 'button'>(
  ({ as: As, className, store, ...rest }, ref) => {
    return (
      <Ariakit.PopoverDisclosure
        className={className}
        ref={ref}
        render={As ? props => <As {...props} /> : undefined}
        store={store}
        {...(rest as Ariakit.PopoverDisclosureProps)}
      />
    )
  }
)

export type PopoverHoverTriggerProps = React.HTMLAttributes<HTMLAnchorElement> & {
  store: UsePopoverHover
}

export const PopoverHoverTrigger = forwardRefWithAs<PopoverHoverTriggerProps, 'a'>(
  ({ as: As, className, store, ...rest }, ref) => {
    return (
      <Ariakit.HovercardAnchor
        className={className}
        ref={ref}
        render={As ? props => <As {...props} /> : undefined}
        store={store}
        {...rest}
      />
    )
  }
)
