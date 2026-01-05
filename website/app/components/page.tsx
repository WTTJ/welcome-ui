import type { Metadata } from 'next'

import { Text } from '@/components/Text'

import { Component } from '~/build-app/components/Component'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages } from '~/build-app/utils/pages-components'
import { getName, getRepository } from '~/build-app/utils/transform-name'

export const metadata: Metadata = {
  title: 'Welcome UI - Components',
}

const Page = () => {
  const pages = getPages()

  return (
    <main>
      <Text as="h1" className="mt-4xl" variant="display-md">
        Components
      </Text>
      {pages.map(category => (
        <div className="flex flex-col gap-md mt-3xl" key={category.category}>
          <Text as="h2" className="uppercase" variant="heading-md-strong">
            {getName(category.category as string)}
          </Text>
          <div className="gap-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {category.pages.map(page => {
              const { data } = getPageContent({
                filename: `${getRepository(page.id)}/docs/index.mdx`,
                isPackage: true,
              })

              return (
                <Component
                  description={data?.description}
                  id={page.id}
                  isNew={data?.isNew}
                  key={page.id}
                  title={data?.title || page.id}
                />
              )
            })}
          </div>
        </div>
      ))}
    </main>
  )
}

export default Page
