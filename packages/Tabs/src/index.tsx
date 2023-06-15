import React from 'react'
import { Tab as ReakitTab, TabOptions as ReakitTabOptions, TabStateReturn } from 'reakit'
import { CreateWuiProps, forwardRef, OmitReakitState } from '@welcome-ui/system'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export type TabOptions = { state: TabStateReturn }
export type TabProps = CreateWuiProps<'button', OmitReakitState<TabOptions, ReakitTabOptions>>

/**
 * @name Tabs
 */
export const TabComponent = forwardRef<'button', TabProps>(
  ({ as, children, id, state, ...rest }, ref) => {
    return (
      <ReakitTab as={undefined} id={id} ref={ref} {...state} {...rest}>
        {tabProps => (
          <S.Tab as={as} {...tabProps}>
            {children}
          </S.Tab>
        )}
      </ReakitTab>
    )
  }
)

TabComponent.displayName = 'Tab'

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabState } from 'reakit'
