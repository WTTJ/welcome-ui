import { useCallback, useRef } from 'react'
import { usePopoverState as useReakitPopoverState } from 'reakit/Popover'

export const usePopoverState = ({
  animated = 150,
  triggerMethod = 'click',
  withCloseButton = false,
  ...options
} = {}) => {
  const popover = useReakitPopoverState(options)
  const closeCountdownRef = useRef()

  const hide = useCallback(() => {
    if (!popover.visible) {
      return
    }

    if (triggerMethod === 'hover') {
      closeCountdownRef.current = setTimeout(() => popover.hide(), 300)
    } else {
      popover.hide()
    }
  }, [popover, triggerMethod])

  const show = useCallback(() => {
    if (!popover.visible) {
      popover.show()
    }
    if (triggerMethod === 'hover' && closeCountdownRef.current) {
      clearTimeout(closeCountdownRef.current)
    }
  }, [popover, triggerMethod])

  return {
    ...popover,
    hide,
    show,
    triggerMethod,
    withCloseButton,
    animated
  }
}
