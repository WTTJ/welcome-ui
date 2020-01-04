/* eslint-disable react/no-multi-comp */
import React, { cloneElement, useLayoutEffect, useState } from 'react'
import { any, node, oneOfType, shape, string } from 'prop-types'
import { Tab as ReakitTab, TabList as ReakitTabList, TabPanel as ReakitTabPanel } from 'reakit/Tab'
import flattenChildren from 'react-flatten-children'
import { useViewportSize } from '@welcome-ui/utils'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'
import { useForkRef } from '../Core/utils/ref'

import * as S from './styles'

export { useTabState } from 'reakit/Tab'

function useTrackActiveTabs(state, children) {
  const [activeTab, setActiveTab] = useState(null)
  const tabs = flattenChildren(children).map(child => {
    if (child.props.stopId === state.selectedId) {
      return cloneElement(child, { ref: setActiveTab })
    }
    return child
  })
  return [tabs, activeTab]
}

function useActiveBarState(listRef, activeTab) {
  const [state, setState] = useState({})
  const { width: viewportWidth } = useViewportSize()
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list || !activeTab) return

    const listRect = list.getBoundingClientRect()
    const activeTabRect = activeTab.getBoundingClientRect()

    const left = activeTabRect.left - listRect.left + list.scrollLeft
    const width = activeTabRect.width
    setState({
      width,
      left
    })
  }, [listRef, activeTab, viewportWidth])

  return state
}

const ActiveBar = ({ activeTab, listRef }) => {
  const activeBar = useActiveBarState(listRef, activeTab)
  return <S.ActiveBar {...activeBar} />
}
ActiveBar.displayName = 'ActiveBar'
ActiveBar.propTypes /* remove-proptypes */ = {
  activeTab: oneOfType(COMPONENT_TYPE),
  listRef: shape({ current: any })
}

export const TabList = React.forwardRef(({ as, children, ...props }, ref) => {
  const listRef = React.useRef()
  const listForkedRef = useForkRef(ref, listRef)
  const [tabs, activeTab] = useTrackActiveTabs(props, children)

  return (
    <ReakitTabList ref={listForkedRef} {...props}>
      {tabListProps => (
        <S.TabList as={as} {...tabListProps}>
          {tabs}
          {tabs.length > 1 && <ActiveBar activeTab={activeTab} listRef={listRef} />}
        </S.TabList>
      )}
    </ReakitTabList>
  )
})
TabList.displayName = 'TabList'
TabList.propTypes /* remove-proptypes */ = {
  as: oneOfType(COMPONENT_TYPE),
  children: node
}

export const Tab = React.forwardRef(({ as, children, stopId, ...props }, ref) => {
  return (
    <ReakitTab ref={ref} stopId={stopId} {...props}>
      {tabProps => (
        <S.Tab as={as} {...tabProps}>
          {children}
        </S.Tab>
      )}
    </ReakitTab>
  )
})
Tab.displayName = 'Tab'
Tab.propTypes /* remove-proptypes */ = {
  as: oneOfType(COMPONENT_TYPE),
  children: node,
  stopId: string.isRequired
}

export const TabPanel = React.forwardRef(({ as, children, stopId, ...props }, ref) => {
  return (
    <ReakitTabPanel ref={ref} stopId={stopId} {...props}>
      {tabPanelProps => (
        <S.TabPanel as={as} {...tabPanelProps}>
          {children}
        </S.TabPanel>
      )}
    </ReakitTabPanel>
  )
})
TabPanel.displayName = 'TabPanel'
TabPanel.propTypes /* remove-proptypes */ = {
  as: oneOfType(COMPONENT_TYPE),
  children: node,
  stopId: string.isRequired
}
