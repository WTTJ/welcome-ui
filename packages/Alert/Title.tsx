import React, { ReactNode } from 'react'
import { node } from 'prop-types'

import * as S from './styles'

export interface Props {
  children: ReactNode
  dataTestId?: string
}

export const AlertTitle: React.FC<Props> = ({ children, dataTestId }) => (
  <S.Title data-testid={dataTestId}>{children}</S.Title>
)

AlertTitle.propTypes /* remove-proptypes */ = {
  children: node.isRequired
}
