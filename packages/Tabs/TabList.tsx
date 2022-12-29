import React, { cloneElement, useRef, useState } from 'react'
import {
  TabList as AriakitTabList,
  TabListOptions as AriakitTabListOptions,
  TabState,
} from 'ariakit/tab'
import flattenChildren from 'react-flatten-children'
import { useForkRef } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { ActiveBar } from './ActiveBar'
import * as S from './styles'

function useTrackActiveTabs(
  state: Pick<TabState, 'selectedId'>,
  children: React.ReactNode
): [ReturnType<typeof flattenChildren>, HTMLElement] {
  const [activeTab, setActiveTab] = useState<HTMLElement>(null)
  const tabs = flattenChildren(children).map((child: React.ReactElement) => {
    if (child.props.id === state.selectedId) {
      return cloneElement(child, { ref: setActiveTab })
    }
    return child
  })
  return [tabs, activeTab]
}

export type Size = 'sm' | 'md'

export type TabListOptions = Pick<TabState, 'orientation' | 'selectedId'> &
  AriakitTabListOptions & { size?: Size }
export type TabListProps = CreateWuiProps<'button', TabListOptions>

/**
 * @name Tabs.TabList
 */
export const TabList = forwardRef<'div', TabListProps>(
  ({ children, size = 'md', state, ...rest }, ref) => {
    const { activeId, orientation } = state
    const listRef = useRef()
    const listForkedRef = useForkRef(ref, listRef)
    const [tabs, activeTab] = useTrackActiveTabs({ selectedId: activeId }, children)

    return (
      <AriakitTabList as={undefined} ref={listForkedRef} state={state}>
        <S.TabList $orientation={orientation} $size={size} {...rest}>
          {tabs}
          {tabs.length > 1 && (
            <ActiveBar activeTab={activeTab} listRef={listRef} orientation={orientation} />
          )}
        </S.TabList>
      </AriakitTabList>
    )
  }
)

TabList.displayName = 'TabList'
