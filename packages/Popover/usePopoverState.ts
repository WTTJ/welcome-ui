import { useCallback, useRef } from 'react'
import {
  PopoverInitialState as ReakitPopoverInitialState,
  PopoverStateReturn as ReakitPopoverStateReturn,
  usePopoverState as useReakitPopoverState,
} from 'reakit/Popover'

export interface UsePopoverStateOptions {
  hideTimeout?: number
  showTimeout?: number
  triggerMethod?: 'hover' | 'click'
  withCloseButton?: boolean
}

export type UsePopoverStateReturn = ReakitPopoverStateReturn &
  Pick<UsePopoverStateOptions, 'triggerMethod' | 'withCloseButton'>

export type UsePopoverStateProps = ReakitPopoverInitialState & UsePopoverStateOptions

export const usePopoverState: (props?: UsePopoverStateProps) => UsePopoverStateReturn = ({
  animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  triggerMethod = 'click',
  withCloseButton = false,
  ...options
} = {}) => {
  const popover = useReakitPopoverState({ animated, ...options })
  const closeCountdownRef = useRef<NodeJS.Timeout>()
  const openCountdownRef = useRef<NodeJS.Timeout>()
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
    withCloseButton,
  }
}
