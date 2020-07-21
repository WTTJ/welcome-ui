import React, { forwardRef } from 'react'
import { node, oneOf, oneOfType, string } from 'prop-types'
import { TabPanel as ReakitTabPanel } from 'reakit/Tab'

import { COMPONENT_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const TabPanel = forwardRef((props, ref) => {
  const { as, children, orientation, tabId, ...rest } = props
  return (
    <ReakitTabPanel orientation={orientation} ref={ref} tabId={tabId} {...rest}>
      {tabPanelProps => (
        <S.TabPanel as={as} orientation={orientation} {...tabPanelProps}>
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
  orientation: oneOf(['vertical', 'horizontal']),
  tabId: string
}
