'use client'
import { ExternalLinkIcon, HeartIcon } from '@/components/Icon'
import { Box } from '@old/Box'
import { Flex } from '@old/Flex'
import { Grid } from '@old/Grid'
import { Logo } from '@old/Logo'
import { Text } from '@old/Text'

import { Section } from '../Section'

const links = [
  {
    links: [
      {
        isExternal: false,
        link: '/foundations',
        name: 'Foundations',
      },
      {
        isExternal: false,
        link: '/components',
        name: 'Components',
      },
      {
        isExternal: true,
        link: 'https://github.com/WTTJ/welcome-ui/',
        name: 'Source code',
      },
    ],
    name: 'Documentations',
  },
  {
    links: [
      {
        isExternal: true,
        link: 'https://github.com/WTTJ/welcome-ui/releases',
        name: 'Releases',
      },
      {
        isExternal: true,
        link: 'https://github.com/orgs/WTTJ/projects/13',
        name: 'Project board',
      },
    ],
    name: 'Updates',
  },
  {
    links: [
      {
        isExternal: true,
        link: 'https://github.com/WTTJ',
        name: 'Github',
      },
      {
        isExternal: true,
        link: 'https://x.com/wttj_tech',
        name: 'Twitter',
      },
      {
        isExternal: true,
        link: 'https://medium.com/wttj-tech',
        name: 'Medium',
      },
      {
        isExternal: true,
        link: 'https://www.welcometothejungle.com/en/companies/wttj/jobs',
        name: 'Jobs',
      },
    ],
    name: 'Community',
  },
]

export const Footer = () => {
  return (
    <Section as="footer" backgroundColor="beige-20">
      <Grid gap="xl" gridTemplateColumns={{ _: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}>
        <Flex flexDirection="column" gap="xs">
          <Flex alignItems="center" gap="sm">
            Made with <HeartIcon className="text-brand-50" /> by
          </Flex>
          <Box
            as="a"
            href="https://www.welcometothejungle.com"
            rel="noreferrer noopener"
            target="_blank"
            w="fit-content"
          >
            <Logo h={40} />
          </Box>
        </Flex>
        {links.map(({ links, name }) => (
          <Flex as="nav" flexDirection="column" gap="lg" key={name}>
            <Text variant="subtitle-md">{name}</Text>
            <Flex as="ul" flexDirection="column" gap="sm">
              {links.map(({ isExternal, link, name }) => (
                <Box as="li" key={link}>
                  <Box
                    alignItems="center"
                    as="a"
                    color="neutral-90"
                    display="flex"
                    fontSize="sm"
                    gap="xs"
                    href={link}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    target={isExternal ? '_blank' : undefined}
                    textDecoration={{ hover: 'underline' }}
                  >
                    {name}
                    <ExternalLinkIcon className="text-neutral-60" size="xs" />
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Section>
  )
}
