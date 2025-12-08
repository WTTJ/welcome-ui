import { Tab as AriakitTab, useStoreState } from '@ariakit/react'

import { Badge } from '@/components/Badge'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import styles from './tabs.module.scss'
import type { TabProps } from './types'
import { getIcon } from './utils'

const cx = classNames(styles)

export const Tab = forwardRefWithAs<TabProps, 'button'>(
  (
    {
      as: As,
      badge,
      children,
      className,
      icon,
      iconColor = 'violet',
      id,
      size = 'lg',
      store,
      ...rest
    },
    ref
  ) => {
    const { selectedId } = useStoreState(store)
    const isActive = selectedId === id

    const tabIcon = getIcon({
      icon,
      iconColor,
      isActive,
    })

    const badgeVariant = isActive ? 'neutral' : 'warm'

    return (
      <AriakitTab
        className={cx('root', `size-${size}`, className)}
        id={id}
        ref={ref}
        render={As ? <As /> : undefined}
        store={store}
        {...rest}
      >
        {tabIcon}
        {children}
        {badge ? (
          <Badge size={size} variant={badgeVariant}>
            {badge}
          </Badge>
        ) : null}
      </AriakitTab>
    )
  }
)

Tab.displayName = 'Tabs.Tab'
