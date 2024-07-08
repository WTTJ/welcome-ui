import { ExternalLinkIcon, HeartIcon } from '@welcome-ui/icons'
import { Flex } from '@welcome-ui/flex'
import { Text } from '@welcome-ui/text'
import { Box } from '@welcome-ui/box'
import { Grid } from '@welcome-ui/grid'

import { Section } from '../Section'
import { LogoWttj } from '..'

const links = [
  {
    name: 'Documentations',
    links: [
      {
        name: 'Foundations',
        link: '/foundations',
        isExternal: false,
      },
      {
        name: 'Components',
        link: '/components',
        isExternal: false,
      },
      {
        name: 'Source code',
        link: 'https://github.com/WTTJ/welcome-ui/',
        isExternal: true,
      },
    ],
  },
  {
    name: 'Updates',
    links: [
      {
        name: 'Releases',
        link: 'https://github.com/WTTJ/welcome-ui/releases',
        isExternal: true,
      },
      {
        name: 'Project board',
        link: 'https://github.com/orgs/WTTJ/projects/13',
        isExternal: true,
      },
    ],
  },
  {
    name: 'Community',
    links: [
      {
        name: 'Github',
        link: 'https://github.com/WTTJ',
        isExternal: true,
      },
      {
        name: 'Twitter',
        link: 'https://x.com/wttj_tech',
        isExternal: true,
      },
      {
        name: 'Medium',
        link: 'https://medium.com/wttj-tech',
        isExternal: true,
      },
      {
        name: 'Jobs',
        link: 'https://www.welcometothejungle.com/en/companies/wttj/jobs',
        isExternal: true,
      },
    ],
  },
]

export const Footer = () => {
  return (
    <Section as="footer" backgroundColor="nude-100">
      <Grid gap="xl" gridTemplateColumns={{ _: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}>
        <Flex flexDirection="column" gap="xs">
          <Flex alignItems="center" gap="sm">
            Made with <HeartIcon color="primary-500" /> by
          </Flex>
          <Box
            as="a"
            href="https://www.welcometothejungle.com"
            rel="noreferrer noopener"
            target="_blank"
            w="fit-content"
          >
            <LogoWttj black h={42} w={130} />
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
                    color="dark-900"
                    display="flex"
                    fontSize="sm"
                    gap="xs"
                    href={link}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    target={isExternal ? '_blank' : undefined}
                    textDecoration={{ hover: 'underline' }}
                  >
                    {name}
                    {isExternal && <ExternalLinkIcon color="dark-500" size="xs" />}
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
