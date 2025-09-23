import * as Ariakit from '@ariakit/react'

import { forwardRefWithAs } from '@/utils'

export type TriggerProps = TriggerOptions
type TriggerOptions = { store: UseDropdownMenu }
type UseDropdownMenu = Ariakit.MenuStore

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: As, store, ...rest }, ref) => {
    return (
      <Ariakit.MenuButton
        ref={ref}
        render={As ? props => <As {...props} /> : undefined}
        store={store}
        {...(rest as Ariakit.MenuButtonProps)}
      />
    )
  }
)
