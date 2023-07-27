import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import React from 'react'
import { useIsomorphicLayoutEffect } from '@welcome-ui/utils'

import { UsePopover } from './usePopover'
import * as S from './styles'

export type TriggerProps = CreateWuiProps<'button', { store: UsePopover }>

export const Trigger = forwardRef<'button', TriggerProps>(({ as, store, ...rest }, ref) => {
  const { triggerMethod } = store
  const isHoverMethod = triggerMethod === 'hover'
  const disclosureRef = store.useState('disclosureElement')
  const popoverRef = store.useState('popoverElement')

  const showPopover: () => void = () => {
    if (isHoverMethod) {
      // remove listeners on mouseenter
      disclosureRef?.removeEventListener('mouseenter', showPopover)
      popoverRef?.removeEventListener('mouseenter', showPopover)
      // add listeners on mouseleave
      disclosureRef?.addEventListener('mouseleave', hidePopover)
      popoverRef?.addEventListener('mouseleave', hidePopover)
      // show popover
      store.show()
    }
  }

  const hidePopover: () => void = () => {
    if (isHoverMethod) {
      // remove listeners on mouseleave
      disclosureRef?.removeEventListener('mouseleave', hidePopover)
      popoverRef?.removeEventListener('mouseleave', hidePopover)
      // add listeners on mouseenter
      disclosureRef?.addEventListener('mouseenter', showPopover)
      popoverRef?.addEventListener('mouseenter', showPopover)
      // hide popover
      store.hide()
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (isHoverMethod && disclosureRef) {
      // add listeners on mount
      disclosureRef.addEventListener('mouseenter', showPopover)
      disclosureRef.addEventListener('mouseleave', hidePopover)
      return () => {
        // remove listeners on unmount
        disclosureRef.removeEventListener('mouseenter', showPopover)
        disclosureRef.removeEventListener('mouseleave', hidePopover)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disclosureRef])

  return <S.PopoverTrigger store={store} {...rest} forwardedAs={as} ref={ref} />
})
