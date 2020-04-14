import styled, { th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Breadcrumb = styled(Box)`
  ${th('breadcrumbs.list')};
  max-width: 100%;
  overflow-x: auto;
`

export const List = styled.ol`
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
`
