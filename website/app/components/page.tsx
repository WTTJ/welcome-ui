import type { Metadata } from 'next'
import Link from 'next/link'

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
      <Text className="py-3xl" variant="h1">
        Components
      </Text>
      {pages.map(category => (
        <div className="flex flex-col gap-md" key={category.category}>
          <Text as="h2" className="uppercase" variant="h6">
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
                  <Card
                    alignItems="center"
                    borderColor={{ hover: 'neutral-30' }}
                    borderRadius="md"
                    display="flex"
                    gap="lg"
                    p="md"
                  >
                    <div className="bg-neutral-30 size-[5rem] rounded-md shrink-0"></div>
                    <div>
                      <Text as="h3" variant="h4">
                        {page.title}
                      </Text>
                      <Text className="text-neutral-70 mt-sm" lines={3} variant="sm">
                        {data?.description}
                      </Text>
                    </div>
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
