import { notFound } from 'next/navigation'

import { PageProps } from './page'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id, subPage } = params

  const { contentWithoutMatter, isNotFound, tree } = getPageContent(
    `components/${id}/${subPage}.mdx`
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
