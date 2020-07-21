import React, { useLayoutEffect, useState } from 'react'
import { any, oneOf, oneOfType, shape } from 'prop-types'
import { useViewportSize } from '@welcome-ui/utils'

import { COMPONENT_TYPE } from '../../utils/propTypes'

import * as S from './styles'

function useActiveBarState(listRef, activeTab, orientation) {
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
        orientation
      })
    } else {
      const left = activeTabRect.left - listRect.left + list.scrollLeft
      const width = activeTabRect.width
      setState({
        size: width,
        offset: left,
        orientation
      })
    }
  }, [listRef, activeTab, viewportWidth, viewportHeight, orientation])

  return state
}

export const ActiveBar = ({ activeTab, listRef, orientation }) => {
  const activeBar = useActiveBarState(listRef, activeTab, orientation)
  return <S.ActiveBar {...activeBar} />
}

ActiveBar.displayName = 'ActiveBar'

ActiveBar.propTypes /* remove-proptypes */ = {
  activeTab: oneOfType(COMPONENT_TYPE),
  listRef: shape({ current: any }),
  orientation: oneOf(['vertical', 'horizontal'])
}
