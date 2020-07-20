import React, { cloneElement, forwardRef, useRef, useState } from 'react'
import { node, oneOf, oneOfType } from 'prop-types'
import { TabList as ReakitTabList } from 'reakit/Tab'
import flattenChildren from 'react-flatten-children'
import { useForkRef } from '@welcome-ui/utils'

import { COMPONENT_TYPE } from '../../utils/propTypes'

import { ActiveBar } from './ActiveBar'
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

export const TabList = forwardRef((props, ref) => {
  const { as, children, orientation, ...rest } = props
  const listRef = useRef()
  const listForkedRef = useForkRef(ref, listRef)
  const [tabs, activeTab] = useTrackActiveTabs(rest, children)

  return (
    <ReakitTabList orientation={orientation} ref={listForkedRef} {...rest}>
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
  orientation: oneOf(['vertical', 'horizontal'])
}
