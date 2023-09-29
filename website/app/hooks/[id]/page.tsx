import { Mdx } from '@/build-app/components/Mdx'
import { Sidebar } from '@/build-app/components/Sidebar'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'
import { startCase } from 'lodash'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const pages = getPages('hooks')

  return getStaticParams(pages)
}

export default function Page({ params }: PageProps) {
  const { id } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(
    `${startCase(id)}/docs/index.mdx`,
    true
  )
  const pages = getPages('hooks')

  if (isNotFound) return notFound()

  return (
    <DocumentationLayout>
      <Sidebar menu={pages} />
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayout>
  )
}
