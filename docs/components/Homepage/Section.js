
import React from 'react'
import { Box } from '@welcome-ui/box'

export function Section({ children, ...rest }) {
  return (
    <Box as="section" py={{ xs: 'xxl', md: 90 }} {...rest}>
      <Box margin="0 auto" maxWidth={1200} position="relative" px="lg">
        {children}
      </Box>
    </Box>
  )
}
