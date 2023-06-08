import React, { cloneElement, useRef, useState } from 'react'
import { TabList as ReakitTabList, TabStateReturn } from 'reakit'
import reactFlattenChildren from 'react-flatten-children'
import { useForkRef } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { ActiveBar } from './ActiveBar'
import * as S from './styles'

// because of the compatibility of esm standard. Since this lib is no longer maintained, no issue was created
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const flattenChildren = reactFlattenChildren.default || reactFlattenChildren

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

export type TabListOptions = SizeOptions & {
  state: Pick<TabStateReturn, 'orientation' | 'selectedId'>
}
export type TabListProps = CreateWuiProps<'div', TabListOptions>

/**
 * @name Tabs.TabList
 */
export const TabList = forwardRef<'div', TabListProps>(
  ({ as, children, size = 'md', state = {}, ...rest }, ref) => {
    const listRef = useRef()
    const listForkedRef = useForkRef(ref, listRef)
    const { orientation } = state
    const [tabs, activeTab] = useTrackActiveTabs({ selectedId: state.selectedId }, children)

    return (
      <ReakitTabList
        as={undefined}
        orientation={orientation}
        ref={listForkedRef}
        {...state}
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
      </ReakitTabList>
    )
  }
)

TabList.displayName = 'TabList'
