/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'

import { Header } from '../components/Header'

export const Layout = ({ children }) => {
  return (
    <Box backgroundColor="light.700" display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      <Header />
      <Box
        margin="0 auto"
        maxWidth="75rem"
        paddingLeft={{ md: '17rem' }}
        width={{ sm: 1, md: 'calc(100% - 17rem)' }}
      >
        <Box as="main" marginTop={{ xs: 60, md: 0 }} p={{ xs: 'xl', lg: 60 }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
