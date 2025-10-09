import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './asset-drawer.module.scss'
import { IconBlock } from './IconBlock'
import type { HeaderProps } from './types'

const cx = classNames(styles)

export const Header = ({
  action,
  className,
  iconName,
  onBackButtonClick,
  subtitle,
  title,
}: HeaderProps) => {
  return (
    <div className={cx('asset-drawer-header', className)}>
      <div className={cx('back-button')}>
        {!!onBackButtonClick && (
          <Button onClick={onBackButtonClick} variant="tertiary">
            <Icon name="arrow-left" />
          </Button>
        )}
        {!!iconName && <IconBlock iconName={iconName} />}
        <div className={cx('title')}>
          <Text className="pr-xl" variant="h3">
            {title}
          </Text>
          {subtitle}
        </div>
      </div>
      {action ? <div className={cx('actions')}>{action}</div> : null}
    </div>
  )
}
