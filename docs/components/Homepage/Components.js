
import React from 'react'
import { Alert } from '@welcome-ui/alert'
import { Avatar } from '@welcome-ui/avatar'
import { Box } from '@welcome-ui/box'
import { Card } from '@welcome-ui/card'
import { Pagination } from '@welcome-ui/pagination'
import { Stack } from '@welcome-ui/stack'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'
import { Toggle } from '@welcome-ui/toggle'
import { Link } from '@welcome-ui/link'
import NextLink from 'next/link'

const components = [
  {
    title: 'Tag',
    children: (
      <Stack direction="row" spacing="md">
        <Tag>Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="secondary">Secondary</Tag>
      </Stack>
    ),
    description: 'Allows user to categorize or organized keywords.',
    link: 'components/tag',
  },
  {
    title: 'Toggle',
    children: (
      <Stack direction="row" spacing="md">
        <Toggle mb="md" label="Example Toggle 1" />
        <Toggle label="Example Toggle 2" checked />
      </Stack>
    ),
    description: 'Allows user to activate or deactivate an option.',
    link: 'components/toggle',
  },
  {
    title: 'Alert',
    children: (
      <Alert m="md" variant="info">
        <Alert.Title>Info variant</Alert.Title>
        <span>Nunc laoreet egestas nulla, et dapibus sem malesuada in</span>
      </Alert>
    ),
    description: 'Allows user to display a short, important message to get attention.',
    link: 'components/alert',
  },
  {
    title: 'Pagination',
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
  },
  {
    title: 'Avatar',
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
  },
  {
    title: 'Link',
    children: (
      <Stack direction="row" spacing="md">
        <Link>Primary</Link>
        <Link variant="secondary">Secondary</Link>
      </Stack>
    ),
    description: 'Allows user to get our customized anchor element.',
    link: 'components/link',
  },
]

function Component({ children, description, link, title }) {
  return (
    <div>
      <Card alignItems="center" display="flex" h={170} justifyContent="center" w="100%">
        {children}
      </Card>
      <NextLink href={link} passHref>
        <Link fontWeight="bold" mt="md" textTransform="uppercase">
          {title}
        </Link>
      </NextLink>
      <Text mb="0" mt="sm" variant="sm">
        {description}
      </Text>
    </div>
  )
}

export function Components() {
  return (
    <Box
      display="grid"
      gap="xxl"
      gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
    >
      {components.map(component => (
        <Component key={component.title} {...component} />
      ))}
    </Box>
  )
}
