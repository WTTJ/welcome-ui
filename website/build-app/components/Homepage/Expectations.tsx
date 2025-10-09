import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
import type { IconName } from '@/components/Icon/types'
import { Text } from '@/components/Text'

type ExpectationProps = {
  description: string
  icon: IconName
  title: string
}

const expectations: ExpectationProps[] = [
  {
    description:
      'Carefully constructed by our Welcome to the Jungle designers, ensuring perfect consistency in your app design!',
    icon: 'pen',
    title: 'Design',
  },
  {
    description:
      'Complete documentation with live code editors to help easily you implement our design system.',
    icon: 'book-alt',
    title: 'Documentation',
  },
  {
    description:
      'A time-saver UI framework, designed to increase your productivity and your development experience.',
    icon: 'industry',
    title: 'Productivity gain',
  },
  {
    description:
      'Allows you to use default themes as well as your own fully personalized ones, for made-to-measure components.',
    icon: 'setting',
    title: 'Customizable',
  },
  {
    description:
      'We are trying to offer an accessible experience as much as we can, using Ariakit for instance.',
    icon: 'user-circle',
    title: 'Accessibility',
  },
  {
    description:
      'Migrated to Typescript since v4, WUI offers you the safety of a strongly typed library.',
    icon: 'fire',
    title: 'Typing',
  },
  {
    description:
      'A developer team engaged in helping you, maintaining, as well as always improving its design system.',
    icon: 'life-ring',
    title: 'Support',
  },
  {
    description:
      'Make sure to offer an optimized mobile experience to your users thanks to our mobile oriented vision.',
    icon: 'rocket',
    title: 'Mobile first',
  },
]

const Expectation = ({ description, icon, title }: ExpectationProps) => {
  return (
    <Card className="p-md w-full">
      <Icon color="neutral-90" name={icon} size="xl" />
      <Text as="span" className="mb-md mt-lg uppercase" variant="h6">
        {title}
      </Text>
      <Text className="m-0" variant="sm">
        {description}
      </Text>
    </Card>
  )
}

export const Expectations = () => {
  return (
    <div className="gap-lg grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
      {expectations.map(expectation => (
        <Expectation key={expectation.title} {...expectation} />
      ))}
    </div>
  )
}
