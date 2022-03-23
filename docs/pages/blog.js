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
import { th } from '@xstyled/system'
import styled from '@xstyled/styled-components'
import { Avatar } from '@welcome-ui/avatar'

const posts = [
  {
    title: 'How we implemented our open-source design system',
    description:
      'In this article, we are going to tell you the story of how we ended up designing our own design system at Welcome to the Jungle',
    authors: [{ name: 'Théo Mesnil', url: 'https://avatars.githubusercontent.com/u/50322149?v=4' }],
    tags: ['vision', 'open source', 'welcome ui'],
    link: 'todo',
    date: new Date('2022-03-30'),
  },
]

const Title = styled(Link)`
  ${th('texts.h5')};
  display: inline;
`

export default function Blog() {
  return (
    <Box margin="0 auto" maxWidth={800} p={{ xs: 'xl', md: '5xl' }}>
      <Text color="sub.3" textAlign="center" variant="subtitle1">
        Blog
      </Text>
      <Text mt="0" textAlign="center" variant="h1">
        The latest about us
      </Text>
      <Box as="ul" listStyleType="none" m="0" mt="6xl" p="0">
        {posts.map(({ authors, date, description, link, tags, title }) => (
          <Box as="li" key={link}>
            <Card>
              <Card.Body>
                <Stack direction="row" mb="xl" spacing="xxs">
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
                <Box alignItems={{ md: 'flex-end' }} display={{ md: 'flex' }}>
                  <div>
                    <Text mt="md">{description}</Text>
                    <Stack direction="row" mb="xxs">
                      {authors?.map(({ name, url }, idx) => (
                        <Avatar key={`${link}_authors_${idx}`} name={name} src={url} />
                      ))}
                    </Stack>
                    <Text as="span" fontWeight="bold" mb="xl" variant="body3">
                      {authors?.map(({ name }, idx) => (
                        <>
                          {idx !== 0 && ', '}
                          {name}
                        </>
                      ))}
                    </Text>
                    <Text mb="0" variant="body4">
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
                      <span>Read more</span> <RightIcon size="sm" />
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
