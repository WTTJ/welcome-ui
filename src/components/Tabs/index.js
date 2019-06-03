import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { useEventListener } from '../../utils/hooks'

import * as S from './styles'
import { TabsItem } from './item'

const Tabs = ({ children, defaultActiveTab, onChangeTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const [windowWidth, setWindowWidth] = useState(0)
  const [activeBar, setActiveBar] = useState({ width: 0, left: 0 })
  const listRef = useRef()
  const activeRef = useRef()

  // get width on resize to reset activeBar with and left
  useEventListener('resize', setWindowWidth)

  // set width & height for item active
  const setPositionActiveBar = useCallback(() => {
    const activeTabElm = activeRef && activeRef.current
    const listElm = listRef && listRef.current

    const left = activeTabElm.getBoundingClientRect().left - listElm.getBoundingClientRect().left
    const width = activeTabElm.getBoundingClientRect().width
    setActiveBar({ width, left })
    // for mobile device, add scrooling on nav parent
    listElm.parentElement.scrollLeft = left
  }, [])

  const updateActiveTab = name => {
    // onChangeTab from property, return to parent tab selected
    onChangeTab(name)
    setActiveTab(name)
  }

  useEffect(() => {
    setPositionActiveBar(activeRef, listRef)
  }, [activeTab, activeRef, setPositionActiveBar, windowWidth])

  // when defaultActiveTab property change from parent, we set new active tab
  useEffect(() => {
    setActiveTab(defaultActiveTab)
  }, [defaultActiveTab])

  const tabs = React.Children.map(children, (child, key) => {
    const name = child.props.name
    const isActiveTab = activeTab ? activeTab === name : key === 0

    return React.cloneElement(child, {
      active: isActiveTab,
      onClick: () => !isActiveTab && updateActiveTab(name, child),
      // set ref to active tab
      ref: isActiveTab ? activeRef : null
    })
  })

  return (
    <S.Tabs>
      <S.List ref={listRef} role="tablist">
        {tabs}
      </S.List>
      <S.ActiveBar left={activeBar.left} width={activeBar.width} />
    </S.Tabs>
  )
}

Tabs.propTypes = {
  /** <TabsItem> childs */
  children: PropTypes.node.isRequired,
  /** by default, the first child is active, you can set one by default with this property */
  defaultActiveTab: PropTypes.string,
  /** return active tab */
  onChangeTab: PropTypes.func.isRequired
}

export { Tabs, TabsItem }
