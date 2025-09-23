import { DialogDisclosure } from '@ariakit/react'

import type { TriggerProps } from '@/components/Modal/types'
import { forwardRefWithAs } from '@/utils'

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
