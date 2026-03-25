'use client'
import NextLink from 'next/link'

import { Alert } from '@/components/Alert'
import { Avatar } from '@/components/Avatar'
import { Card } from '@/components/Card'
import { Link } from '@/components/Link'
import { Pagination } from '@/components/Pagination'
import { Tag } from '@/components/Tag'
import { Text } from '@/components/Text'
import { Toggle } from '@/components/Toggle'

type ComponentProps = {
  children: React.ReactElement
  description: string
  link: string
  title: string
}

const components: ComponentProps[] = [
  {
    children: (
      <div className="nine:flex nine:gap-md">
        <Tag>Default</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="violet">Violet</Tag>
      </div>
    ),
    description: 'Allows user to categorize or organized keywords.',
    link: 'components/tag',
    title: 'Tag',
  },
  {
    children: (
      <div className="nine:flex nine:gap-md">
        <Toggle aria-label="Toggle unchecked" className="nine:mb-md" />
        <Toggle aria-label="Toggle checked" />
      </div>
    ),
    description: 'Allows user to activate or deactivate an option.',
    link: 'components/toggle',
    title: 'Toggle',
  },
  {
    children: (
      <Alert className="md" variant="info">
        <Alert.Title>Info variant</Alert.Title>
        <span>Nunc laoreet egestas nulla, et dapibus sem malesuada in</span>
      </Alert>
    ),
    description: 'Allows user to display a short, important message to get attention.',
    link: 'components/alert',
    title: 'Alert',
  },
  {
    children: (
      <Pagination
        aria-label="Pagination"
        getHref={page => `?page=${page}`}
        onChange={() => {}}
        page={1}
        pageCount={5}
      />
    ),
    description: 'Allows user to switch between pages of a list items.',
    link: 'components/pagination',
    title: 'Pagination',
  },
  {
    children: (
      <div className="nine:flex nine:gap-md">
        <Avatar name="Welcome jungle" size="lg" />
        <Avatar name="Other name" size="lg" />
        <Avatar
          name="Welcome logo"
          size="lg"
          src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
        />
      </div>
    ),
    description:
      'Allows user to get an avatar with initials as a fallback letter when have no image.',
    link: 'components/avatar',
    title: 'Avatar',
  },
  {
    children: (
      <div className="nine:flex nine:gap-md">
        <Link>Primary</Link>
        <Link variant="secondary">Secondary</Link>
      </div>
    ),
    description: 'Allows user to get our customized anchor element.',
    link: 'components/link',
    title: 'Link',
  },
]

const Component = ({ children, description, link, title }: ComponentProps) => {
  return (
    <div>
      <Card className="nine:flex nine:h-[10.625rem] nine:items-center nine:justify-center nine:w-full">
        {children}
      </Card>
      <Link as={NextLink} className="nine:font-bold nine:mt-md nine:uppercase" href={link}>
        {title}
      </Link>
      <Text className="nine:mb-0 nine:mt-sm" variant="sm">
        {description}
      </Text>
    </div>
  )
}

export const Components = () => {
  return (
    <div className="nine:gap-xxl nine:grid nine:lg:grid-cols-3 nine:md:grid-cols-2 nine:grid-cols-1">
      {components.map(component => (
        <Component key={component.title} {...component} />
      ))}
    </div>
  )
}
