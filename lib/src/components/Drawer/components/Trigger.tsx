import { DialogDisclosure } from '@ariakit/react'

import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import type { TriggerProps } from '../types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: As, store, ...rest }, ref) => {
    return <DialogDisclosure ref={ref} render={As ? <As /> : undefined} store={store} {...rest} />
  }
)
