import styled, { css } from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'

export const Radios = styled.div(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    margin-bottom: -md;
    ${system};

    > * {
      margin-bottom: md;
    }
  `
)
