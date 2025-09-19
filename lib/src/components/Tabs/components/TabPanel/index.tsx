import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { UseTab } from '../..'

import styles from './tab-panel.module.scss'

export type TabPanelProps = {
  children: React.ReactNode
  store: UseTab
  tabId?: string
}

const cx = classNames(styles)

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, store, tabId, ...rest }, ref) => {
    return (
      <Ariakit.TabPanel className={cx('root')} ref={ref} store={store} tabId={tabId} {...rest}>
        {children}
      </Ariakit.TabPanel>
    )
  }
)

TabPanel.displayName = 'TabPanel'
