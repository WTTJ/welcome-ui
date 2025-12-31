import { notFound } from 'next/navigation'

import { Mdx } from '~/build-app/components/Mdx'
import { PrevNextPage } from '~/build-app/components/PrevNextPage'
import { DocumentationLayoutChild } from '~/build-app/layouts/Documentation'
import type { Params } from '~/build-app/types'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParams } from '~/build-app/utils/pages-exports'
import { getName } from '~/build-app/utils/transform-name'

import { TabList } from './tabs'

export async function generateMetadata({ params }: Params) {
  const { id } = await params
  const title = getName(id)

  return {
    title: `Welcome UI - ${title}`,
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParams(pages)
}

const Page = async ({ params }: Params) => {
  const { id } = await params
  const pages = getPages('foundations')

  const { contentWithoutMatter, isNotFound } = getPageContent({
    filename: `foundations/${id}.mdx`,
  })

  if (isNotFound) return notFound()

  const title = getName(id)

  return (
    <DocumentationLayoutChild header={<TabList pages={pages} title={title} />} title={title}>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
        <PrevNextPage basePage="foundations" currentId={id} pages={pages} />
      </main>
      <div />
    </DocumentationLayoutChild>
  )
}

export default Page
