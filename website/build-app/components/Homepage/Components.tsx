'use client'
import { Alert } from 'welcome-ui/Alert'
import { Avatar } from 'welcome-ui/Avatar'
import { Box } from 'welcome-ui/Box'
import { Card } from 'welcome-ui/Card'
import { Pagination } from 'welcome-ui/Pagination'
import { Stack } from 'welcome-ui/Stack'
import { Tag } from 'welcome-ui/Tag'
import { Text } from 'welcome-ui/Text'
import { Toggle } from 'welcome-ui/Toggle'
import { Link } from 'welcome-ui/Link'
import NextLink from 'next/link'

type ComponentProps = {
  children: React.ReactElement
  description: string
  link: string
  title: string
}

const components: ComponentProps[] = [
  {
    title: 'Tag',
    children: (
      <Stack direction="row" spacing="md">
        <Tag>Default</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="violet">Violet</Tag>
      </Stack>
    ),
    description: 'Allows user to categorize or organized keywords.',
    link: 'components/tag',
  },
  {
    title: 'Toggle',
    children: (
      <Stack direction="row" spacing="md">
        <Toggle aria-label="Toggle unchecked" mb="md" />
        <Toggle aria-label="Toggle checked" checked />
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
      gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
    >
      {components.map(component => (
        <Component key={component.title} {...component} />
      ))}
    </Box>
  )
}
