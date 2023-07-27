import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { UseTab } from '.'

export type TabPanelOptions = { store: UseTab }
export type TabPanelProps = CreateWuiProps<typeof Ariakit.TabPanel, TabPanelOptions>

/**
 * @name Tabs.TabPanel
 */
export const TabPanel = forwardRef<'div', TabPanelProps>(
  ({ as, children, store, tabId, ...rest }, ref) => {
    const orientation = store.useState('orientation')

    return (
      <Ariakit.TabPanel as={undefined} ref={ref} store={store} tabId={tabId} {...rest}>
        {tabPanelProps => (
          <S.TabPanel as={as} orientation={orientation} {...tabPanelProps}>
            {children}
          </S.TabPanel>
        )}
      </Ariakit.TabPanel>
    )
  }
)

TabPanel.displayName = 'TabPanel'
