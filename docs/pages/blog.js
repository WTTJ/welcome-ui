/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/display-name */
import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import NextLink from 'next/link'
import { Card } from '@welcome-ui/card'
import { Link } from '@welcome-ui/link'
import { Tag } from '@welcome-ui/tag'
import { Stack } from '@welcome-ui/stack'
import { RightIcon } from '@welcome-ui/icons'
import { Avatar } from '@welcome-ui/avatar'

const posts = [
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

const Title = styled(Link)(
  ({ theme }) => css`
    ${theme.texts.h5};
    display: inline;
  `
)

const List = styled(Box)`
  list-style-type: none;
`

export default function Blog() {
  return (
    <Box $m="0 auto" $maxW="800px" $p={{ xs: 'xl', md: '5xl' }}>
      <Text $color="sub-3" $textAlign="center" variant="subtitle-md">
        Blog
      </Text>
      <Text $mt="0" $textAlign="center" variant="h1">
        The latest about us
      </Text>
      <List as="ul" $m="0" $mt="6xl" $p="0">
        {posts.map(({ authors, date, description, link, tags, title }) => (
          <Box as="li" key={link} $mb="3xl">
            <Card>
              <Card.Body>
                <Stack direction="row" $mb="xl" spacing="xxs">
                  {tags?.map(tag => (
                    <Tag key={`${link}_${tag}`} size="sm" variant="7">
                      {tag}
                    </Tag>
                  ))}
                </Stack>
                <NextLink href={link} passHref>
                  <Title rel="noopener" target="_blank">
                    {title}
                  </Title>
                </NextLink>
                <Box $alignItems={{ md: 'flex-end' }} $display={{ md: 'flex' }}>
                  <div>
                    <Text $mt="md">{description}</Text>
                    <Stack direction="row" mb="xxs">
                      {authors?.map(({ name, url }, idx) => (
                        <Avatar key={`${link}_authors_${idx}`} name={name} src={url} />
                      ))}
                    </Stack>
                    <Text as="span" $fontWeight="bold" $mb="xl" variant="sm">
                      {authors?.map(({ name }, idx) => (
                        <>
                          {idx !== 0 && ', '}
                          {name}
                        </>
                      ))}
                    </Text>
                    <Text $mb="0" variant="xs">
                      {date.toDateString()}
                    </Text>
                  </div>
                  <NextLink href={link} passHref>
                    <Button
                      as="a"
                      $flexShrink="0"
                      $ml={{ md: 'xl' }}
                      $mt={{ xs: 'xl', md: 0 }}
                      rel="noopener"
                      size="sm"
                      target="_blank"
                    >
                      <span>Read more</span> <RightIcon size="sm" />
                    </Button>
                  </NextLink>
                </Box>
              </Card.Body>
            </Card>
          </Box>
        ))}
      </List>
    </Box>
  )
}
