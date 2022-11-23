import React from 'react'
import { Box } from '@welcome-ui/box'

export function Section({ children, ...rest }) {
  return (
    <Box as="section" $py={{ xs: 'xxl', md: '90px' }} {...rest}>
      <Box $m="0 auto" $maxW={1200} $position="relative" $px="lg">
        {children}
      </Box>
    </Box>
  )
}
