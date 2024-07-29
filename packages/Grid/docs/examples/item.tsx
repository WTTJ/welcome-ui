import * as React from 'react'
import { Grid } from '@welcome-ui/grid'

const Example = () => {
  return (
    <Grid gap="md" h={400} templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)">
      <Grid.Item area="span 2 / span 1 / span 2 / span 1" bg="brand-blue" />
      <Grid.Item bg="brand-blue" column="span 2 / span 2" />
      <Grid.Item bg="brand-orange" column="span 1 / span 1" />
      <Grid.Item bg="brand-orange" column="span 3 / span 3" />
    </Grid>
  )
}

export default Example
