import type * as Ariakit from '@ariakit/react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import type { UseTab } from '.'

import * as S from './styles'

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
