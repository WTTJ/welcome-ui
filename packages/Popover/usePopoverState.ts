import { useCallback, useRef } from 'react'
import {
  PopoverState,
  PopoverStateProps,
  usePopoverState as useAriakitPopoverState,
} from 'ariakit/popover'

export interface UsePopoverStateOptions {
  hideTimeout?: number
  showTimeout?: number
  triggerMethod?: 'hover' | 'click'
  withCloseButton?: boolean
  withLightBackground?: boolean
}

export type UsePopoverStateProps = PopoverStateProps & UsePopoverStateOptions

export type UsePopoverStateReturn = PopoverState &
  Pick<UsePopoverStateOptions, 'triggerMethod' | 'withCloseButton' | 'withLightBackground'>

export const usePopoverState: (props?: UsePopoverStateProps) => UsePopoverStateReturn = ({
  animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  triggerMethod = 'click',
  withCloseButton = false,
  withLightBackground = false,
  ...options
} = {}) => {
  const popoverState = useAriakitPopoverState({ animated, ...options })
  const closeCountdownRef = useRef<NodeJS.Timeout>()
  const openCountdownRef = useRef<NodeJS.Timeout>()
  const isHoverable = triggerMethod === 'hover'

  const hide = useCallback(() => {
    if (isHoverable) {
      if (!popoverState.open && openCountdownRef.current) {
        clearTimeout(openCountdownRef.current)
      }
      closeCountdownRef.current = setTimeout(() => popoverState.hide(), hideTimeout)
    } else {
      popoverState.hide()
    }
  }, [isHoverable, popoverState, hideTimeout])

  const show = useCallback(() => {
    if (isHoverable) {
      openCountdownRef.current = setTimeout(() => popoverState.show(), showTimeout)
      if (closeCountdownRef.current) {
        clearTimeout(closeCountdownRef.current)
      }
    } else {
      popoverState.show()
    }
  }, [isHoverable, showTimeout, popoverState])

  return {
    ...popoverState,
    hide,
    show,
    triggerMethod,
    withCloseButton,
    withLightBackground,
  }
}
