import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-exports'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParams(pages)
}

export default function Page({ params }: PageProps) {
  const { id } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(`foundations/${id}.md`)

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
