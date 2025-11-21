import { Icon } from '@/components/Icon'

import type { StepperItemProps } from './types'

// Utility function to get the appropriate icon based on status or custom icon
export function getIcon({
  icon,
  isCompleted,
  isOpen,
}: Pick<StepperItemProps, 'icon' | 'isCompleted' | 'isOpen'>) {
  if (icon) return icon
  if (isCompleted) {
    return <Icon name="check-circle" />
  }
  if (isOpen) {
    return <Icon name="folder-open" />
  }
  return <Icon name="folder" />
}
