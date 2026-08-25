import { TabList as AriakitTabList } from '@ariakit/react'
import { forwardRef, useEffect } from 'react'

import { classNames } from '@/utils'

import { Tab } from './Tab'
import { TabContext } from './TabContext'
import { TabPanel } from './TabPanel'
import styles from './tabs.module.scss'
import type { TabListProps } from './types'

export { styles as tabsClasses }

const cx = classNames(styles)

export const TabsComponent = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, size = 'lg', store, vertical = false, ...rest }, ref) => {
    useEffect(() => {
      store?.setState('orientation', vertical ? 'vertical' : 'horizontal')
    }, [store, vertical])

    return (
      <AriakitTabList
        className={cx('tab-list', `size-${size}`, vertical && 'orientation-vertical', className)}
        ref={ref}
        store={store}
        {...rest}
      >
        <TabContext.Provider value={{ size, vertical }}>{children}</TabContext.Provider>
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
