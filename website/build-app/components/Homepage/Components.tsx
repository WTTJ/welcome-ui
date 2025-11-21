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
      <div className="flex gap-md">
        <Tag>Default</Tag>
        <Tag variant="green">Success</Tag>
        <Tag variant="violet">Violet</Tag>
      </div>
    ),
    description: 'Allows user to categorize or organized keywords.',
    link: 'components/tag',
    title: 'Tag',
  },
  {
    children: (
      <div className="flex gap-md">
        <Toggle aria-label="Toggle unchecked" className="mb-md" />
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
      <div className="flex gap-md">
        <Avatar name="Welcome jungle" />
        <Avatar name="Other name" />
        <Avatar
          name="Welcome logo"
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
      <div className="flex gap-md">
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
      <Card className="flex h-[10.625rem] items-center justify-center w-full">{children}</Card>
      <Link as={NextLink} className="font-bold mt-md uppercase" href={link}>
        {title}
      </Link>
      <Text className="mb-0 mt-sm" variant="body-md">
        {description}
      </Text>
    </div>
  )
}

export const Components = () => {
  return (
    <div className="gap-xxl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {components.map(component => (
        <Component key={component.title} {...component} />
      ))}
    </div>
  )
}
