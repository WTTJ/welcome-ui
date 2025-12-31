import type { Metadata } from 'next'
import Link from 'next/link'

import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import { getPageContent } from '~/build-app/utils/page-content'
import { getPages } from '~/build-app/utils/pages-components'
import { getName, getRepository } from '~/build-app/utils/transform-name'

export const metadata: Metadata = {
  title: 'Welcome UI - Components',
}

const Page = () => {
  const pages = getPages()

  return (
    <main className="flex flex-col gap-xxl max-w-[62.5rem] mx-auto p-lg">
      <Text as="h1" className="py-3xl" variant="display-sm">
        Components
      </Text>
      {pages.map(category => (
        <div className="flex flex-col gap-md" key={category.category}>
          <Text as="h2" className="uppercase" variant="heading-xs-strong">
            {getName(category.category as string)}
          </Text>
          <div className="gap-lg grid grid-cols-1 lg:grid-cols-2">
            {category.pages.map(page => {
              const { data } = getPageContent({
                filename: `${getRepository(page.id)}/docs/index.mdx`,
                isPackage: true,
              })

              return (
                <Link href={`/components/${page.id}`} key={page.id}>
                  <Card className="h-full flex flex-col gap-lg hover:border-neutral-50 p-xl rounded-sm transition-border duration-200">
                    <div className="flex items-center gap-sm">
                      <Text as="h3" variant="heading-md-strong">
                        {page.title}
                      </Text>
                      {data.isNew ? <Badge variant="brand">NEW</Badge> : null}
                    </div>
                    <Text className="text-neutral-70 mt-sm" lines={3} variant="body-md">
                      {data?.description}
                    </Text>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </main>
  )
}

export default Page
