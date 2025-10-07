import { TabList as AriakitTabList, useStoreState } from '@ariakit/react'
import React, { forwardRef, useRef } from 'react'

import { classNames } from '@/utils'
import { useForkRef } from '@/utils/useForkRef'

import type { TabListProps } from '../../types'
import { useTrackActiveTabs } from '../../utils'
import { ActiveBar } from '../ActiveBar'

import styles from './tab-list.module.scss'

const cx = classNames(styles)

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, size = 'md', store, ...rest }, ref) => {
    const listRef = useRef()
    const [, listForkedRef] = useForkRef<HTMLDivElement>(ref, listRef)

    const { orientation, selectedId } = useStoreState(store)
    const { activeTab, tabs } = useTrackActiveTabs(selectedId, children)

    const hasMultipleTabs = React.Children.count(children) > 1

    return (
      <AriakitTabList
        className={cx('root', `size-${size}`, className)}
        ref={listForkedRef}
        store={store}
        {...rest}
      >
        {tabs}
        {hasMultipleTabs ? (
          <ActiveBar activeTab={activeTab} listRef={listRef} orientation={orientation} />
        ) : null}
      </AriakitTabList>
    )
  }
)
