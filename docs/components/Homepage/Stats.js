import React from 'react'
import { Box } from '@welcome-ui/box'
import { GetIcon } from '@welcome-ui/icons.get'
import { CodeBlockIcon } from '@welcome-ui/icons.code_block'
import { StarIcon } from '@welcome-ui/icons.star'
import { Text } from '@welcome-ui/text'

const stats = [
  {
    name: (
      <>
        Amazing
        <br />
        components
      </>
    ),
    number: '50+',
    icon: <CodeBlockIcon h={24} w={24} />,
  },
  {
    name: (
      <>
        Github
        <br />
        stars
      </>
    ),
    number: '430+',
    icon: <StarIcon h={24} w={24} />,
  },
  {
    name: (
      <>
        Weekly
        <br />
        Downloads
      </>
    ),
    number: '450+',
    icon: <GetIcon h={24} w={24} />,
  },
]

export function Stats() {
  return (
    <Box
      backgroundColor="light.900"
      borderRadius={64}
      display="flex"
      justifyContent="space-between"
      maxWidth={470}
      px={{ xs: 'xxl', md: '4xl' }}
      py="xxl"
      w="100%"
    >
      {stats?.map(stat => (
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          key={stat.number}
          textAlign="center"
        >
          <Box
            alignItems="center"
            backgroundColor="dark.900"
            borderRadius={55}
            color="light.900"
            display="flex"
            h={55}
            justifyContent="center"
            w={55}
          >
            {stat.icon}
          </Box>
          <Text as="span" mt="lg" variant="h3">
            {stat.number}
          </Text>
          <Text as="span" mt="sm" variant="body3">
            {stat.name}
          </Text>
        </Box>
      ))}
    </Box>
  )
}
