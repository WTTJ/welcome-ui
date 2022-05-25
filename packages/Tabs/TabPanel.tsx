import React, { forwardRef } from 'react'
import {
  TabPanel as ReakitTabPanel,
  TabPanelProps as ReakitTabPanelProps,
  TabStateReturn,
} from 'reakit/Tab'
import { As } from '@welcome-ui/system'

import * as S from './styles'

export type TabPanelOptions = Pick<TabStateReturn, 'orientation'> & { as?: As }
export type TabPanelProps = ReakitTabPanelProps & TabPanelOptions

/**
 * @name Tabs.TabPanel
 */
export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const { as, children, orientation, tabId, ...rest } = props
  return (
    <ReakitTabPanel ref={ref} tabId={tabId} {...rest}>
      {tabPanelProps => (
        <S.TabPanel as={as} orientation={orientation} {...tabPanelProps}>
          {children}
        </S.TabPanel>
      )}
    </ReakitTabPanel>
  )
})

TabPanel.displayName = 'TabPanel'
