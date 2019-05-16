import styled from 'styled-components'

import { Playground } from 'docz'

import { StyledButton } from './src/components/Button/styles'
import { IconSvg } from './src/components/Icon/styles'

export const StyledPlayground = styled(Playground)``

const spacer = {
  xxl: '64px',
  xl: '32px',
  lg: '24px',
  md: '16px',
  sm: '8px'
}

function getButtonsPlaygroundSpacing(spacing) {
  return spacer[spacing] || spacer['md']
}

export const ButtonsPlayground = styled(Playground)`
  margin-bottom: -${props => getButtonsPlaygroundSpacing(props.spacing)};

  ${StyledButton} {
    margin-right: ${props => getButtonsPlaygroundSpacing(props.spacing)};
    margin-bottom: ${props => getButtonsPlaygroundSpacing(props.spacing)};
  }
`
export const IconsPlayground = styled(Playground)`
  ${IconSvg} {
    margin-right: ${spacer['md']};
  }
`

export default StyledPlayground
