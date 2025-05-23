import * as Ariakit from '@ariakit/react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'

export type TabOptions = { store: UseTab }
export type TabProps = CreateWuiProps<'button', TabOptions>

/**
 * @name Tabs
 */
export const TabComponent = forwardRef<'button', TabProps>(
  ({ as, children, id, store, ...rest }, ref) => {
    return (
      <Ariakit.Tab
        id={id}
        render={props => <S.Tab as={as} {...props} ref={ref} />}
        store={store}
        {...(rest as Ariakit.TabProps)}
      >
        {children}
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
