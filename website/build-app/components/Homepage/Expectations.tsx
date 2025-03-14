import { Box } from '@/Box'
import { Card } from '@/Card'
import { Text } from '@/Text'
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

type ExpectationProps = {
  description: string
  icon: typeof PencilIcon
  title: string
}

const expectations: ExpectationProps[] = [
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
      gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
    >
      {expectations.map(expectation => (
        <Expectation key={expectation.title} {...expectation} />
      ))}
    </Box>
  )
}
