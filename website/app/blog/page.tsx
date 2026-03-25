'use client'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { RightIcon } from '@/components/Icon'
import { Link } from '@/components/Link'
import { Tag } from '@/components/Tag'
import { Text } from '@/components/Text'

const posts = [
  {
    cover: 'https://www.welcome-ui.com/v9.png',
    date: new Date('2025-10-21'),
    description:
      'We are excited to announce the release of Welcome UI Version 9, which has replaced styled-components with Tailwind CSS.',
    link: 'https://www.welcome-ui.com/foundations/upgrades/v9',
    tags: ['release'],
    title: 'TailwindCSS migration',
  },
  {
    cover: 'https://www.welcome-ui.com/v8.png',
    date: new Date('2025-03-12'),
    description:
      'Version 8 out now! We upgrade xstyled/styled-component to v4 and styled-components to v6',
    link: 'https://www.welcome-ui.com/foundations/upgrades/migration#v-8',
    tags: ['release'],
    title: 'XStyled and styled-component upgrades',
  },
  {
    cover: 'https://www.welcome-ui.com/v7.png',
    date: new Date('2025-01-28'),
    description:
      'Welcome UI V7 is here! This release bring back the only one package to rule them all: welcome-ui',
    link: 'https://www.welcome-ui.com/foundations/migration#v-7',
    tags: ['release'],
    title: 'Mono-package is back!',
  },
  {
    cover: 'https://www.welcome-ui.com/v6.png',
    date: new Date('2024-10-24'),
    description:
      'We are happy to release Welcome UI V6 who focuses on the rebranding of our colors and tokens, and adding a Logo component.',
    link: 'https://www.welcome-ui.com/foundations/migrations#v-6',
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

const Home = () => {
  return (
    <main className="nine:p-xl">
      <div className="nine:max-w-[37.5rem] nine:mt-xl nine:mx-auto">
        <Text className="nine:text-center" variant="subtitle-md">
          Blog
        </Text>
        <Text className="nine:text-center" variant="h1">
          The latest about us
        </Text>
        <ul className="nine:list-none nine:m-0 nine:mt-xxl nine:md:mt-5xl nine:p-0">
          {posts.map(({ authors, cover, date, description, link, tags, title }) => (
            <li className="nine:mb-3xl" key={link}>
              <Card>
                {cover ? <Card.Cover alt="Cover" src={cover} /> : null}
                <Card.Body>
                  <div className="nine:flex nine:gap-xxs nine:mb-xl">
                    {tags?.map(tag => (
                      <Tag key={`${link}_${tag}`} size="sm" variant="info">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  <Link href={link} rel="noopener nofollow" target="_blank">
                    {title}
                  </Link>
                  <div className="nine:md:flex nine:md:items-end">
                    <div className="nine:flex nine:flex-col nine:gap-md">
                      <Text className="nine:mt-md">{description}</Text>
                      <div className="nine:flex nine:mb-xxs">
                        {authors?.map(({ name, url }) => (
                          <Avatar key={`${link}_authors_${url}`} name={name} src={url} />
                        ))}
                      </div>
                      <Text as="span" className="nine:font-bold" variant="sm">
                        {authors?.map(({ name }, idx) => (
                          <>
                            {idx !== 0 && ', '}
                            {name}
                          </>
                        ))}
                      </Text>
                      <Text variant="xs">{date.toDateString()}</Text>
                      <Button
                        as="a"
                        className="nine:w-fit nine:shrink-0"
                        href={link}
                        rel="noopener nofollow"
                        size="sm"
                        target="_blank"
                      >
                        <span>Read more</span> <RightIcon />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Home
