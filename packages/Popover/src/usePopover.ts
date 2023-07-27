import { useCallback, useRef } from 'react'
import * as Ariakit from '@ariakit/react'

export interface UsePopoverProps extends Ariakit.PopoverStoreProps {
  hideTimeout?: number
  showTimeout?: number
  triggerMethod?: 'hover' | 'click'
  withCloseButton?: boolean
}

export type UsePopover = Ariakit.PopoverStore &
  Pick<UsePopoverProps, 'triggerMethod' | 'withCloseButton'> & {
    /**
     * Custom hide function who call ariakit hide after a timeout if is hoverable, or not
     **/
    hide: () => void
    /**
     * Custom show function who call ariakit show after a timeout if is hoverable, or not
     **/
    show: () => void
  }

export type UsePopoverState = Ariakit.PopoverStoreState

export const usePopover: (props?: UsePopoverProps) => UsePopover = ({
  animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  triggerMethod = 'click',
  withCloseButton = false,
  ...options
} = {}) => {
  const store = Ariakit.usePopoverStore({
    animated,
    ...options,
  })
  const isOpen = store.useState('open')
  const closeCountdownRef = useRef<NodeJS.Timeout>()
  const openCountdownRef = useRef<NodeJS.Timeout>()
  const isHoverable = triggerMethod === 'hover'

  const hide = useCallback(() => {
    if (isHoverable) {
      if (!isOpen && openCountdownRef.current) {
        clearTimeout(openCountdownRef.current)
      }
      closeCountdownRef.current = setTimeout(() => store.hide(), hideTimeout)
    } else {
      store.hide()
    }
  }, [isHoverable, isOpen, hideTimeout, store])

  const show = useCallback(() => {
    if (isHoverable) {
      openCountdownRef.current = setTimeout(() => store.show(), showTimeout)
      if (closeCountdownRef.current) {
        clearTimeout(closeCountdownRef.current)
      }
    } else {
      store.show()
    }
  }, [isHoverable, showTimeout, store])

  return {
    ...store,
    show,
    hide,
    triggerMethod,
    withCloseButton,
  }
}
