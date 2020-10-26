import { usePopoverState as useReakitPopoverState } from 'reakit/Popover'

export const usePopoverState = ({ withCloseButton = false, ...options } = {}) => {
  const popover = useReakitPopoverState(options)

  return {
    ...popover,
    withCloseButton
  }
}
