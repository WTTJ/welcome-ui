import * as React from 'react'

import { WelcomeLoader } from '@/WelcomeLoader'
import { Box } from '@/Box'

const Example = () => {
  return (
    <Box display="flex">
      <Box backgroundColor="neutral-20" borderRadius="lg">
        <WelcomeLoader color="black" />
      </Box>
      <Box backgroundColor="neutral-90" borderRadius="lg">
        <WelcomeLoader color="white" />
      </Box>
    </Box>
  )
}

export default Example
