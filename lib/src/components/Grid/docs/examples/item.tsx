import * as React from 'react'

import { Grid } from '@/Grid'

const Example = () => {
  return (
    <Grid gap="md" h={400} templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)">
      <Grid.Item area="span 2 / span 1 / span 2 / span 1" bg="secondary-teal" />
      <Grid.Item bg="secondary-blue" column="span 2 / span 2" />
      <Grid.Item bg="secondary-orange" column="span 1 / span 1" />
      <Grid.Item bg="secondary-pink" column="span 3 / span 3" />
    </Grid>
  )
}

export default Example
