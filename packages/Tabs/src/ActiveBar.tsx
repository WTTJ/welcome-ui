import React, { useState } from 'react'
import { useViewportSize } from '@welcome-ui/utils'
import { useIsomorphicLayoutEffect } from '@welcome-ui/utils'
import { TabStoreState } from '@ariakit/react'

import * as S from './styles'

export interface ActiveBarReturn {
  offset?: number
  size?: number
  orientation?: TabStoreState['orientation']
}

function useActiveBar(
  listRef: React.MutableRefObject<HTMLElement>,
  activeTab: HTMLElement,
  orientation: TabStoreState['orientation']
): ActiveBarReturn {
  const [state, setState] = useState({})
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()

  useIsomorphicLayoutEffect(() => {
    const list = listRef.current
    if (!list || !activeTab) return

    const listRect = list.getBoundingClientRect()
    const activeTabRect = activeTab.getBoundingClientRect()

    if (orientation === 'vertical') {
      const top = activeTabRect.top - listRect.top
      const height = activeTabRect.height
      setState({
        size: height,
        offset: top,
        orientation,
      })
    } else {
      const left = activeTabRect.left - listRect.left + list.scrollLeft
      const width = activeTabRect.width
      setState({
        size: width,
        offset: left,
        orientation,
      })
    }
  }, [listRef, activeTab, viewportWidth, viewportHeight, orientation])

  return state
}

export interface ActiveBarOptions {
  activeTab: HTMLElement
  listRef: React.MutableRefObject<undefined>
}

export type ActiveBarProps = Pick<TabStoreState, 'orientation'> & ActiveBarOptions

export const ActiveBar: React.FC<ActiveBarProps> = ({ activeTab, listRef, orientation }) => {
  const activeBar = useActiveBar(listRef, activeTab, orientation)
  return <S.ActiveBar {...activeBar} />
}

ActiveBar.displayName = 'ActiveBar'
