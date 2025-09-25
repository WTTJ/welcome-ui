import { DialogDisclosure } from '@ariakit/react'

import { forwardRefWithAs } from '@/utils'

import type { TriggerProps } from '../types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: As, store, ...rest }, ref) => {
    return (
      <DialogDisclosure
        ref={ref}
        render={As ? props => <As {...props} /> : undefined}
        store={store}
        {...rest}
      />
    )
  }
)
