/* eslint-disable react/no-multi-comp */
import React, { cloneElement, useLayoutEffect, useRef, useState } from 'react'
import { any, node, oneOf, oneOfType, shape, string } from 'prop-types'
import { Tab as ReakitTab, TabList as ReakitTabList, TabPanel as ReakitTabPanel } from 'reakit/Tab'
import flattenChildren from 'react-flatten-children'
import { useForkRef, useViewportSize } from '@welcome-ui/utils'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'

import * as S from './styles'

function useTrackActiveTabs(state, children) {
  const [activeTab, setActiveTab] = useState(null)

  const tabs = flattenChildren(children).map(child => {
    if (child.props.id === state.selectedId) {
      return cloneElement(child, { ref: setActiveTab })
    }
    return child
  })
  return [tabs, activeTab]
}

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

const ActiveBar = ({ activeTab, listRef, orientation }) => {
  const activeBar = useActiveBarState(listRef, activeTab, orientation)
  return <S.ActiveBar {...activeBar} />
}
ActiveBar.displayName = 'ActiveBar'
ActiveBar.propTypes /* remove-proptypes */ = {
  activeTab: oneOfType(COMPONENT_TYPE),
  listRef: shape({ current: any }),
  orientation: oneOf(['veritcal', 'horizontal'])
}

export const TabList = React.forwardRef(({ as, children, orientation, ...props }, ref) => {
  const listRef = useRef()
  const listForkedRef = useForkRef(ref, listRef)
  const [tabs, activeTab] = useTrackActiveTabs(props, children)

  return (
    <ReakitTabList orientation={orientation} ref={listForkedRef} {...props}>
      {tabListProps => (
        <S.TabList as={as} {...tabListProps}>
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
TabList.propTypes /* remove-proptypes */ = {
  as: oneOfType(COMPONENT_TYPE),
  children: node,
  orientation: oneOf(['veritcal', 'horizontal'])
}

export const TabPanel = React.forwardRef(({ as, children, tabId, ...props }, ref) => {
  return (
    <ReakitTabPanel ref={ref} tabId={tabId} {...props}>
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
  tabId: string
}

export const Tab = React.forwardRef(({ as, children, id, ...props }, ref) => {
  return (
    <ReakitTab id={id} ref={ref} {...props}>
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
  id: string.isRequired
}

Tab.List = TabList
Tab.Panel = TabPanel

export { useTabState } from 'reakit/Tab'
