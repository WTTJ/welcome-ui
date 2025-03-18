import { Flex } from '@/Flex'
import { Box } from '@/Box'

const Example = () => {
  return (
    <Flex align="center" justify={{ xs: 'center', md: 'space-between' }} wrap="wrap">
      <Box backgroundColor="secondary-teal" h={50} m="sm" w={50} />
      <Box backgroundColor="secondary-blue" h={50} m="sm" w={50} />
      <Box backgroundColor="secondary-orange" h={50} m="sm" w={50} />
      <Box backgroundColor="secondary-pink" h={50} m="sm" w={50} />
      <Box backgroundColor="secondary-green" h={50} m="sm" w={50} />
    </Flex>
  )
}

export default Example
