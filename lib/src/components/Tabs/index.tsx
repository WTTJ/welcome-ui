import * as Ariakit from '@ariakit/react'
import type { TabStoreProps as AriakitTabStoreProps } from '@ariakit/react'
import React from 'react'

import type { PolymorphicProps } from '@/theme/types'
import { classNames } from '@/utils'

import { TabList } from './components/TabList'
import { TabPanel } from './components/TabPanel'
import styles from './tabs.module.scss'

export type TabProps<T extends React.ElementType = 'button'> = AriakitTabStoreProps &
  PolymorphicProps<T> &
  TabOptions

export type UseTab = Ariakit.TabStore

export type UseTabProps = Ariakit.TabStoreProps

export type UseTabState = Ariakit.TabStoreState

type Size = 'md' | 'sm'

interface TabOptions {
  children: React.ReactNode
  className?: string
  id?: string
  size?: Size
  store: UseTab
}

const cx = classNames(styles)

export const TabComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    { as, children, className, id, store, ...rest }: TabProps<T> & { as?: T },
    ref: React.Ref<HTMLElement>
  ) => {
    const As = (as || 'button') as React.ElementType
    return (
      <Ariakit.Tab
        className={cx('root', className)}
        id={id}
        render={props => <As {...props} ref={ref} />}
        store={store}
        {...rest}
      >
        {children}
      </Ariakit.Tab>
    )
  }
)

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabStore as useTab } from '@ariakit/react'
