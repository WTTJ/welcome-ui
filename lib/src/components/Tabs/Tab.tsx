import { Tab as AriakitTab, useStoreState } from '@ariakit/react'

import { Badge } from '@/components/Badge'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { useTabSize } from './TabContext'
import styles from './tabs.module.scss'
import type { TabProps } from './types'
import { getIcon } from './utils'

const cx = classNames(styles)

export const Tab = forwardRefWithAs<TabProps, 'button'>(
  (
    {
      as: Component,
      badge,
      children,
      className,
      icon,
      iconColor = 'violet',
      id,
      size,
      store,
      ...rest
    },
    ref
  ) => {
    const contextSize = useTabSize()
    const finalSize = size || contextSize

    const { selectedId } = useStoreState(store)
    const isActive = selectedId === id

    const tabIcon = getIcon({
      icon,
      iconColor,
      isActive,
      size: finalSize,
    })

    const badgeVariant = isActive ? 'neutral' : 'warm'

    return (
      <AriakitTab
        className={cx('root', `size-${finalSize}`, className)}
        id={id}
        ref={ref}
        render={Component ? <Component /> : undefined}
        store={store}
        {...rest}
      >
        {tabIcon}
        {children}
        {badge ? (
          <Badge size={finalSize} variant={badgeVariant}>
            {badge}
          </Badge>
        ) : null}
      </AriakitTab>
    )
  }
)

Tab.displayName = 'Tabs.Tab'
