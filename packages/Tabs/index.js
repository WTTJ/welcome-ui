import React from 'react'
import { node, oneOfType, string } from 'prop-types'
import { Tab as ReakitTab } from 'reakit/Tab'

import { COMPONENT_TYPE } from '../../utils/propTypes'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export const Tab = React.forwardRef((props, ref) => {
  const { as, children, id, ...rest } = props
  return (
    <ReakitTab id={id} ref={ref} {...rest}>
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

// Nested exports
Tab.List = TabList
Tab.Panel = TabPanel

export { useTabState } from 'reakit/Tab'
