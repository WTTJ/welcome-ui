import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

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
  Tbody: S.Tbody,
  Td: S.Td,
  Th: S.Th,
  Thead: S.Thead,
  Tr: S.Tr,
})
