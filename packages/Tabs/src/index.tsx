import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export type TabOptions = { store: Ariakit.TabStore }
export type TabProps = CreateWuiProps<'button', TabOptions>

/**
 * @name Tabs
 */
export const TabComponent = forwardRef<'button', TabProps>(
  ({ as, children, id, store, ...rest }, ref) => {
    return (
      <Ariakit.Tab as={undefined} id={id} ref={ref} store={store} {...rest}>
        {tabProps => (
          <S.Tab as={as} {...tabProps}>
            {children}
          </S.Tab>
        )}
      </Ariakit.Tab>
    )
  }
)

TabComponent.displayName = 'Tab'

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabStore as useTab } from '@ariakit/react'
