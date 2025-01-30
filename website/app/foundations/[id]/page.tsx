import { notFound } from 'next/navigation'

import { Mdx } from '~/build-app/components/Mdx'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParams } from '~/build-app/utils/pages-exports'
import { PrevNextPage } from '~/build-app/components/PrevNextPage'
import { getName } from '~/build-app/utils/transform-name'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: { params: { [key: string]: string } }) {
  const { id } = params
  const title = getName(id)

  return {
    title: `Welcome UI - ${title}`,
  }
}

export async function generateStaticParams() {
  const pages = getPages('foundations')

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const pages = getPages('foundations')
  const { id } = params

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
