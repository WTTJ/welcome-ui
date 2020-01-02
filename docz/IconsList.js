import React from 'react'

import { Box } from '../packages/Box/index'

export const IconsList = icons => (
  <Box display="flex" flexWrap="wrap">
    {icons.map(key => {
      const name = key[0].toUpperCase() + key.slice(1)
      const nameComponent = `${name}Icon`

      // Require the correct icon
      const { [nameComponent]: Icon } = require(`../icons/${name}`)
      return (
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          key={key}
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
            borderRadius="lg"
          >
            <Icon size="xl" />
          </Box>
          <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
            {name}
          </Box>
        </Box>
      )
    })}
  </Box>
)
