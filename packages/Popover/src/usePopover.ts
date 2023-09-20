import * as Ariakit from '@ariakit/react'

type WithCloseButton = boolean

export interface UsePopoverProps extends Ariakit.PopoverStoreProps {
  withCloseButton?: WithCloseButton
}
export type UsePopover = Ariakit.PopoverStore & Pick<UsePopoverProps, 'withCloseButton'>
export type UsePopoverState = Ariakit.PopoverStoreState

export interface UsePopoverHoverProps extends Ariakit.HovercardStoreProps {
  withCloseButton?: WithCloseButton
}
export type UsePopoverHover = Ariakit.HovercardStore & Pick<UsePopoverHoverProps, 'withCloseButton'>
export type UsePopoverHoverState = Ariakit.HovercardStoreState

export const usePopover: (props?: UsePopoverProps) => UsePopover = ({
  animated = 150,
  withCloseButton = false,
  ...options
} = {}) => {
  const store = Ariakit.usePopoverStore({
    animated,
    ...options,
  })

  return {
    ...store,
    withCloseButton,
  }
}

export const usePopoverHover: (props?: UsePopoverHoverProps) => UsePopoverHover = ({
  animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  withCloseButton = false,
  ...options
} = {}) => {
  const store = Ariakit.useHovercardStore({
    animated,
    hideTimeout,
    showTimeout,
    ...options,
  })

  return {
    ...store,
    withCloseButton,
  }
}
