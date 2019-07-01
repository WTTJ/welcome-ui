/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTabState } from 'reakit/Tab'

import { useEventListener } from '../../utils/'

import { TabsItem } from './item'
import { TabsPanel } from './panel'
import * as S from './styles'

const Tabs = ({ children, defaultActiveTab = 1, items, name }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [activeBar, setActiveBar] = useState({ width: 0, left: 0 })
  const listRef = useRef()

  const tab = useTabState({
    selectedId: defaultActiveTab
  })

  const setChild = elements =>
    React.Children.map(elements, (child, key) => {
      return React.cloneElement(child, {
        stopId: key + 1,
        ...tab
      })
    })

  // get width on resize to reset activeBar width and left
  useEventListener('resize', setWindowWidth)

  // set width & height for item active
  const setPositionActiveBar = useCallback(() => {
    const listElm = listRef && listRef.current
    const activeTabElm = listElm && listElm.querySelector('[aria-selected="true"]')

    const left =
      activeTabElm &&
      activeTabElm.getBoundingClientRect().left -
        listElm.getBoundingClientRect().left +
        listElm.scrollLeft
    const width = activeTabElm && activeTabElm.getBoundingClientRect().width
    setActiveBar({ width, left })
    // for mobile device, add scrooling on nav parent
    listElm.parentElement.scrollLeft = left
  }, [])

  useEffect(() => {
    setPositionActiveBar()
  }, [setPositionActiveBar, windowWidth, tab.selectedId])

  const tabsItems = items.props.children

  return (
    <S.Tabs>
      <S.List>
        <S.ListContent {...tab} aria-label={name} data-testid="tabsItems" ref={listRef}>
          {setChild(tabsItems)}
          {tabsItems.length > 1 && (
            <S.ActiveBar data-testid="activeBar" left={activeBar.left} width={activeBar.width} />
          )}
        </S.ListContent>
      </S.List>
      {setChild(children)}
    </S.Tabs>
  )
}

Tabs.propTypes = {
  /** <TabsPanel> children */
  children: PropTypes.node.isRequired,
  /** by default, the first child is active, you can set one by default with this property */
  defaultActiveTab: PropTypes.string,
  /** List of <TabsItem> elements */
  items: PropTypes.node.isRequired,
  /** name for the <TabList> (for accessibility) */
  name: PropTypes.string.isRequired
}

export { Tabs, TabsItem, TabsPanel }
