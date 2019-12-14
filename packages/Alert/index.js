/* eslint-disable react/no-multi-comp */
import { node, oneOf } from 'prop-types'
import React from 'react'

import * as S from './styles'

export const Alert = ({ children, variant = 'error', ...rest }) => (
  <S.Alert variant={variant} {...rest}>
    {children}
  </S.Alert>
)

Alert.propTypes = {
  children: node.isRequired,
  variant: oneOf(['success', 'error', 'warning', 'info']).isRequired
}

export const AlertTitle = ({ children, dataTestId }) => (
  <S.Title data-testid={dataTestId}>{children}</S.Title>
)

AlertTitle.propTypes = {
  children: node.isRequired
}

export default Alert
