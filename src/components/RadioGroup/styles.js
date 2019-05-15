import styled, { css } from 'styled-components'

export const Radios = styled.div(
  props => css`
    display: flex;
    flex-direction: ${props.direction || 'column'};
  `
)
