import { Text } from '@welcome-ui/text'
import { startCase } from 'lodash'
import { Flex } from '@welcome-ui/flex'
import { Button } from '@welcome-ui/button'
import { GithubIcon, NpmIcon } from '@welcome-ui/icons'

import { Tabs } from './tabs'

import { Sidebar } from '@/build-app/components/Sidebar'
import * as Documentation from '@/build-app/layouts/Documentation'
import { getPages } from '@/build-app/utils/pages-components'
import { getName } from '@/build-app/utils/transform-name'
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

  const { data } = getPageContent(`${startCase(id)}/docs/index.mdx`, true)
  const description = data?.description
  const packageName = data?.packageName

  return (
    <Documentation.Layout>
      <Sidebar isSubPage menu={pages} />
      <div>
        <Flex direction="column" gap="xl" mb="lg">
          <Text pt="3xl" variant="h1">
            {getName(id)}
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
