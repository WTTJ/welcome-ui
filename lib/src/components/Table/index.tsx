import React from 'react'

import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'

export interface TableOptions {
  /**
   * Add space on first and last child on the Td and Th component
   */
  indent?: boolean
}

export type TableProps = CreateWuiProps<'div', TableOptions>

export const TableComponent = forwardRef<'div', TableProps>(
  ({ children, indent, ...rest }, ref) => {
    return (
      <S.Wrapper indent={indent} ref={ref} {...rest}>
        <S.Content>
          <S.Table>{children}</S.Table>
        </S.Content>
      </S.Wrapper>
    )
  }
)

// Nested exports
export const Table = Object.assign(TableComponent, {
  Thead: S.Thead,
  Tbody: S.Tbody,
  Th: S.Th,
  Tr: S.Tr,
  Td: S.Td,
})
