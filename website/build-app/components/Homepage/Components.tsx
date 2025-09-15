'use client'
import NextLink from 'next/link'

import { Alert } from '@old/Alert'
import { Avatar } from '@old/Avatar'
import { Box } from '@old/Box'
import { Card } from '@old/Card'
import { Link } from '@old/Link'
import { Pagination } from '@old/Pagination'
import { Stack } from '@old/Stack'
import { Tag } from '@old/Tag'
import { Text } from '@old/Text'
import { Toggle } from '@old/Toggle'

type ComponentProps = {
  children: React.ReactElement
  description: string
  link: string
  title: string
}

const components: ComponentProps[] = [
  {
    children: (
      <Stack direction="row" spacing="md">
        <Tag>Default</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="violet">Violet</Tag>
      </Stack>
    ),
    description: 'Allows user to categorize or organized keywords.',
    link: 'components/tag',
    title: 'Tag',
  },
  {
    children: (
      <Stack direction="row" spacing="md">
        <Toggle aria-label="Toggle unchecked" mb="md" />
        <Toggle aria-label="Toggle checked" checked />
      </Stack>
    ),
    description: 'Allows user to activate or deactivate an option.',
    link: 'components/toggle',
    title: 'Toggle',
  },
  {
    children: (
      <Alert m="md" variant="info">
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
        // eslint-disable-next-line no-console
        onChange={page => console.log(page)}
        page={2}
        pageCount={10}
      />
    ),
    description: 'Allows user to switch between pages of a list items.',
    link: 'components/pagination',
    title: 'Pagination',
  },
  {
    children: (
      <Stack direction="row" spacing="md">
        <Avatar name="Welcome jungle" size="lg" />
        <Avatar name="Other name" size="lg" />
        <Avatar
          name="Welcome logo"
          size="lg"
          src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
        />
      </Stack>
    ),
    description:
      'Allows user to get an avatar with initials as a fallback letter when have no image.',
    link: 'components/avatar',
    title: 'Avatar',
  },
  {
    children: (
      <Stack direction="row" spacing="md">
        <Link>Primary</Link>
        <Link variant="secondary">Secondary</Link>
      </Stack>
    ),
    description: 'Allows user to get our customized anchor element.',
    link: 'components/link',
    title: 'Link',
  },
]

const Component = ({ children, description, link, title }: ComponentProps) => {
  return (
    <div>
      <Card alignItems="center" display="flex" h={170} justifyContent="center" w="100%">
        {children}
      </Card>
      <Link as={NextLink} fontWeight="bold" href={link} mt="md" textTransform="uppercase">
        {title}
      </Link>
      <Text mb="0" mt="sm" variant="sm">
        {description}
      </Text>
    </div>
  )
}

export const Components = () => {
  return (
    <Box
      display="grid"
      gap="xxl"
      gridTemplateColumns={{ lg: '1fr 1fr 1fr', md: '1fr 1fr', xs: '1fr' }}
    >
      {components.map(component => (
        <Component key={component.title} {...component} />
      ))}
    </Box>
  )
}
