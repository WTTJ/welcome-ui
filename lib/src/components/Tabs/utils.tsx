import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import { isValidIconName } from '../Icon/icons'

import styles from './tabs.module.scss'
import type { TabListProps, TabProps } from './types'

const cx = classNames(styles)

export function getIcon({
  icon,
  iconColor,
  isActive,
  size,
}: Pick<TabProps, 'icon' | 'iconColor'> & { isActive: boolean; size: TabListProps['size'] }) {
  if (!icon) return null

  if (typeof icon !== 'string' || !isValidIconName(icon)) return icon

  return (
    <Icon
      className={
        iconColor
          ? cx('folder-icon', `folder-icon-${iconColor}${isActive ? '-active' : ''}`)
          : undefined
      }
      name={icon}
      size={size}
    />
  )
}
