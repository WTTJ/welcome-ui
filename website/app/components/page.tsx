import type { Metadata } from 'next'
import Link from 'next/link'

import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import { getPageContent } from '~/build-app/utils/page-content'
import { getPages } from '~/build-app/utils/pages-components'
import { getRepository } from '~/build-app/utils/transform-name'

export const metadata: Metadata = {
  title: 'Welcome UI - Components',
}

const Page = () => {
  const pages = getPages()

  const allComponents = pages
    .reduce((prev, category) => {
      const pages = category.pages.map(page => page.id)
      prev.push(...pages)
      return prev
    }, [])
    .sort((a, b) => a.localeCompare(b))

  return (
    <main>
      <Text as="h1" className="md:mt-4xl" variant="display-md">
        Components
      </Text>
      <div className="gap-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-xl">
        {allComponents.map(component => {
          const { data } = getPageContent({
            filename: `${getRepository(component)}/docs/index.mdx`,
            isPackage: true,
          })

          return (
            <Link className="h-full" href={`/components/${component}`} key={component}>
              <Card className="h-full p-md">
                <Text className="flex gap-xs items-center justify-between" variant="body-lg-strong">
                  {data?.title}
                  {data?.isNew ? <Badge variant="brand">NEW</Badge> : null}
                </Text>
              </Card>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default Page
