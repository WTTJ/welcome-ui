import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

export const TabsPanel = ({ children, ...rest }) => <S.Panel {...rest}>{children}</S.Panel>

TabsPanel.propTypes = {
  children: PropTypes.node.isRequired
}
