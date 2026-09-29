import { Tab as AriakitTab, useStoreState } from '@ariakit/react'

import { Badge } from '@/components/Badge'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { useTabOrientation, useTabSize } from './TabContext'
import styles from './tabs.module.scss'
import type { TabProps } from './types'
import { getIcon } from './utils'

const cx = classNames(styles)

export const Tab = forwardRefWithAs<TabProps, 'button'>(
  (
    {
      as: Component,
      badge,
      badgeVariant: badgeVariantProp,
      children,
      className,
      dashed,
      icon,
      iconColor = 'violet',
      id,
      store,
      ...rest
    },
    ref
  ) => {
    const size = useTabSize()
    const orientation = useTabOrientation()

    const { selectedId } = useStoreState(store)
    const isActive = selectedId === id

    const tabIcon = getIcon({
      icon,
      iconColor,
      isActive,
      size,
    })

    // always neutral when tab is active
    // use variant prop otherwise
    const badgeVariant = isActive ? 'neutral' : badgeVariantProp || 'warm'

    return (
      <AriakitTab
        className={cx(
          'root',
          `size-${size}`,
          orientation === 'vertical' && 'orientation-vertical',
          dashed && 'dashed',
          className
        )}
        id={id}
        ref={ref}
        render={Component ? <Component /> : undefined}
        store={store}
        {...rest}
      >
        <span className={cx('content')}>
          {tabIcon ? <span className={cx('icon')}>{tabIcon}</span> : null}
          {children}
        </span>
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
