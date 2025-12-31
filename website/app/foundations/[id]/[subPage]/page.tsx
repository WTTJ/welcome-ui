import { notFound } from 'next/navigation'

import { Mdx } from '~/build-app/components/Mdx'
import { PrevNextPage } from '~/build-app/components/PrevNextPage'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import { DocumentationLayoutChild } from '~/build-app/layouts/Documentation'
import type { Params } from '~/build-app/types'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParamsSubPage } from '~/build-app/utils/pages-exports'
import { getName } from '~/build-app/utils/transform-name'

import { TabList } from '../tabs'

type PageProps = Params<{
  id: string
  subPage: string
}>

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParamsSubPage(pages)
}

const Page = async ({ params }: PageProps) => {
  const { id, subPage } = await params
  const pages = getPages('foundations')

  const { contentWithoutMatter, isNotFound, tree } = getPageContent({
    filename: `foundations/${id}/${subPage}.mdx`,
  })

  if (isNotFound) return notFound()

  const title = getName(id)

  return (
    <DocumentationLayoutChild header={<TabList pages={pages} title={title} />} title={title}>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
        <PrevNextPage basePage="foundations" currentId={`${id}/${subPage}`} pages={pages} />
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayoutChild>
  )
}

export default Page
