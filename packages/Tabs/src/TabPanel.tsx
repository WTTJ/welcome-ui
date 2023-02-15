import React from 'react'
import {
  TabPanel as ReakitTabPanel,
  TabPanelOptions as ReakitTabPanelOptions,
  TabStateReturn,
} from 'reakit/Tab'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type TabPanelOptions = Pick<TabStateReturn, 'orientation'> & ReakitTabPanelOptions
export type TabPanelProps = CreateWuiProps<typeof ReakitTabPanel, TabPanelOptions>

/**
 * @name Tabs.TabPanel
 */
export const TabPanel = forwardRef<'div', TabPanelProps>((props, ref) => {
  const { as, children, orientation, tabId, ...rest } = props

  return (
    <ReakitTabPanel as={undefined} ref={ref} tabId={tabId} {...rest}>
      {tabPanelProps => (
        <S.TabPanel as={as} orientation={orientation} {...tabPanelProps}>
          {children}
        </S.TabPanel>
      )}
    </ReakitTabPanel>
  )
})

TabPanel.displayName = 'TabPanel'
