import { useCallback, useRef } from 'react'
import {
  PopoverInitialState as ReakitPopoverInitialState,
  PopoverStateReturn as ReakitPopoverStateReturn,
  usePopoverState as useReakitPopoverState,
} from 'reakit/Popover'

export interface UsePopoverStateOptions extends ReakitPopoverInitialState {
  hideTimeout?: number
  showTimeout?: number
  triggerMethod?: 'hover' | 'click'
  withCloseButton?: boolean
  /**
   * @deprecated
   * will be replace by open on ariakit (reakit v2)
   **/
  visible?: ReakitPopoverInitialState['visible']
  /**
   * Open the popover on load
   */
  open?: ReakitPopoverInitialState['visible']
}

export type UsePopoverStateReturn = ReakitPopoverStateReturn &
  Pick<UsePopoverStateOptions, 'triggerMethod' | 'withCloseButton'> & {
    /**
     * @deprecated
     * will be replace by open on ariakit (reakit v2)
     **/
    visible?: ReakitPopoverStateReturn['visible']
    /**
     * Open the popover on load
     **/
    open?: ReakitPopoverStateReturn['visible']
    /**
     * Custom hide function who call reakit hide after a timeout if is hoverable, or not
     **/
    hide: () => void
    /**
     * Custom show function who call reakit show after a timeout if is hoverable, or not
     **/
    show: () => void
  }

export const usePopoverState: (props?: UsePopoverStateOptions) => UsePopoverStateReturn = ({
  animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  triggerMethod = 'click',
  withCloseButton = false,
  ...options
} = {}) => {
  const { open, visible } = options
  const popover = useReakitPopoverState({
    animated,
    visible: visible || open,
    ...options,
  })
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
    open: popover.visible,
    hide,
    show,
    triggerMethod,
    withCloseButton,
  }
}
