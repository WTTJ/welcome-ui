import * as Ariakit from '@ariakit/react'
import React, { forwardRef, useRef } from 'react'

import { classNames } from '@/utils'

import type { UseTab } from '../..'
import { useForkRef, useTrackActiveTabs } from '../../utils'
import { ActiveBar } from '../ActiveBar'

import styles from './tab-list.module.scss'

export type Size = 'md' | 'sm'

export type TabListProps = {
  children: React.ReactNode
  className?: string
  size?: Size
  store: UseTab
}

const cx = classNames(styles)

export const TabList = forwardRef<'div', TabListProps>(
  ({ children, className, size = 'md', store, ...rest }, ref) => {
    const listRef = useRef()
    const listForkedRef = useForkRef(ref, listRef)

    const { orientation, selectedId } = Ariakit.useStoreState(store)
    const { activeTab, tabs } = useTrackActiveTabs(selectedId, children)

    const hasMultipleTabs = React.Children.count(children) > 1

    return (
      <Ariakit.TabList
        className={cx('root', size && `size-${size}`, className)}
        ref={listForkedRef}
        store={store}
        {...rest}
      >
        {tabs}
        {hasMultipleTabs ? (
          <ActiveBar activeTab={activeTab} listRef={listRef} orientation={orientation} />
        ) : null}
      </Ariakit.TabList>
    )
  }
)

TabList.displayName = 'TabList'
