import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { tabs } from '@welcome-ui/panda/recipes'
import { cx } from '@welcome-ui/panda/css'

import { TabList, TabListPanda } from './TabList'
import { TabPanel, TabPanelPanda } from './TabPanel'
import * as S from './styles'

export type TabOptions = { store: UseTab }
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

export type UseTab = Ariakit.TabStore
export type UseTabProps = Ariakit.TabStoreProps
export type UseTabState = Ariakit.TabStoreState

export function useTab(options?: UseTabProps): UseTab {
  return Ariakit.useTabStore(options)
}

export type TabPandaOptions = { store: UseTab }
export type TabPandaProps = HTMLStyledProps<'button'> & TabPandaOptions
const StyledTabPanda = styled(Ariakit.Tab)

export const TabComponentPanda = React.forwardRef<HTMLButtonElement, TabPandaProps>(
  ({ children, className, id, store, ...rest }, ref) => {
    const { tab } = tabs()

    return (
      <StyledTabPanda className={cx(tab, className)} id={id} ref={ref} store={store} {...rest}>
        {children}
      </StyledTabPanda>
    )
  }
)

export const TabPanda = Object.assign(TabComponentPanda, {
  List: TabListPanda,
  Panel: TabPanelPanda,
})
