/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'

export function Section({ children, ...rest }) {
  return (
    <Box as="section" py={{ xs: '3xl', md: 90 }} {...rest}>
      <Box margin="0 auto" maxWidth={1200} position="relative" px="xl">
        {children}
      </Box>
    </Box>
  )
}
