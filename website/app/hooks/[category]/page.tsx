import { Mdx } from '@/build-app/components/Mdx'
import { Sidebar } from '@/build-app/components/Sidebar'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
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
  const pages = getDocsPages('hooks')
  console.log(pages)
  return getStaticParams(pages)
}

export default function Page({ params }: PageProps) {
  const { category } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(
    `${startCase(category)}/docs/index.mdx`,
    true
  )
  const pages = getDocsPages('hooks')

  if (isNotFound) return notFound()

  return (
    <DocumentationLayout>
      <Sidebar pages={pages} />
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayout>
  )
}
