import { Icon } from '@/components/Icon'
import type { IconProps } from '@/components/Icon/types'
import { classNames } from '@/utils'

import styles from './asset-drawer.module.scss'
import type { IconBlockProps } from './types'

const cx = classNames(styles)

const ICON_SIZE: { [key in IconBlockProps['size']]: IconProps['size'] } = { md: 'lg', sm: 'md' }

export const IconBlock = ({ iconName, size = 'md' }: IconBlockProps) => {
  return (
    <div className={cx('icon-block', `size-${size}`)}>
      <Icon className={cx('icon-element')} name={iconName} size={ICON_SIZE[size]} />
    </div>
  )
}

IconBlock.displayName = 'AssetDrawer.IconBlock'
