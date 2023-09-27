import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getDocsPages, getStaticParams } from '@/build-app/utils/pages-docs'
import { startCase } from 'lodash'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    page: string
    category: string
  }
}

export async function generateStaticParams() {
  const pages = getDocsPages()

  return getStaticParams(pages)
}

export default function Page({ params }: PageProps) {
  const { category } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(
    `${startCase(category)}/docs/index.mdx`,
    true
  )

  if (isNotFound) return notFound()

  return (
    <>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent tree={tree} />
    </>
  )
}
