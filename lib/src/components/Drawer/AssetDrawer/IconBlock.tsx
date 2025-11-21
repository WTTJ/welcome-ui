import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import styles from './asset-drawer.module.scss'
import type { IconBlockProps } from './types'

const cx = classNames(styles)

export const IconBlock = ({ iconName, size = 'md' }: IconBlockProps) => {
  return (
    <div className={cx('icon-block', `size-${size}`)}>
      <Icon className="text-neutral-90" name={iconName} size={size} />
    </div>
  )
}

IconBlock.displayName = 'AssetDrawer.IconBlock'
