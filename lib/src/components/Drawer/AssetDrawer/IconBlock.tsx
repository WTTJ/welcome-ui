import { classNames } from '@/utils'

import styles from './asset-drawer.module.scss'
import type { IconBlockProps } from './types'

const cx = classNames(styles)

export const IconBlock = ({ icon: Icon, size = 'md' }: IconBlockProps) => {
  return (
    <div className={cx('icon-block', `size-${size}`)}>
      <Icon className="text-neutral-90" size={size} />
    </div>
  )
}
