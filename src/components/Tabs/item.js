import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import * as S from './styles'

export const TabsItem = forwardRef(({ active, children, onClick }, ref) => {
  return (
    <S.Item active={active} onClick={onClick} ref={ref} role="tab" tabIndex="1">
      {children}
    </S.Item>
  )
})

TabsItem.displayName = 'TabsItem'

TabsItem.propTypes = {
  /** is added from Tabs component, do not use it */
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /** is added from Tabs component, do not use it */
  onClick: PropTypes.func
}
