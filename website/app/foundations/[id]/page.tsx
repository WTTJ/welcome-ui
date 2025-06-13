import { notFound } from 'next/navigation'

import { Mdx } from '~/build-app/components/Mdx'
import { PrevNextPage } from '~/build-app/components/PrevNextPage'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import type { Params } from '~/build-app/types'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParams } from '~/build-app/utils/pages-exports'
import { getName } from '~/build-app/utils/transform-name'

export async function generateMetadata({ params }: Params) {
  const { id } = await params
  const title = getName(id)

  return {
    title: `Welcome UI - ${title}`,
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParams(pages)
}

const Page = async ({ params }: Params) => {
  const { id } = await params
  const pages = getPages('foundations')

  const { contentWithoutMatter, isNotFound, tree } = getPageContent({
    filename: `foundations/${id}.mdx`,
  })

  if (isNotFound) return notFound()

  return (
    <>
      <main>
        <Mdx>{contentWithoutMatter}</Mdx>
        <PrevNextPage basePage="foundations" currentId={id} pages={pages} />
      </main>
      <TableOfContent tree={tree} />
    </>
  )
}

export default Page
