import { notFound } from 'next/navigation'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParamsSubPage } from '@/build-app/utils/pages-exports'

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
  const { id, subPage } = params

  const { contentWithoutMatter, isNotFound, tree } = getPageContent(
    `foundations/${id}/${subPage}.mdx`
  )

  if (isNotFound) return notFound()

  return (
    <>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
