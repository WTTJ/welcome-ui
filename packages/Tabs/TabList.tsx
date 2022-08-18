import React, { cloneElement, useRef, useState } from 'react'
import {
  TabList as ReakitTabList,
  TabListOptions as ReakitTabListOptions,
  TabStateReturn,
} from 'reakit/Tab'
import flattenChildren from 'react-flatten-children'
import { useForkRef } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { ActiveBar } from './ActiveBar'
import * as S from './styles'

function useTrackActiveTabs(
  state: Pick<TabStateReturn, 'selectedId'>,
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

export interface SizeOptions {
  size?: 'sm' | 'md'
}

export type TabListOptions = Pick<TabStateReturn, 'orientation' | 'selectedId'> &
  ReakitTabListOptions &
  SizeOptions
export type TabListProps = CreateWuiProps<'div', TabListOptions>

/**
 * @name Tabs.TabList
 */
export const TabList = forwardRef<'div', TabListProps>((props, ref) => {
  const { as, children, orientation, size = 'md', ...rest } = props
  const listRef = useRef()
  const listForkedRef = useForkRef(ref, listRef)
  const [tabs, activeTab] = useTrackActiveTabs({ selectedId: rest.selectedId }, children)

  return (
    <ReakitTabList as={undefined} orientation={orientation} ref={listForkedRef} {...rest}>
      {tabListProps => (
        <S.TabList as={as} {...tabListProps} size={size}>
          {tabs}
          {tabs.length > 1 && (
            <ActiveBar activeTab={activeTab} listRef={listRef} orientation={orientation} />
          )}
        </S.TabList>
      )}
    </ReakitTabList>
  )
})

TabList.displayName = 'TabList'
