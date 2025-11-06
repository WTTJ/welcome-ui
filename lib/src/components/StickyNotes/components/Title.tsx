import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from '../sticky-notes.module.scss'
import type { StickyNotesTitleProps } from '../types'

const cx = classNames(styles)

export const Title = ({ children, icon = 'lightbulb-alt', variant }: StickyNotesTitleProps) => {
  return (
    <Text as="div" className={cx('title')} variant="body-md-strong">
      <div className={cx('title-icon', `title-icon-variant-${variant}`)}>
        <Icon name={icon} />
      </div>
      <span>{children}</span>
    </Text>
  )
}
