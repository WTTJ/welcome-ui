import React from 'react'
import styled from 'styled-components'
import { Playground } from 'docz'

import { Box } from './src/components/Box'
import { Icon } from './src/components/Icon'
import { get } from './src/theme/helpers'

export const StyledPlayground = styled(Playground)`
  margin-bottom: -${get('space.sm')};

  > * {
    margin-right: ${get('space.sm')};
    margin-bottom: ${get('space.sm')};
  }
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
