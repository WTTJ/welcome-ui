import { notFound } from 'next/navigation'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParamsSubPage } from '@/build-app/utils/pages-exports'
import { PrevNextPage } from '@/build-app/components/PrevNextPage'

type PageProps = {
  params: {
    id: string
    subPage: string
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParamsSubPage(pages)
}

const Page = ({ params }: PageProps) => {
  const pages = getPages('foundations')
  const { id, subPage } = params

  const { contentWithoutMatter, isNotFound, tree } = getPageContent(
    `foundations/${id}/${subPage}.mdx`
  )

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
