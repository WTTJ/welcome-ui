/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Card } from '@welcome-ui/card'
import { Text } from '@welcome-ui/text'
import {
  ActionsIcon,
  BookIcon,
  BuoyIcon,
  BurnIcon,
  FactoryIcon,
  GearIcon,
  PencilIcon,
  UserIcon,
} from '@welcome-ui/icons'

const expectations = [
  {
    title: 'Design',
    icon: PencilIcon,
    description:
      'Carefully elaborated by Welcome to the Jungle Designers, ensuring a perfect consistency in your app design!',
  },
  {
    title: 'Documentation',
    icon: BookIcon,
    description:
      'A complete and updated documentation with live code editors to help you implement easily our design system.',
  },
  {
    title: 'Productivity gain',
    icon: FactoryIcon,
    description:
      'A time-saver UI framework, designed to increase your productivity and your development experience.',
  },
  {
    title: 'Customizable',
    icon: GearIcon,
    description:
      'Allows you to use default themes as well as your own fully personalized ones, for made-to-measure components.',
  },
  {
    title: 'Accessibility',
    icon: UserIcon,
    description:
      'We are trying to offer an accessible experience as much as we can, using Reakit for instance.',
  },
  {
    title: 'Typing',
    icon: BurnIcon,
    description:
      'Migrated to Typescript since v4, WUI offers you the safety of a strongly typed library.',
  },
  {
    title: 'Support',
    icon: BuoyIcon,
    description:
      'A developer team engaged in helping you, maintaining, as well as always improving its design system.',
  },
  {
    title: 'Mobile first',
    icon: ActionsIcon,
    description:
      'Make sure to offer an optimized mobile experience to your users thanks to our mobile oriented vision.',
  },
]

function Expectation({ description, icon: Icon, title }) {
  return (
    <Card w="100%">
      <Card.Body color="dark.900">
        <Icon size={30} />
        <Text mb="md" mt="xl" textTransform="uppercase" variant="h6">
          {title}
        </Text>
        <Text color="dark.200" m="0" variant="body3">
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
