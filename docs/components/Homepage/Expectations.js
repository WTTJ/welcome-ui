/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Card } from '@welcome-ui/card'
import { Text } from '@welcome-ui/text'
import { FiltersIcon } from '@welcome-ui/icons.filters'

const expectations = [
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
  {
    title: 'Lorem',
    icon: FiltersIcon,
    description:
      'Sed imperdiet consequat ligula, sed venenatis magna congue ut, porttitor lobortis purus.',
  },
]

function Expectation({ description, icon: Icon, title }) {
  return (
    <Card w="100%">
      <Card.Body color="dark.900">
        <Icon size={28} />
        <Text mt="md" textTransform="uppercase" variant="subtitle1">
          {title}
        </Text>
        <Text color="dark.200" mb="0" mt="xxl" variant="body3">
          {description}
        </Text>
      </Card.Body>
    </Card>
  )
}

export function Expectations() {
  return (
    <Box
      display="grid"
      gap="xl"
      gridTemplateColumns={{ xs: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
    >
      {expectations.map(component => (
        <Expectation key={component.link} {...component} />
      ))}
    </Box>
  )
}
