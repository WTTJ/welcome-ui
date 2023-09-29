import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParamsSubPage } from '@/build-app/utils/pages-exports'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    id: string
    subPage: string
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParamsSubPage(pages)
}

export default function Page({ params }: PageProps) {
  const { id, subPage } = params

  const { isNotFound, tree, contentWithoutMatter } = getPageContent(
    `foundations/${id}/${subPage}.md`
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
