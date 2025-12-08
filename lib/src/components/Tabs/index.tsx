import { TabList as AriakitTabList } from '@ariakit/react'
import React, { cloneElement, forwardRef, isValidElement } from 'react'

import { classNames } from '@/utils'

import { Tab } from './Tab'
import { TabPanel } from './TabPanel'
import styles from './tabs.module.scss'
import type { TabListProps } from './types'

const cx = classNames(styles)

export const TabsComponent = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, size = 'lg', store, ...rest }, ref) => {
    const childrenWithSize = React.Children.map(children, child =>
      isValidElement(child) ? cloneElement(child, { size } as unknown) : child
    )

    return (
      <AriakitTabList
        className={cx('tab-list', `size-${size}`, className)}
        ref={ref}
        store={store}
        {...rest}
      >
        {childrenWithSize}
      </AriakitTabList>
    )
  }
)

TabsComponent.displayName = 'Tabs'

export const Tabs = Object.assign(TabsComponent, { Panel: TabPanel, Tab: Tab })

export { useTabStore as useTab } from '@ariakit/react'

export type {
  TabStore as UseTab,
  TabStoreProps as UseTabProps,
  TabStoreState as UseTabState,
} from '@ariakit/react'
