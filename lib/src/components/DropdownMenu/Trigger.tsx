import { MenuButton } from '@ariakit/react'
import type { MenuButtonProps } from '@ariakit/react'

import { forwardRefWithAs } from '@/utils'

import type { TriggerProps } from './types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: Component, store, ...rest }, ref) => {
    return (
      <MenuButton
        ref={ref}
        render={Component ? props => <Component {...props} /> : undefined}
        store={store}
        {...(rest as MenuButtonProps)}
      />
    )
  }
)
