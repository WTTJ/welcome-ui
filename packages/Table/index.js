import { bool, node } from 'prop-types'
import React from 'react'

import * as S from './styles'

export function Table({ children, indent, ...rest }) {
  return (
    <S.Wrapper indent={indent && indent.toString()} {...rest}>
      <S.Content>
        <S.Table>{children}</S.Table>
      </S.Content>
    </S.Wrapper>
  )
}

Table.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  /** Add space on first and last child on the Td and Th component */
  indent: bool
}

// Nested exports
Table.Thead = S.Thead
Table.Tbody = S.Tbody
Table.Th = S.Th
Table.Tr = S.Tr
Table.Td = S.Td
