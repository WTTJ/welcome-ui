import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import React, { useLayoutEffect } from 'react'
import { PopoverDisclosureProps } from 'ariakit/popover'

import { UsePopoverStateReturn } from './usePopoverState'
import * as S from './styles'

export type TriggerProps = CreateWuiProps<
  'button',
  PopoverDisclosureProps & { state: UsePopoverStateReturn }
>

export const Trigger = forwardRef<'button', TriggerProps>(({ as, state, ...rest }, ref) => {
  const { disclosureRef, hide, popoverRef, show, triggerMethod } = state
  const hoverable = triggerMethod === 'hover'

  const showPopover: () => void = () => {
    if (hoverable) {
      // remove listeners on mouseenter
      disclosureRef.current?.removeEventListener('mouseenter', showPopover)
      popoverRef.current?.removeEventListener('mouseenter', showPopover)
      // add listeners on mouseleave
      disclosureRef.current?.addEventListener('mouseleave', hidePopover)
      popoverRef.current?.addEventListener('mouseleave', hidePopover)
      // show popover
      show()
    }
  }

  const hidePopover: () => void = () => {
    if (hoverable) {
      // remove listeners on mouseleave
      disclosureRef.current?.removeEventListener('mouseleave', hidePopover)
      popoverRef.current?.removeEventListener('mouseleave', hidePopover)
      // add listeners on mouseenter
      disclosureRef.current?.addEventListener('mouseenter', showPopover)
      popoverRef.current?.addEventListener('mouseenter', showPopover)
      // hide popover
      hide()
    }
  }

  useLayoutEffect(() => {
    const disclosure = disclosureRef.current
    if (hoverable && disclosure) {
      // add listeners on mount
      disclosure.addEventListener('mouseenter', showPopover)
      disclosure.addEventListener('mouseleave', hidePopover)
      return () => {
        // remove listeners on unmount
        disclosure.removeEventListener('mouseenter', showPopover)
        disclosure.removeEventListener('mouseleave', hidePopover)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disclosureRef])

  return <S.PopoverTrigger state={state} {...rest} forwardedAs={as} ref={ref} />
})
