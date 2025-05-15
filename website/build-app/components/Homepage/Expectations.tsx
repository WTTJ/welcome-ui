import { Box } from '@/Box'
import { Card } from '@/Card'
import {
  ActionsIcon,
  BookIcon,
  BuoyIcon,
  BurnIcon,
  FactoryIcon,
  GearIcon,
  PencilIcon,
  UserIcon,
} from '@/Icons'
import { Text } from '@/Text'

type ExpectationProps = {
  description: string
  icon: typeof PencilIcon
  title: string
}

const expectations: ExpectationProps[] = [
  {
    description:
      'Carefully constructed by our Welcome to the Jungle designers, ensuring perfect consistency in your app design!',
    icon: PencilIcon,
    title: 'Design',
  },
  {
    description:
      'Complete documentation with live code editors to help easily you implement our design system.',
    icon: BookIcon,
    title: 'Documentation',
  },
  {
    description:
      'A time-saver UI framework, designed to increase your productivity and your development experience.',
    icon: FactoryIcon,
    title: 'Productivity gain',
  },
  {
    description:
      'Allows you to use default themes as well as your own fully personalized ones, for made-to-measure components.',
    icon: GearIcon,
    title: 'Customizable',
  },
  {
    description:
      'We are trying to offer an accessible experience as much as we can, using Ariakit for instance.',
    icon: UserIcon,
    title: 'Accessibility',
  },
  {
    description:
      'Migrated to Typescript since v4, WUI offers you the safety of a strongly typed library.',
    icon: BurnIcon,
    title: 'Typing',
  },
  {
    description:
      'A developer team engaged in helping you, maintaining, as well as always improving its design system.',
    icon: BuoyIcon,
    title: 'Support',
  },
  {
    description:
      'Make sure to offer an optimized mobile experience to your users thanks to our mobile oriented vision.',
    icon: ActionsIcon,
    title: 'Mobile first',
  },
]

const Expectation = ({ description, icon: Icon, title }: ExpectationProps) => {
  return (
    <Card p="md" w="100%">
      <Icon color="neutral-90" size={30} />
      <Text as="span" mb="md" mt="lg" textTransform="uppercase" variant="h6">
        {title}
      </Text>
      <Text m="0" variant="sm">
        {description}
      </Text>
    </Card>
  )
}

export const Expectations = () => {
  return (
    <Box
      display="grid"
      gap="lg"
      gridTemplateColumns={{ lg: '1fr 1fr 1fr 1fr', md: '1fr 1fr 1fr', xs: '1fr' }}
    >
      {expectations.map(expectation => (
        <Expectation key={expectation.title} {...expectation} />
      ))}
    </Box>
  )
}
