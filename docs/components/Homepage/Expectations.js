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
      'Carefully constructed by our Welcome to the Jungle designers, ensuring perfect consistency in your app design!',
  },
  {
    title: 'Documentation',
    icon: BookIcon,
    description:
      'Complete documentation with live code editors to help easily you implement our design system.',
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
      'We are trying to offer an accessible experience as much as we can, using Ariakit for instance.',
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
      <Card.Body>
        <Icon color="dark-900" size={30} />
        <Text mb="md" mt="lg" textTransform="uppercase" variant="h6" as="span">
          {title}
        </Text>
        <Text m="0" variant="sm">
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
      gap="lg"
      gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
    >
      {expectations.map(expectation => (
        <Expectation key={expectation.title} {...expectation} />
      ))}
    </Box>
  )
}
