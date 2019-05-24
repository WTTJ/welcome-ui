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
        border="1px solid #CED4DE"
        display="flex"
        flexDirection="column"
        key={icon}
        margin="10px"
        width="120px"
      >
        <Box display="flex" padding="15px 10px">
          <Icon name={icon} size="lg" />
        </Box>
        <Box
          borderTop="1px solid #CED4DE"
          fontSize="meta2"
          padding="5px 0"
          textAlign="center"
          width={1}
        >
          {icon}
        </Box>
      </Box>
    ))}
  </Box>
)
