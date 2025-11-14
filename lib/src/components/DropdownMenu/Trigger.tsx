import { MenuButton } from '@ariakit/react'
import type { MenuButtonProps } from '@ariakit/react'
import type { MouseEvent } from 'react'

import { forwardRefWithAs } from '@/utils'

import type { TriggerProps } from './types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: Component, onClick, store, ...rest }, ref) => {
    const handleMenuButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onClick?.(e)
      store.toggle()
    }
    return (
      <MenuButton
        onClick={handleMenuButtonClick}
        ref={ref}
        render={Component ? props => <Component {...props} /> : undefined}
        store={store}
        {...(rest as MenuButtonProps)}
      />
    )
  }
)

Trigger.displayName = 'DropdownMenu.Trigger'
