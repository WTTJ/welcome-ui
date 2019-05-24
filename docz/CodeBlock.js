import React, { useState } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { get } from '../src/theme/helpers'

const StyledCodeBlock = styled.pre`
  font-family: monospace;
  font-size: ${get('fontSizes.body3')};
  color: ${get('colors.nude.700')};
  margin-top: ${get('space.xl')};
  padding: ${get('space.xl')};
  border: 1px solid ${get('colors.nude.200')};
  border-radius: ${get('radii.sm')};
`

export const DoczCodeBlock = ({ children }) => (
  <StyledCodeBlock>
    <code>{JSON.stringify(children, 0, 2)}</code>
  </StyledCodeBlock>
)

DoczCodeBlock.propTypes = {
  children: object
}
