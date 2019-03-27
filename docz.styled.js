import styled from 'styled-components'

import { Playground } from 'docz'

import { Button } from './src/atoms/Button/styles'

export const StyledPlayground = styled(Playground)`
  > *:not(:last-child) {
    margin-right: 10px;
  }
`

function getButtonsPlaygroundSpacing(spacing) {
  switch(spacing) {
    case "xxl":
      return "50px"
      break
    case "lg":
      return "20px"
    default:
      return "10px"
  }
}

export const ButtonsPlayground = styled(Playground)`
  margin-bottom: -${props => getButtonsPlaygroundSpacing(props.spacing)};

  ${Button} {
    margin-right: ${props => getButtonsPlaygroundSpacing(props.spacing)};
    margin-bottom: ${props => getButtonsPlaygroundSpacing(props.spacing)};
  }
`

export default StyledPlayground
