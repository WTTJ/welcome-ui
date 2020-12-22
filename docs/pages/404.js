/* eslint-disable react/display-name */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import NextLink from 'next/link'

import Illustration404 from '../components/Illustration404'

export default function() {
  return (
    <Box
      alignItems={{ lg: 'center' }}
      display="flex"
      flexDirection={{ xs: 'column', lg: 'row' }}
      justifyContent="center"
    >
      <Box mb={{ xs: '3xl', lg: 0 }}>
        <Text variant="h1">Error 404 🥺</Text>
        <Text color="dark.200">Oops… It seems like the page you’re looking for doesn’t exist</Text>
        <NextLink href="/">
          <Button>Go to homepage</Button>
        </NextLink>
      </Box>
      <Illustration404 />
    </Box>
  )
}
