import React from 'react'

import { Box } from '../packages/Box/index'
import { Icon } from '../packages/Icon/index'

export const IconsList = icons => (
  <Box display="flex" flexWrap="wrap">
    {icons.map(icon => (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        key={icon}
        margin="10px"
        width="130px"
      >
        <Box
          backgroundColor="light.500"
          color="dark.200"
          display="flex"
          justifyContent="center"
          padding="15px 10px"
          width={1}
        >
          <Icon name={icon} size="xl" />
        </Box>
        <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
          {icon}
        </Box>
      </Box>
    ))}
  </Box>
)
