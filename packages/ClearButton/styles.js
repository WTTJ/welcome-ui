import styled, { css, keyframes } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Button } from '@welcome-ui/button'
import { system } from '@welcome-ui/system'
import { CrossIcon } from '@welcome-ui/icons.cross'

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
  width: 1.25rem;
  height: 1.25rem;
  pointer-events: auto;
  animation: ${th('transitions.medium')};
  animation-name: ${fadeRule};
  ${system};
`

export const Icon = styled(CrossIcon)`
  width: 0.5rem;
  height: 0.5rem;
`
