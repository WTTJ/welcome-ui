import * as React from 'react'

import { Box } from '@/Box'
import { Card } from '@/Card'
import { Text } from '@/Text'

const Example = () => {
  return (
    <Card
      alignItems="flex-end"
      backgroundImage="url('https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg')"
      display="flex"
      h={200}
      maxWidth={400}
    >
      <Box
        background="linear-gradient(0deg, rgba(0,0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)"
        padding="xl"
        w="100%"
      >
        <Text as="h4" color="neutral-10" fontWeight="bold" m={0}>
          The Jungle Book
        </Text>
      </Box>
    </Card>
  )
}

export default Example
