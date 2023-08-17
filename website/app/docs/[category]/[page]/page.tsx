import { Mdx } from '@/build-app/components/Mdx'
import { Sidebar } from '@/build-app/components/Sidebar'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getPageContent } from '@/build-app/utils/page-content'
import { getDocsPages, getStaticParams } from '@/build-app/utils/pages-docs'
import { startCase } from 'lodash'
import Link from 'next/link'
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
  const { page } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(
    `${startCase(page)}/docs/index.mdx`,
    true
  )
  const pages = getDocsPages()

  if (isNotFound) return notFound()

  return (
    <DocumentationLayout>
      <div>
        <Link href={`/docs`}>Go to main page</Link>
        <Sidebar pages={pages} relativePath="/docs" />
      </div>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayout>
  )
}
