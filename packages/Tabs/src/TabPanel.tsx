import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { tabs, type TabsVariantProps } from '@welcome-ui/panda/recipes'
import { cx } from '@welcome-ui/panda/css'

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

export type TabPanelPandaOptions = TabPanelOptions & Ariakit.TabPanelOptions
export type TabPanelPandaProps = HTMLStyledProps<'div'> & TabPanelPandaOptions

const StyledTabPanelPanda = styled(Ariakit.TabPanel)

export const TabPanelPanda = React.forwardRef<HTMLDivElement, TabPanelPandaProps>(
  ({ children, className, store, tabId, ...rest }, ref) => {
    const orientation = store.useState('orientation') as TabsVariantProps['orientation']
    const { panel } = tabs({ orientation })

    return (
      <StyledTabPanelPanda
        className={cx(panel, className)}
        ref={ref}
        store={store}
        tabId={tabId}
        {...rest}
      >
        {children}
      </StyledTabPanelPanda>
    )
  }
)
