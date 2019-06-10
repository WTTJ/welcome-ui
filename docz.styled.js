import React from 'react'
import styled, { css } from 'styled-components'
import { Playground as DoczPlayground } from 'docz'

import { Box } from './src/components/Box'
import { Icon } from './src/components/Icon'
import { get } from './src/theme/helpers'

export const Playground = styled(DoczPlayground)`
  margin-bottom: -${get('space.sm')};

  > * {
    margin-right: ${get('space.sm')};
    margin-bottom: ${get('space.sm')};
  }

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    `}
`

export const IconsList = icons => (
  <Box display="flex" flexWrap="wrap">
    {icons.map(icon => (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        key={icon}
        margin="10px"
        width="120px"
      >
        <Box
          background="#FBF9F7"
          color="#134B45"
          display="flex"
          justifyContent="center"
          padding="15px 10px"
          width={1}
        >
          <Icon name={icon} size="lg" />
        </Box>
        <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
          {icon}
        </Box>
      </Box>
    ))}
  </Box>
)
