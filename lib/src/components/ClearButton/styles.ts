import styled, { css, keyframes, th } from '@xstyled/styled-components'

import { Button } from '@/Button'

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
