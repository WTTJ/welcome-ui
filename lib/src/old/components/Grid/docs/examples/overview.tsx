import { Box } from '@old/Box'
import { Grid } from '@old/Grid'

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
