import * as React from 'react'
import { Grid } from '@welcome-ui/grid'
import { Box } from '@welcome-ui/box'

const Example = () => {
  return (
    <Grid gap="md" templateColumns="repeat(5, 1fr)">
      <Box backgroundColor="secondary-teal" h={50} w="100%" />
      <Box backgroundColor="secondary-orange" h={50} w="100%" />
      <Box backgroundColor="secondary-pink" h={50} w="100%" />
      <Box backgroundColor="secondary-green" h={50} w="100%" />
      <Box backgroundColor="secondary-blue" h={50} w="100%" />
    </Grid>
  )
}

export default Example
