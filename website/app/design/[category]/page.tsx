import { Mdx } from '@/build-app/components/Mdx'
import { Sidebar } from '@/build-app/components/Sidebar'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getPageContent } from '@/build-app/utils/page-content'
import { getDesignPages } from '@/build-app/utils/pages-design'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    category: string
  }
}

export default function Page({ params }: PageProps) {
  const { category } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(`design/${category}.md`)
  const pages = getDesignPages()

  if (isNotFound) return notFound()

  return (
    <DocumentationLayout>
      <div>
        <Link href={`/design`}>Go to main page</Link>
        <Sidebar pages={pages} relativePath="/design" />
      </div>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayout>
  )
}
