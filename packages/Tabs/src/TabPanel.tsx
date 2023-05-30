import React from 'react'
import { TabPanel as ReakitTabPanel, TabStateReturn } from 'reakit'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type TabPanelOptions = { state: TabStateReturn }
export type TabPanelProps = CreateWuiProps<typeof ReakitTabPanel, TabPanelOptions>

/**
 * @name Tabs.TabPanel
 */
export const TabPanel = forwardRef<'div', TabPanelProps>(
  ({ as, children, state, tabId, ...rest }, ref) => {
    return (
      <ReakitTabPanel as={undefined} ref={ref} tabId={tabId} {...state} {...rest}>
        {tabPanelProps => (
          <S.TabPanel as={as} orientation={state?.orientation} {...tabPanelProps}>
            {children}
          </S.TabPanel>
        )}
      </ReakitTabPanel>
    )
  }
)

TabPanel.displayName = 'TabPanel'
