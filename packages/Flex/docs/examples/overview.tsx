import * as React from 'react'
import { Flex } from '@welcome-ui/flex'
import { Box } from '@welcome-ui/box'

const Example = () => {
  return (
    <Flex align="center" justify={{ xs: 'center', md: 'space-between' }} wrap="wrap">
      <Box backgroundColor="sub-1" h={50} m="sm" w={50} />
      <Box backgroundColor="sub-2" h={50} m="sm" w={50} />
      <Box backgroundColor="sub-3" h={50} m="sm" w={50} />
      <Box backgroundColor="sub-4" h={50} m="sm" w={50} />
      <Box backgroundColor="sub-5" h={50} m="sm" w={50} />
    </Flex>
  )
}

export default Example
