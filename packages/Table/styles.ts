import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'

import { TableOptions } from './index'

export const Wrapper = styled(Box)<TableOptions>(
  ({ indent }) => css`
    overflow: hidden;
    width: 100%;

    ${indent &&
    css`
      ${Td}, ${Th} {
        &:first-child {
          padding-left: xl;
        }

        &:last-child {
          padding-right: xl;
        }
      }
    `}

    ${system}
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
  ({ onClick, variant }) => css`
    ${th('tables.tr.default')};
    ${variant && th(`tables.tr.${variant}`)};
    ${onClick && th('tables.tr.clickable')};

    &:last-child {
      border: 0;
    }

    ${system}
  `
)

export const Th = styled.th`
  ${th('tables.th')};
  padding: xl;
  vertical-align: middle;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  ${system}
`

export const Td = styled.td`
  ${th('tables.td')};
  position: relative;
  vertical-align: middle;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  ${system}
`
