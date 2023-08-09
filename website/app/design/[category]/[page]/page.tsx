import { Mdx } from '@/build-app/components/Mdx'
import { Sidebar } from '@/build-app/components/Sidebar'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getPageContent } from '@/build-app/utils/page-content'
import { getDesignPages } from '@/build-app/utils/pages'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    page: string
    category: string
  }
}

export default function Page({ params }: PageProps) {
  const { page, category } = params

  const { content, tree } = getPageContent(`design/${category}/${page}.md`)
  const pages = getDesignPages()

  if (content === 'Not Found') return notFound()

  return (
    <DocumentationLayout>
      <div>
        <Link href={`/design`}>Go to main page</Link>
        <Sidebar pages={pages} pathToPages="/design" />
      </div>
      <main>
        <Mdx>{content}</Mdx>
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayout>
  )
}
