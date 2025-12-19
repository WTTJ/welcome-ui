import { TabPanel as AriakitTabPanel } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { TabPanelProps } from '../types'
import windowStyles from '../window.module.scss'

const cx = classNames(windowStyles)

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, store, tabId, ...rest }, ref) => {
    return (
      <AriakitTabPanel className={cx('tab-panel')} ref={ref} store={store} tabId={tabId} {...rest}>
        {children}
      </AriakitTabPanel>
    )
  }
)

TabPanel.displayName = 'Window.TabPanel'
