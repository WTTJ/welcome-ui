import styled, { css, keyframes, th } from '@wttj/xstyled-styled-components'
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

export const ClearButton = styled(Button)`
  pointer-events: auto;
  animation: ${th('transitions.medium')};
  animation-name: ${fadeRule};
`
