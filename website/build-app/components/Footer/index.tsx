'use client'
import { ExternalLinkIcon, HeartIcon } from '@/components/Icon'
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
      <div className="gap-xl grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-xs">
          <div className="flex gap-sm items-center">
            Made with <HeartIcon className="text-brand-50" /> by
          </div>
          <a
            className="w-fit-content"
            href="https://www.welcometothejungle.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Logo h={40} />
          </a>
        </div>
        {links.map(({ links, name }) => (
          <nav className="flex flex-col gap-lg" key={name}>
            <Text variant="subtitle-md">{name}</Text>
            <ul className="flex flex-col gap-sm">
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
            </ul>
          </nav>
        ))}
      </div>
    </Section>
  )
}
