import * as React from 'react'
import { Flex } from '@welcome-ui/flex'
import { Box } from '@welcome-ui/box'

const Example = () => {
  return (
    <Flex align="center" justify={{ xs: 'center', md: 'space-between' }} wrap="wrap">
      <Box backgroundColor="brand-blue" h={50} m="sm" w={50} />
      <Box backgroundColor="brand-blue" h={50} m="sm" w={50} />
      <Box backgroundColor="brand-orange" h={50} m="sm" w={50} />
      <Box backgroundColor="brand-orange" h={50} m="sm" w={50} />
      <Box backgroundColor="brand-green" h={50} m="sm" w={50} />
    </Flex>
  )
}

export default Example
