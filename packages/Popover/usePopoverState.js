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
  const isHoverable = triggerMethod === 'hover'

  const hide = useCallback(() => {
    if (!popover.visible) {
      return
    }

    if (isHoverable) {
      closeCountdownRef.current = setTimeout(() => popover.hide(), 300)
    } else {
      popover.hide()
    }
  }, [popover, isHoverable])

  const show = useCallback(() => {
    if (!popover.visible) {
      popover.show()
    }
    if (isHoverable && closeCountdownRef.current) {
      clearTimeout(closeCountdownRef.current)
    }
  }, [popover, isHoverable])

  return {
    ...popover,
    hide,
    show,
    triggerMethod,
    withCloseButton,
    animated
  }
}
