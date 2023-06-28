import React, { cloneElement, useRef, useState } from 'react'
import * as Ariakit from '@ariakit/react'
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
  selectedId: Ariakit.TabStoreState['selectedId'],
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
  store: Ariakit.TabStore
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
