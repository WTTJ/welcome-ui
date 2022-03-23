import { Box } from '@welcome-ui/box'
import styled, { css } from '@xstyled/styled-components'

export const Content = styled(Box)`
  background-color: light.900;
  border-color: light.800;
  border-width: sm;
  border-style: solid;
  border-radius: lg;
  padding: lg sm;
  width: 100%;
  text-align: center;
  transition: medium;
`

export const Item = styled(Box)(
  ({ copied }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    ${!copied &&
    css`
      &:hover {
        ${Content} {
          background-color: light.800;
          border-color: light.800;
        }
      }
    `}

    ${copied &&
    css`
      ${Content} {
        background-color: success.100;
        border-color: success.100;
      }
    `}
  `
)
