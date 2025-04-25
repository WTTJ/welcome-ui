'use client'
import styled, { th } from '@xstyled/styled-components'

import { Avatar } from '@/Avatar'
import { Box } from '@/Box'
import { Button } from '@/Button'
import { Card } from '@/Card'
import { Flex } from '@/Flex'
import { RightIcon } from '@/Icons'
import { Link } from '@/Link'
import { Stack } from '@/Stack'
import { Tag } from '@/Tag'
import { Text } from '@/Text'

const posts = [
  {
    cover: 'https://github.com/user-attachments/assets/cef3758f-1b87-4d4c-af04-89df91571a4a',
    date: new Date('2025-01-28'),
    description:
      'Welcome UI V7 is here! This release bring back the only one package to rule them all: welcome-ui',
    link: 'https://www.welcome-ui.com/foundations/migration',
    tags: ['release'],
    title: 'Mono-package is back!',
  },
  {
    cover: 'https://github.com/user-attachments/assets/34259431-1bc3-4d97-84b7-e2048c7208da',
    date: new Date('2024-10-24'),
    description:
      'We are happy to release Welcome UI V6 who focuses on the rebranding of our colors and tokens, and adding a Logo component.',
    link: 'https://www.welcome-ui.com/foundations/upgrades/v6',
    tags: ['release'],
    title: 'More colors!',
  },
  {
    authors: [
      {
        name: 'Mickaël Le Ralec',
        url: 'https://avatars.githubusercontent.com/u/36373219?v=4',
      },
      { name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' },
    ],
    date: new Date('2023-02-07'),
    description:
      'Comment et pourquoi créer un design system ? Quelles sont les sources de motivation des devs ? Pourquoi le rendre open source ? Peut-il vraiment être transposable sans difficulté ? Quels sont les défis de sa maintenance ? On en parle avec Théo et Mickaël de Welcome to the Jungle.',
    link: 'https://podcast.ausha.co/artisan-developpeur/cre-er-le-design-system-de-welcome-to-the-jungle-avec-the-o-et-mickae-l',
    tags: ['podcast', 'artisan-developpeur'],
    title: 'Créer le design system de welcome to the jungle (in French 🇫🇷)',
  },
  {
    authors: [
      {
        name: 'Mickaël Le Ralec',
        url: 'https://avatars.githubusercontent.com/u/36373219?v=4',
      },
      { name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' },
    ],
    date: new Date('2022-06-06'),
    description:
      'Welcome UI allows front-end developers who do not yet have a design system to start from a solid and complete base. Théo and Mickael tell us how the project was built, where it is and what is planned for the future. We also discuss the Open Source approach and the positive impacts on recruitment and on-boarding.In this article, we are going to tell you the story of how we ended up designing our own design system at Welcome to the Jungle',
    link: 'https://ifttd.io/welcome-ui/',
    tags: ['podcast', 'ifttd'],
    title: 'S’ouvrir au design system (in French 🇫🇷)',
  },
  {
    authors: [{ name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' }],
    date: new Date('2022-03-30'),
    description:
      'In this article, we are going to tell you the story of how we ended up designing our own design system at Welcome to the Jungle',
    link: 'https://medium.com/wttj-tech/how-we-implemented-our-open-source-design-system-8811799dee05',
    tags: ['vision', 'open source', 'welcome ui'],
    title: 'How we implemented our open-source design system',
  },
]

const Title = styled(Link)`
  ${th('texts.h5')};
  display: inline !important;
`

const Home = () => {
  return (
    <Box as="main" p="xl">
      <Box margin="0 auto" maxWidth={600} mt="xl">
        <Text textAlign="center" variant="subtitle-md">
          Blog
        </Text>
        <Text textAlign="center" variant="h1">
          The latest about us
        </Text>
        <Box as="ul" listStyleType="none" m="0" mt={{ _: 'xxl', md: '5xl' }} p="0">
          {posts.map(({ authors, cover, date, description, link, tags, title }) => (
            <Box as="li" key={link} mb="3xl">
              <Card>
                {cover ? <Card.Cover src={cover} /> : null}
                <Card.Body>
                  <Stack direction="row" mb="xl" spacing="xxs">
                    {tags?.map(tag => (
                      <Tag key={`${link}_${tag}`} size="sm" variant="info">
                        {tag}
                      </Tag>
                    ))}
                  </Stack>
                  <Title href={link} rel="noopener nofollow" target="_blank">
                    {title}
                  </Title>
                  <Box alignItems={{ md: 'flex-end' }} display={{ md: 'flex' }}>
                    <Flex direction="column" gap="md">
                      <Text mt="md">{description}</Text>
                      <Stack direction="row" mb="xxs">
                        {authors?.map(({ name, url }) => (
                          <Avatar key={`${link}_authors_${url}`} name={name} src={url} />
                        ))}
                      </Stack>
                      <Text as="span" fontWeight="bold" variant="sm">
                        {authors?.map(({ name }, idx) => (
                          <>
                            {idx !== 0 && ', '}
                            {name}
                          </>
                        ))}
                      </Text>
                      <Text mb="0" variant="xs">
                        {date.toDateString()}
                      </Text>
                      <Button
                        as="a"
                        flexShrink="0"
                        href={link}
                        rel="noopener nofollow"
                        size="sm"
                        target="_blank"
                        w="fit-content"
                      >
                        <span>Read more</span> <RightIcon />
                      </Button>
                    </Flex>
                  </Box>
                </Card.Body>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home
