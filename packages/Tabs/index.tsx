import React from 'react'
import { Tab as ReakitTab, TabOptions as ReakitTabOptions } from 'reakit/Tab'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export interface SizeOptions {
  size?: 'sm' | 'md'
}

export type TabOptions = ReakitTabOptions & SizeOptions
export type TabProps = CreateWuiProps<'button', TabOptions>

/**
 * @name Tabs
 */
export const TabComponent = forwardRef<'button', TabProps>(
  ({ as, children, id, size = 'md', ...rest }, ref) => {
    return (
      <ReakitTab as={undefined} id={id} ref={ref} {...rest}>
        {tabProps => (
          <S.Tab as={as} {...tabProps} size={size}>
            {children}
          </S.Tab>
        )}
      </ReakitTab>
    )
  }
)

TabComponent.displayName = 'Tab'

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabState } from 'reakit/Tab'
