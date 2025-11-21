import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from '../sticky-note.module.scss'
import type { StickyNoteTitleProps } from '../types'

const cx = classNames(styles)

export const Title = ({ children, icon = 'lightbulb-alt' }: StickyNoteTitleProps) => {
  return (
    <Text as="div" className={cx('title')} variant="body-md-strong">
      <div className={cx('title-icon')}>
        <Icon name={icon} />
      </div>
      <span>{children}</span>
    </Text>
  )
}

Title.displayName = 'StickyNote.Title'
