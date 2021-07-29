import React from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface TableOptions {
  /* Add space on first and last child on the Td and Th component */
  indent?: boolean
}

export type TableProps = TableOptions & WuiProps

export const TableComponent: React.FC<TableProps> = ({ children, indent, ...rest }) => {
  return (
    <S.Wrapper indent={indent && indent.toString()} {...rest}>
      <S.Content>
        <S.Table>{children}</S.Table>
      </S.Content>
    </S.Wrapper>
  )
}

// Nested exports
export const Table = Object.assign(TableComponent, {
  Thead: S.Thead,
  Tbody: S.Tbody,
  Th: S.Th,
  Tr: S.Tr,
  Td: S.Td
})
