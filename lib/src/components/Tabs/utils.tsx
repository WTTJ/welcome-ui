import { Icon } from '@/components/Icon'

import type { TabProps } from './types'

export function getIcon({
  icon,
  iconColor,
  isActive,
}: Pick<TabProps, 'icon' | 'iconColor'> & { isActive: boolean }) {
  const iconClassName = `text-background-accent-${iconColor}-${isActive ? 'strong' : 'primary'}`

  if (!icon) return null

  if (icon !== 'folder') return icon

  return <Icon className={iconClassName} name="folder-full" />
}
