/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/display-name */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import NextLink from 'next/link'
import { Card } from '@welcome-ui/card'
import { Link } from '@welcome-ui/link'
import { Tag } from '@welcome-ui/tag'
import { Stack } from '@welcome-ui/stack'
import { RightIcon } from '@welcome-ui/icons'
import styled, { th } from '@xstyled/styled-components'
import { Avatar } from '@welcome-ui/avatar'

const posts = [
  {
    title: 'Créer le design system de welcome to the jungle (in French 🇫🇷)',
    description:
      'Comment et pourquoi créer un design system ? Quelles sont les sources de motivation des devs ? Pourquoi le rendre open source ? Peut-il vraiment être transposable sans difficulté ? Quels sont les défis de sa maintenance ? On en parle avec Théo et Mickaël de Welcome to the Jungle.',
    authors: [
      {
        name: 'Mickaël Le Ralec',
        url: 'https://pbs.twimg.com/profile_images/1523245470130266112/0rx_DemJ_400x400.jpg',
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
        url: 'https://pbs.twimg.com/profile_images/1523245470130266112/0rx_DemJ_400x400.jpg',
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

export default function Blog() {
  return (
    <Box margin="0 auto" maxWidth={800} p={{ xs: 'xl', md: '5xl' }}>
      <Text color="sub-3" textAlign="center" variant="subtitle-md">
        Blog
      </Text>
      <Text mt="0" textAlign="center" variant="h1">
        The latest about us
      </Text>
      <Box as="ul" listStyleType="none" m="0" mt={{ _: 'xxl', md: '5xl' }} p="0">
        {posts.map(({ authors, date, description, link, tags, title }) => (
          <Box as="li" key={link} mb="3xl">
            <Card>
              <Card.Body>
                <Stack direction="row" mb="xl" spacing="xxs">
                  {tags?.map(tag => (
                    <Tag key={`${link}_${tag}`} size="sm" variant="info">
                      {tag}
                    </Tag>
                  ))}
                </Stack>
                <NextLink href={link} passHref>
                  <Title rel="noopener" target="_blank">
                    {title}
                  </Title>
                </NextLink>
                <Box alignItems={{ md: 'flex-end' }} display={{ md: 'flex' }}>
                  <div>
                    <Text mt="md">{description}</Text>
                    <Stack direction="row" mb="xxs">
                      {authors?.map(({ name, url }, idx) => (
                        <Avatar key={`${link}_authors_${idx}`} name={name} src={url} />
                      ))}
                    </Stack>
                    <Text as="span" fontWeight="bold" mb="xl" variant="sm">
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
                  </div>
                  <NextLink href={link} passHref>
                    <Button
                      as="a"
                      flexShrink="0"
                      ml={{ md: 'xl' }}
                      mt={{ xs: 'xl', md: 0 }}
                      rel="noopener"
                      size="sm"
                      target="_blank"
                    >
                      <span>Read more</span> <RightIcon />
                    </Button>
                  </NextLink>
                </Box>
              </Card.Body>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
