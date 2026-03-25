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
    <main className="nine:flex nine:flex-col nine:gap-xxl nine:max-w-[62.5rem] nine:mx-auto nine:p-lg">
      <Text className="nine:py-3xl" variant="h1">
        Components
      </Text>
      {pages.map(category => (
        <div className="nine:flex nine:flex-col nine:gap-md" key={category.category}>
          <Text as="h2" className="nine:uppercase" variant="h6">
            {getName(category.category as string)}
          </Text>
          <div className="nine:gap-lg nine:grid nine:grid-cols-1 nine:lg:grid-cols-2">
            {category.pages.map(page => {
              const { data } = getPageContent({
                filename: `${getRepository(page.id)}/docs/index.mdx`,
                isPackage: true,
              })

              return (
                <Link href={`/components/${page.id}`} key={page.id}>
                  <Card className="nine:flex nine:gap-lg nine:hover:border-neutral-30 nine:items-center nine:p-md nine:rounded-md">
                    <div className="nine:bg-neutral-30 nine:size-[5rem] nine:rounded-md nine:shrink-0"></div>
                    <div>
                      <Text as="h3" variant="h4">
                        {page.title}
                      </Text>
                      <Text className="nine:text-neutral-70 nine:mt-sm" lines={3} variant="sm">
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
