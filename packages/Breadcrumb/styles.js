import styled, { th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Breadcrumb = styled(Box)`
  ${th('breadcrumbs.list')};
  height: 100%;
`

export const List = styled.ol`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 100%;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`
