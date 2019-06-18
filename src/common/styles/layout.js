import styled, { css } from '@xstyled/styled-components'
import React from 'react'

const getFlexStyles = (align, justify, direction) => css`
  display: flex;
  align-items: ${align || direction === 'column' ? 'flex-start' : 'center'};
  justify-content: ${justify || 'flex-start'};
`

export const FlexContainer = styled.div`
  flex-direction: ${props => props.direction || null};
  flex: ${props => props.flex || null};
  ${({ align, direction, justify }) => getFlexStyles(align, justify, direction)};
`

export const RowContainer = styled(({ direction, ...rest }) => (
  <FlexContainer {...rest} direction="row" />
))`
  flex: ${props => props.flex || null};
  ${({ align, justify }) => getFlexStyles(align, justify)};
`

export const StackContainer = styled(({ direction, ...rest }) => (
  <FlexContainer {...rest} direction="column" />
))`
  flex: ${props => props.flex || null};
  ${({ align, justify }) => getFlexStyles(align, justify)};
`
