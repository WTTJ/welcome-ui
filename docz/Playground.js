import styled, { css } from '@xstyled/styled-components'
import { Playground as DoczPlayground } from 'docz'

export const Playground = styled(DoczPlayground)`
  margin-bottom: -sm;

  form > * {
    margin-bottom: md;
  }

  > * {
    margin-right: sm;
    margin-bottom: sm;
  }

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    `}
`
