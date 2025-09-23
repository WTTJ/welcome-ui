import { DialogDisclosure } from '@ariakit/react'

import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import type { TriggerProps } from '../types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(({ as, store, ...rest }, ref) => {
  const Element = as || 'button'

  return (
    <DialogDisclosure ref={ref} render={props => <Element {...props} />} store={store} {...rest} />
  )
})
