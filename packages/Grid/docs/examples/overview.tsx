import * as React from 'react'
import { Grid } from '@welcome-ui/grid'
import { Box } from '@welcome-ui/box'

const Example = () => {
  return (
    <Grid gap="md" templateColumns="repeat(5, 1fr)">
      <Box backgroundColor="brand-blue" h={50} w="100%" />
      <Box backgroundColor="brand-orange" h={50} w="100%" />
      <Box backgroundColor="brand-orange" h={50} w="100%" />
      <Box backgroundColor="brand-green" h={50} w="100%" />
      <Box backgroundColor="brand-blue" h={50} w="100%" />
    </Grid>
  )
}

export default Example
