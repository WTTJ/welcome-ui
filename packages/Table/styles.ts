import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'

import { TableOptions } from './index'

export const Wrapper = styled(Box)<TableOptions>(
  ({ indent, theme }) => css`
    overflow: hidden;
    width: 100%;

    ${indent &&
    css`
      ${Td}, ${Th} {
        &:first-child {
          padding-left: ${theme.spaces.xl};
        }

        &:last-child {
          padding-right: ${theme.spaces.xl};
        }
      }
    `}
  `
)

export const Content = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const Table = styled.table`
  border: 0;
  width: 100%;
  border-collapse: collapse;
  ${system}
`

export const Thead = styled.thead`
  ${system}
`

export const Tbody = styled.tbody`
  ${system}
`

type Variant = 'default' | 'error' | 'warning' | 'info' | 'success' | 'clickable'

export const Tr = styled.tr<{ variant?: Variant }>(
  ({ onClick, theme, variant }) => css`
    ${theme.tables.tr.default};
    ${variant && theme.tables.tr[variant]};
    ${onClick && theme.tables.tr.clickable};
    ${system}

    &:last-child {
      border: 0;
    }
  `
)

export const Th = styled.th(
  ({ theme }) => css`
    ${theme.tables.th};
    padding: ${theme.space.xl};
    vertical-align: middle;
    ${system}

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  `
)

export const Td = styled.td`
  ${({ theme }) => theme.tables.td};
  position: relative;
  vertical-align: middle;
  ${system}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`
