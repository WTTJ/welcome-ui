import React from 'react'
import { Box } from '@welcome-ui/box'
import { GetIcon, CodeBlockIcon, StarIcon } from '@welcome-ui/icons'
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
    icon: <CodeBlockIcon $h="24px" $w="24px" />,
  },
  {
    name: (
      <>
        Github
        <br />
        stars
      </>
    ),
    number: '440+',
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
    number: '650+',
    icon: <GetIcon h={24} w={24} />,
  },
]

export function Stats() {
  return (
    <Box
      $backgroundColor="light-900"
      $borderRadius="64px"
      $display="flex"
      $justifyContent="space-between"
      $maxW="470px"
      $px={{ xs: 'xxl', md: '4xl' }}
      $py="xxl"
      $w="100%"
    >
      {stats?.map(stat => (
        <Box
          $alignItems="center"
          $display="flex"
          $flexDirection="column"
          key={stat.number}
          $textAlign="center"
        >
          <Box
            $alignItems="center"
            $backgroundColor="dark-900"
            $borderRadius="55px"
            $color="light-900"
            $display="flex"
            $h="55px"
            $justifyContent="center"
            $w="55px"
          >
            {stat.icon}
          </Box>
          <Text as="span" $mt="lg" variant="h3">
            {stat.number}
          </Text>
          <Text as="span" $mt="sm" variant="sm">
            {stat.name}
          </Text>
        </Box>
      ))}
    </Box>
  )
}
