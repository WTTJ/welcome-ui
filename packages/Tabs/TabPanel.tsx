import React, { forwardRef } from 'react'
import {
  TabPanelOptions as ReakitTabOptions,
  TabPanel as ReakitTabPanel,
  TabStateReturn,
} from 'reakit/Tab'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type TabPanelProps = CreateWuiProps<
  typeof ReakitTabPanel,
  Pick<TabStateReturn, 'orientation'> & ReakitTabOptions
>

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
