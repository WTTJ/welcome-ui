import { TabPanel as AriakitTabPanel } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { TabPanelProps } from '../../types'

import styles from './tab-panel.module.scss'

const cx = classNames(styles)

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, store, tabId, ...rest }, ref) => {
    return (
      <AriakitTabPanel className={cx('root')} ref={ref} store={store} tabId={tabId} {...rest}>
        {children}
      </AriakitTabPanel>
    )
  }
)
