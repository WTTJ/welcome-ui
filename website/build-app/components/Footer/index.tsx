'use client'
import { ExternalLinkIcon, HeartIcon } from '@/components/Icon'
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
    <Section as="footer" className="bg-beige-20">
      <Grid gap="xl" gridTemplateColumns={{ _: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}>
        <Flex flexDirection="column" gap="xs">
          <Flex alignItems="center" gap="sm">
            Made with <HeartIcon className="text-brand-50" /> by
          </Flex>
          <a
            className="w-fit-content"
            href="https://www.welcometothejungle.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Logo h={40} />
          </a>
        </Flex>
        {links.map(({ links, name }) => (
          <Flex as="nav" flexDirection="column" gap="lg" key={name}>
            <Text variant="subtitle-md">{name}</Text>
            <Flex as="ul" flexDirection="column" gap="sm">
              {links.map(({ isExternal, link, name }) => (
                <li key={link}>
                  <a
                    className="flex gap-xs items-center text-neutral-90 hover:underline"
                    href={link}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    target={isExternal ? '_blank' : undefined}
                  >
                    {name}
                    <ExternalLinkIcon className="text-neutral-60" size="xs" />
                  </a>
                </li>
              ))}
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Section>
  )
}
