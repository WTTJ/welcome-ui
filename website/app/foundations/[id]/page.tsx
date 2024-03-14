import { notFound } from 'next/navigation'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-exports'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params

  const { contentWithoutMatter, isNotFound, tree } = getPageContent(`foundations/${id}.md`)

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

export default Page
