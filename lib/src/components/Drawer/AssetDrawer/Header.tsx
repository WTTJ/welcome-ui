import { Button } from '@/components/Button'
import { ArrowLeftIcon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './asset-drawer.module.scss'
import { IconBlock } from './IconBlock'
import type { HeaderProps } from './types'

const cx = classNames(styles)

export const Header = ({
  action,
  className,
  icon,
  onBackButtonClick,
  subtitle,
  title,
}: HeaderProps) => {
  return (
    <div className={cx('asset-drawer-header', className)}>
      <div className={cx('back-button')}>
        {!!onBackButtonClick && (
          <Button onClick={onBackButtonClick} shape="circle" size="lg" variant="ghost">
            <ArrowLeftIcon />
          </Button>
        )}
        {!!icon && <IconBlock icon={icon} />}
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
