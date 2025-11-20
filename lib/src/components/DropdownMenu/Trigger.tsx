import { Button, MenuButton } from '@ariakit/react'

import { forwardRefWithAs } from '@/utils'

import type { TriggerProps } from './types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: Component = Button, ...props }, ref) => {
    return <MenuButton {...props} ref={ref} render={<Component />} />
  }
)
