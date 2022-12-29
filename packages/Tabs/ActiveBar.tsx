import React, { useLayoutEffect, useState } from 'react'
import { useViewportSize } from '@welcome-ui/utils'
import { TabState } from 'ariakit/tab'

import * as S from './styles'

export interface ActiveBarStateReturn {
  offset?: number
  size?: number
  orientation?: TabState['orientation']
}

function useActiveBarState(
  listRef: React.MutableRefObject<HTMLElement>,
  activeTab: HTMLElement,
  orientation: TabState['orientation']
): ActiveBarStateReturn {
  const [state, setState] = useState({})
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()

  useLayoutEffect(() => {
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

export type ActiveBarProps = Pick<TabState, 'orientation'> & ActiveBarOptions

export const ActiveBar: React.FC<ActiveBarProps> = ({ activeTab, listRef, orientation }) => {
  const activeBar = useActiveBarState(listRef, activeTab, orientation)
  return <S.ActiveBar data-testid="tabs-active-bar" {...activeBar} />
}

ActiveBar.displayName = 'ActiveBar'
