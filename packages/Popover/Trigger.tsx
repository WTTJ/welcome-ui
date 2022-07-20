import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import React, { useLayoutEffect, useRef } from 'react'
import { PopoverDisclosureProps } from 'reakit/Popover'

import { UsePopoverStateReturn } from './usePopoverState'
import * as S from './styles'

export type TriggerProps = CreateWuiProps<'button', PopoverDisclosureProps & UsePopoverStateReturn>

export const Trigger = forwardRef<'button', TriggerProps>(
  ({ triggerMethod = 'click', ...rest }, ref) => {
    const hoverable = triggerMethod === 'hover'
    const disclosureRef = useRef<HTMLButtonElement>(null)
    const popoverRef = rest.unstable_popoverRef

    const showPopover: () => void = () => {
      if (hoverable) {
        // remove listeners on mouseenter
        disclosureRef.current?.removeEventListener('mouseenter', showPopover)
        popoverRef.current?.removeEventListener('mouseenter', showPopover)
        // add listeners on mouseleave
        disclosureRef.current?.addEventListener('mouseleave', hidePopover)
        popoverRef.current?.addEventListener('mouseleave', hidePopover)
        // show popover
        rest.show()
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
        rest.hide()
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

    return (
      <S.PopoverTrigger
        ref={(triggerElement: HTMLButtonElement) => {
          disclosureRef.current = triggerElement
          if (typeof ref === 'function') {
            ref(triggerElement)
          } else if (ref?.current) {
            ref.current = triggerElement
          }
        }}
        {...rest}
      />
    )
  }
)
