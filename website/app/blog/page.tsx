'use client'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import styled, { th } from '@xstyled/styled-components'
import { Link } from '@welcome-ui/link'
import { Card } from '@welcome-ui/card'
import { Stack } from '@welcome-ui/stack'
import { Tag } from '@welcome-ui/tag'
import { Avatar } from '@welcome-ui/avatar'
import { RightIcon } from '@welcome-ui/icons'
import { Flex } from '@welcome-ui/flex'

const posts = [
  {
    title: 'More colors!',
    description:
      'We are happy to release Welcome UI V6 who focuses on the rebranding of our colors and tokens, and adding a Logo component.',
    tags: ['release'],
    link: 'https://www.welcome-ui.com/foundations/migration',
    cover: 'https://github.com/user-attachments/assets/34259431-1bc3-4d97-84b7-e2048c7208da',
    date: new Date('2024-10-24'),
  },
  {
    title: 'Créer le design system de welcome to the jungle (in French 🇫🇷)',
    description:
      'Comment et pourquoi créer un design system ? Quelles sont les sources de motivation des devs ? Pourquoi le rendre open source ? Peut-il vraiment être transposable sans difficulté ? Quels sont les défis de sa maintenance ? On en parle avec Théo et Mickaël de Welcome to the Jungle.',
    authors: [
      {
        name: 'Mickaël Le Ralec',
        url: 'https://avatars.githubusercontent.com/u/36373219?v=4',
      },
      { name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' },
    ],
    tags: ['podcast', 'artisan-developpeur'],
    link: 'https://podcast.ausha.co/artisan-developpeur/cre-er-le-design-system-de-welcome-to-the-jungle-avec-the-o-et-mickae-l',
    date: new Date('2023-02-07'),
  },
  {
    title: 'S’ouvrir au design system (in French 🇫🇷)',
    description:
      'Welcome UI allows front-end developers who do not yet have a design system to start from a solid and complete base. Théo and Mickael tell us how the project was built, where it is and what is planned for the future. We also discuss the Open Source approach and the positive impacts on recruitment and on-boarding.In this article, we are going to tell you the story of how we ended up designing our own design system at Welcome to the Jungle',
    authors: [
      {
        name: 'Mickaël Le Ralec',
        url: 'https://avatars.githubusercontent.com/u/36373219?v=4',
      },
      { name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' },
    ],
    tags: ['podcast', 'ifttd'],
    link: 'https://ifttd.io/welcome-ui/',
    date: new Date('2022-06-06'),
  },
  {
    title: 'How we implemented our open-source design system',
    description:
      'In this article, we are going to tell you the story of how we ended up designing our own design system at Welcome to the Jungle',
    authors: [{ name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' }],
    tags: ['vision', 'open source', 'welcome ui'],
    link: 'https://medium.com/wttj-tech/how-we-implemented-our-open-source-design-system-8811799dee05',
    date: new Date('2022-03-30'),
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
                {cover && <Card.Cover src={cover} />}
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
