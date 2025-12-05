import { Icon } from '@/components/Icon'

import type { TabProps } from './types'

export function getIcon({
  icon,
  iconColor,
  isActive,
}: Pick<TabProps, 'icon' | 'iconColor'> & { isActive: boolean }) {
  if (!icon) return null

  if (typeof icon !== 'string') return icon

  const iconClassName = (() => {
    switch (iconColor) {
      case 'blue':
        return isActive
          ? 'text-background-accent-blue-strong'
          : 'text-background-accent-blue-primary'
      case 'green':
        return isActive
          ? 'text-background-accent-green-strong'
          : 'text-background-accent-green-primary'
      case 'orange':
        return isActive
          ? 'text-background-accent-orange-strong'
          : 'text-background-accent-orange-primary'
      case 'pink':
        return isActive
          ? 'text-background-accent-pink-strong'
          : 'text-background-accent-pink-primary'
      case 'teal':
        return isActive
          ? 'text-background-accent-teal-strong'
          : 'text-background-accent-teal-primary'
      case 'violet':
        return isActive
          ? 'text-background-accent-violet-strong'
          : 'text-background-accent-violet-primary'
      case 'warm':
        return isActive
          ? 'text-background-accent-warm-strong'
          : 'text-background-accent-warm-primary'
      default:
        return ''
    }
  })()

  return <Icon className={iconClassName} name={icon} />
}
