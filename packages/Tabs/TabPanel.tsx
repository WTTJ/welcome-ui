import React, { forwardRef } from 'react'
import {
  TabPanel as ReakitTabPanel,
  TabPanelProps as ReakitTabPanelProps,
  TabStateReturn,
} from 'reakit/Tab'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type TabPanelProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<TabStateReturn, 'orientation'> &
  ReakitTabPanelProps &
  WuiProps

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
