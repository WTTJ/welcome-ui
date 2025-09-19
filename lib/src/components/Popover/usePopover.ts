import * as Ariakit from '@ariakit/react'

export type UsePopover = Ariakit.PopoverStore & Pick<UsePopoverProps, 'withCloseButton'>
export type UsePopoverHover = Ariakit.HovercardStore & Pick<UsePopoverHoverProps, 'withCloseButton'>

export interface UsePopoverHoverProps extends Ariakit.HovercardStoreProps {
  withCloseButton?: WithCloseButton
}

export interface UsePopoverProps extends Ariakit.PopoverStoreProps {
  withCloseButton?: WithCloseButton
}
type WithCloseButton = boolean

export const usePopover: (props?: UsePopoverProps) => UsePopover = ({
  //   animated = 150,
  withCloseButton = false,
  ...options
} = {}) => {
  const store = Ariakit.usePopoverStore({
    // animated,
    ...options,
  })

  return {
    ...store,
    withCloseButton,
  }
}

export const usePopoverHover: (props?: UsePopoverHoverProps) => UsePopoverHover = ({
  //   animated = 150,
  hideTimeout = 300,
  showTimeout = 500,
  withCloseButton = false,
  ...options
} = {}) => {
  const store = Ariakit.useHovercardStore({
    // animated,
    hideTimeout,
    showTimeout,
    ...options,
  })

  return {
    ...store,
    withCloseButton,
  }
}
