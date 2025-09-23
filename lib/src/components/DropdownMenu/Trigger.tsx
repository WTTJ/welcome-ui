import * as Ariakit from '@ariakit/react'

import { forwardRefWithAs } from '@/utils'

export type UseDropdownMenu = Ariakit.MenuStore
type TriggerOptions = { store: UseDropdownMenu }

type TriggerProps = TriggerOptions

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
