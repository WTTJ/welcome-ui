import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

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
  `
)

export const Content = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const Table = styled.tableBox`
  border: 0;
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.theadBox

export const Tbody = styled.tbodyBox

type Variant = 'default' | 'error' | 'warning' | 'info' | 'success' | 'clickable'

export const Tr = styled.trBox<{ variant?: Variant }>(
  ({ onClick, variant }) => css`
    ${th('tables.tr.default')};
    ${variant && th(`tables.tr.${variant}`)};
    ${onClick && th('tables.tr.clickable')};

    &:last-child {
      border: 0;
    }
  `
)

export const Th = styled.thBox`
  ${th('tables.th')};
  padding: xl;
  vertical-align: middle;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const Td = styled.tdBox`
  ${th('tables.td')};
  position: relative;
  vertical-align: middle;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`
