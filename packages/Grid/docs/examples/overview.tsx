import * as React from 'react'
import { Grid } from '@welcome-ui/grid'
import { Box } from '@welcome-ui/box'

const Example = () => {
  return (
    <Grid gap="md" templateColumns="repeat(5, 1fr)">
      <Box backgroundColor="sub-1" h={50} w="100%" />
      <Box backgroundColor="sub-3" h={50} w="100%" />
      <Box backgroundColor="sub-4" h={50} w="100%" />
      <Box backgroundColor="sub-5" h={50} w="100%" />
      <Box backgroundColor="sub-2" h={50} w="100%" />
    </Grid>
  )
}

export default Example
