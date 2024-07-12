import { Text } from '@welcome-ui/text'
import { Flex } from '@welcome-ui/flex'
import { Button } from '@welcome-ui/button'
import { GithubIcon, NpmIcon } from '@welcome-ui/icons'

import { Tabs } from './tabs'

import { Sidebar } from '@/build-app/components/Sidebar'
import * as Documentation from '@/build-app/layouts/Documentation'
import { getPages } from '@/build-app/utils/pages-components'
import { getName, getRepository } from '@/build-app/utils/transform-name'
import { getPageContent } from '@/build-app/utils/page-content'
import { PrevNextPage } from '@/build-app/components/PrevNextPage'

type LayoutProps = {
  children: React.ReactNode
  params: {
    id: string
  }
}

const Layout = ({ children, params }: LayoutProps) => {
  const pages = getPages()
  const { id } = params

  const { data } = getPageContent(`${getRepository(id)}/docs/index.mdx`, true)
  const title = data?.title
  const description = data?.description
  const packageName = data?.packageName
  const ariakitLink = data?.ariakit

  return (
    <Documentation.Layout>
      <Sidebar display={{ _: 'none', lg: 'flex' }} isSubPage menu={pages} />
      <div>
        <Flex direction="column" gap="xl" mb="lg">
          <Text pt="3xl" variant="h1">
            {title}
          </Text>
          {description && (
            <Text color="dark-500" pt="lg" variant="lg">
              {description}
            </Text>
          )}
          <Flex align="center" gap="md">
            <Button
              as="a"
              href={`https://github.com/WTTJ/welcome-ui/tree/main/packages/${getName(id, true)}`}
              rel="noreferrer noopener"
              size="sm"
              target="_blank"
              variant="tertiary"
            >
              <GithubIcon />
              <span>Source</span>
            </Button>
            <Button
              as="a"
              href={`https://www.npmjs.com/package/${packageName}`}
              rel="noreferrer noopener"
              size="sm"
              target="_blank"
              variant="tertiary"
            >
              <NpmIcon />
              <span>@welcome-ui/{packageName}</span>
            </Button>
            {ariakitLink && (
              <Button
                as="a"
                href={ariakitLink}
                rel="noreferrer noopener"
                size="sm"
                target="_blank"
                variant="tertiary"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 48 48">
                  <circle cx="29" cy="24" r="5" />
                  <path
                    clipRule="evenodd"
                    d="M12 4C7.58172 4 4 7.58172 4 12V36C4 40.4183 7.58172 44 12 44H36C40.4183 44 44 40.4183 44 36V12C44 7.58172 40.4183 4 36 4H12ZM23.9997 35.9997C30.6271 35.9997 35.9997 30.6271 35.9997 23.9997C35.9997 17.3723 30.6271 11.9997 23.9997 11.9997C17.3723 11.9997 11.9997 17.3723 11.9997 23.9997C11.9997 30.6271 17.3723 35.9997 23.9997 35.9997Z"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d="M12 0C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0H12ZM12 2C6.47715 2 2 6.47715 2 12V36C2 41.5228 6.47715 46 12 46H36C41.5228 46 46 41.5228 46 36V12C46 6.47715 41.5228 2 36 2H12Z"
                    fillRule="evenodd"
                  />
                </svg>
                <span>Built with Ariakit</span>
              </Button>
            )}
          </Flex>
        </Flex>
        <Tabs pages={pages} />
        <Documentation.Child>
          {children}
          <PrevNextPage basePage="components" currentId={id} pages={pages} />
        </Documentation.Child>
      </div>
    </Documentation.Layout>
  )
}

export default Layout
