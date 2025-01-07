import React from 'react'
import * as Ariakit from '@ariakit/react'

import { CreateWuiProps, forwardRef } from '../System'

import * as S from './styles'

import { UseTab } from '.'

export type TabPanelOptions = { store: UseTab }
export type TabPanelProps = CreateWuiProps<typeof Ariakit.TabPanel, TabPanelOptions>

/**
 * @name Tabs.TabPanel
 */
export const TabPanel = forwardRef<'div', TabPanelProps>(
  ({ children, store, tabId, ...rest }, ref) => {
    const orientation = store.useState('orientation')

    return (
      <S.TabPanel orientation={orientation} ref={ref} store={store} tabId={tabId} {...rest}>
        {children}
      </S.TabPanel>
    )
  }
)

TabPanel.displayName = 'TabPanel'
