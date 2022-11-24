import styled, { css, keyframes } from 'styled-components'
import { Button } from '@welcome-ui/button'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeRule = css`
  ${fade}
`

export const ClearButton = styled(Button)(
  ({ theme }) => css`
    pointer-events: auto;
    animation: ${theme.transitions.medium};
    animation-name: ${fadeRule};
    width: 16px;
    height: 16px;
  `
)
