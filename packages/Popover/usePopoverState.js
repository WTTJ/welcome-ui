import { useCallback, useRef } from 'react'
import { usePopoverState as useReakitPopoverState } from 'reakit/Popover'

export const usePopoverState = ({
  animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  triggerMethod = 'click',
  withCloseButton = false,
  ...options
} = {}) => {
  const popover = useReakitPopoverState({ animated, ...options })
  const closeCountdownRef = useRef()
  const openCountdownRef = useRef()
  const isHoverable = triggerMethod === 'hover'

  const hide = useCallback(() => {
    if (isHoverable) {
      if (!popover.visible && openCountdownRef.current) {
        clearTimeout(openCountdownRef.current)
      }
      closeCountdownRef.current = setTimeout(() => popover.hide(), hideTimeout)
    } else {
      popover.hide()
    }
  }, [isHoverable, popover, hideTimeout])

  const show = useCallback(() => {
    if (isHoverable) {
      openCountdownRef.current = setTimeout(() => popover.show(), showTimeout)
      if (closeCountdownRef.current) {
        clearTimeout(closeCountdownRef.current)
      }
    } else {
      popover.show()
    }
  }, [isHoverable, showTimeout, popover])

  return {
    ...popover,
    hide,
    show,
    triggerMethod,
    withCloseButton
  }
}
