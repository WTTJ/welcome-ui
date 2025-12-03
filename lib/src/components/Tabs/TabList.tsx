import { TabList as AriakitTabList } from '@ariakit/react'
import React, { forwardRef } from 'react'

import { classNames } from '@/utils'

import styles from './tabs.module.scss'
import type { TabListProps } from './types'

const cx = classNames(styles)

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, size = 'lg', store, ...rest }, ref) => {
    const childrenWithSize = React.Children.map(children, child =>
      React.isValidElement(child) ? React.cloneElement(child, { size }) : child
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

TabList.displayName = 'Tab.List'
