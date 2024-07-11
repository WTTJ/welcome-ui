import * as React from 'react'
import { Grid } from '@welcome-ui/grid'

const Example = () => {
  return (
    <Grid gap="md" h={400} templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)">
      <Grid.Item area="span 2 / span 1 / span 2 / span 1" bg="sub-1" />
      <Grid.Item bg="sub-2" column="span 2 / span 2" />
      <Grid.Item bg="sub-3" column="span 1 / span 1" />
      <Grid.Item bg="sub-4" column="span 3 / span 3" />
    </Grid>
  )
}

export default Example
