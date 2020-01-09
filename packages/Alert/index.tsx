import React, { ReactNode } from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

const VARIANTS = ['success', 'error', 'warning', 'info'] as const

export interface Props {
  children: ReactNode
  variant?: typeof VARIANTS[number]
}

export const Alert: React.FC<Props> = ({ children, variant = 'error', ...rest }) => (
  <S.Alert variant={variant} {...rest}>
    {children}
  </S.Alert>
)

Alert.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(VARIANTS)
}

export * from './Title'
