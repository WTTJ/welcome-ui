import React, { cloneElement, useRef, useState } from 'react'
import * as Ariakit from '@ariakit/react'
import reactFlattenChildren from 'react-flatten-children'
import { useForkRef } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { tabs as tabsRecipe, type TabsVariantProps } from '@welcome-ui/panda/recipes'

import { ActiveBar, ActiveBarPanda } from './ActiveBar'
import * as S from './styles'

import { UseTab, UseTabState } from '.'

// because of the compatibility of esm standard. Since this lib is no longer maintained, no issue was created
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const flattenChildren = reactFlattenChildren.default || reactFlattenChildren

function useTrackActiveTabs(
  selectedId: UseTabState['selectedId'],
  children: React.ReactNode
): [ReturnType<typeof flattenChildren>, HTMLElement] {
  const [activeTab, setActiveTab] = useState<HTMLElement>(null)

  const tabs = flattenChildren(children).map((child: React.ReactElement) => {
    if (child.props.id === selectedId) {
      return cloneElement(child, { ref: setActiveTab })
    }
    return child
  })
  return [tabs, activeTab]
}

export interface SizeOptions {
  size?: 'sm' | 'md'
}

export type TabListOptions = SizeOptions & {
  store: UseTab
}
export type TabListProps = CreateWuiProps<'div', TabListOptions>

/**
 * @name Tabs.TabList
 */
export const TabList = forwardRef<'div', TabListProps>(
  ({ as, children, size = 'md', store, ...rest }, ref) => {
    const listRef = useRef()
    const listForkedRef = useForkRef(ref, listRef)
    const { orientation, selectedId } = store.useState()
    const [tabs, activeTab] = useTrackActiveTabs(selectedId, children)

    return (
      <Ariakit.TabList
        as={undefined}
        orientation={orientation}
        ref={listForkedRef}
        store={store}
        {...rest}
      >
        {tabListProps => (
          <S.TabList as={as} {...tabListProps} size={size}>
            {tabs}
            {tabs.length > 1 && (
              <ActiveBar activeTab={activeTab} listRef={listRef} orientation={orientation} />
            )}
          </S.TabList>
        )}
      </Ariakit.TabList>
    )
  }
)

TabList.displayName = 'TabList'

export type TabListPandaOptions = TabsVariantProps & { store: UseTab }
export type TabListPandaProps = HTMLStyledProps<'div'> & TabListPandaOptions
const StyledTabListPanda = styled(Ariakit.TabList)

export const TabListPanda = React.forwardRef<HTMLDivElement, TabListPandaProps>(
  ({ children, size = 'md', store }, ref) => {
    const listRef = useRef()
    const listForkedRef = useForkRef(ref, listRef)
    const { orientation, selectedId } = store.useState()
    const [tabs, activeTab] = useTrackActiveTabs(selectedId, children)
    const classes = tabsRecipe({
      orientation: orientation as TabsVariantProps['orientation'],
      size,
    })

    return (
      <StyledTabListPanda className={classes.list} ref={listForkedRef} store={store}>
        {tabs}
        {tabs.length > 1 && (
          <ActiveBarPanda
            activeTab={activeTab}
            className={classes.activeBar}
            listRef={listRef}
            orientation={orientation}
          />
        )}
      </StyledTabListPanda>
    )
  }
)
