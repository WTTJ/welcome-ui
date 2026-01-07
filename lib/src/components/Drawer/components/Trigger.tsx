'use client'
import { DialogDisclosure } from '@ariakit/react'

import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import type { TriggerProps } from '../types'

export const Trigger = forwardRefWithAs<TriggerProps, 'button'>(
  ({ as: Component, store, ...rest }, ref) => {
    return (
      <DialogDisclosure
        ref={ref}
        render={Component ? <Component /> : undefined}
        store={store}
        {...rest}
      />
    )
  }
)

Trigger.displayName = 'Drawer.Trigger'
