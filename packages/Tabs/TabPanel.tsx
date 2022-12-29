import React from 'react'
import {
  TabPanelOptions as AriakitPanelOptions,
  TabPanel as AriakitTabPanel,
  TabState,
} from 'ariakit/tab'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type TabPanelOptions = Pick<TabState, 'orientation'> & AriakitPanelOptions
export type TabPanelProps = CreateWuiProps<
  typeof AriakitTabPanel,
  TabPanelOptions & {
    children: JSX.Element
  }
>

/**
 * @name Tabs.TabPanel
 */
export const TabPanel = forwardRef<'div', TabPanelProps>(
  ({ as, children, state, tabId, ...rest }, ref) => {
    const { orientation } = state

    return (
      <AriakitTabPanel as={undefined} ref={ref} state={state} tabId={tabId} {...rest}>
        <S.TabPanel as={as} orientation={orientation}>
          {children}
        </S.TabPanel>
      </AriakitTabPanel>
    )
  }
)

TabPanel.displayName = 'TabPanel'
