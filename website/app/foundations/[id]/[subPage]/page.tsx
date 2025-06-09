import { notFound } from 'next/navigation'

import { Mdx } from '~/build-app/components/Mdx'
import { PrevNextPage } from '~/build-app/components/PrevNextPage'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import type { Params } from '~/build-app/types'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParamsSubPage } from '~/build-app/utils/pages-exports'

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

  return (
    <>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
        <PrevNextPage basePage="foundations" currentId={`${id}/${subPage}`} pages={pages} />
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
