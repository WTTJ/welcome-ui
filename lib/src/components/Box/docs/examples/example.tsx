import { Badge, Box, Text } from 'welcome-ui'
import * as React from 'react'
import { StarIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <Box
      alignItems="center"
      backgroundColor="beige-20"
      display="flex"
      justifyContent="center"
      w="100%"
    >
      <Box backgroundColor="neutral-10" borderRadius="sm" boxShadow="sm" margin="xl" maxWidth={360}>
        <Box
          alt="presentation"
          as="img"
          maxWidth="100%"
          src="https://images.unsplash.com/photo-1610020468144-a6f4771a1982?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        />
        <Box p="md">
          <Box alignItems="center" display="flex" mb="xs">
            <Badge variant="primary">Superhost</Badge>
            <StarIcon color="primary-40" ml="xs" size="sm" />
            <Text ml={3} my="0" variant="sm">
              4.8/5
            </Text>
          </Box>
          <Text as="span" lines={1} m="0" variant="h5">
            Jungle House in the middle of nowhere
          </Text>
          <Text mb="0" mt="xs" variant="sm">
            890€/week{' • '}2 beds
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Example
