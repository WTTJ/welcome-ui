import { TabList as AriakitTabList } from '@ariakit/react'
import React, { forwardRef, useRef } from 'react'

import { classNames } from '@/utils'
import { useForkRef } from '@/utils/useForkRef'

import type { TabListProps } from '../../types'

import styles from './tab-list.module.scss'

const cx = classNames(styles)

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, size = 'lg', store, ...rest }, ref) => {
    const listRef = useRef()
    const [, listForkedRef] = useForkRef<HTMLDivElement>(ref, listRef)

    const childrenWithSize = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          size,
        } as unknown)
      }
      return child
    })

    return (
      <AriakitTabList
        className={cx('root', `size-${size}`, className)}
        ref={listForkedRef}
        store={store}
        {...rest}
      >
        {childrenWithSize}
      </AriakitTabList>
    )
  }
)

TabList.displayName = 'Tab.List'
