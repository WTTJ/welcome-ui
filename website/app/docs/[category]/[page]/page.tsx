import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
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

  const { content, tree } = getPageContent(`${category}/${page}.mdx`, true)

  return content === 'Not Found' ? (
    notFound()
  ) : (
    <div>
      <div>
        <Link href={`/docs/${category}`}>Go to main page</Link>
      </div>
      <div style={{ display: 'flex' }}>
        <main>
          <Mdx>{content}</Mdx>
        </main>
        <TableOfContent tree={tree} />
      </div>
    </div>
  )
}
