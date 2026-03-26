'use client'
import { ExternalLinkIcon, HeartIcon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { Text } from '@/components/Text'

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
    <Section as="footer" className="nine:bg-beige-20 nine:text-neutral-50">
      <div className="nine:gap-xl nine:grid nine:grid-cols-2 nine:md:grid-cols-4">
        <div className="nine:flex nine:flex-col nine:gap-xs">
          <div className="nine:flex nine:gap-sm nine:items-center">
            Made with <HeartIcon className="nine:text-brand-50" /> by
          </div>
          <a
            className="nine:w-fit-content"
            href="https://www.welcometothejungle.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Logo className="nine:h-[40px]" />
          </a>
        </div>
        {links.map(({ links, name }) => (
          <nav className="nine:flex nine:flex-col nine:gap-lg" key={name}>
            <Text variant="subtitle-md">{name}</Text>
            <ul className="nine:flex nine:flex-col nine:gap-sm">
              {links.map(({ isExternal, link, name }) => (
                <li key={link}>
                  <a
                    className="nine:flex nine:gap-xs nine:items-center nine:text-neutral-90 nine:hover:underline"
                    href={link}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    target={isExternal ? '_blank' : undefined}
                  >
                    {name}
                    <ExternalLinkIcon className="nine:text-neutral-60" size="xs" />
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
