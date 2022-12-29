import React from 'react'
import { TabOptions as AriakitTabOptions } from 'ariakit/tab'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export type TabOptions = AriakitTabOptions
export type TabProps = CreateWuiProps<'button', TabOptions>

/**
 * @name Tabs
 */
export const TabComponent = forwardRef<'button', TabProps>(({ as, children, id, ...rest }, ref) => {
  return (
    <S.TabButton as={undefined} id={id} ref={ref} {...rest}>
      <S.Tab as={as}>{children}</S.Tab>
    </S.TabButton>
  )
})

TabComponent.displayName = 'Tab'

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabState } from 'ariakit/tab'
