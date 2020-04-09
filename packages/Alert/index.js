/* eslint-disable react/no-multi-comp */
import { node, oneOf } from 'prop-types'
import React from 'react'

import * as S from './styles'

// super commponent
const Alert = ({ children, variant = 'error', ...rest }) => (
  <S.Alert variant={variant} {...rest}>
    {children}
  </S.Alert>
)

Alert.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(['success', 'error', 'warning', 'info'])
}

const AlertTitle = ({ children, dataTestId }) => (
  <S.Title data-testid={dataTestId}>{children}</S.Title>
)

AlertTitle.propTypes /* remove-proptypes */ = {
  children: node.isRequired
}

Alert.Title = AlertTitle

export { Alert, AlertTitle }
