import styled, { css } from '@xstyled/styled-components'
import React from 'react'

export const FlexContainer = styled.div(
  ({ align, direction, flex, justify }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: ${flex};
    flex-direction: ${direction};

    ${direction === 'column'} {
      align-items: flex-start;
    }

    ${align} {
      align-items: ${align};
    }

    ${justify} {
      justify-content: ${justify};
    }
  `
)

export const RowContainer = styled(({ direction, flex, ...rest }) => (
  <FlexContainer {...rest} direction="row" />
))

export const StackContainer = styled(({ direction, ...rest }) => (
  <FlexContainer {...rest} direction="column" />
))
