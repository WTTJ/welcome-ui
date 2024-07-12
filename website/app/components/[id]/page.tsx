import { notFound } from 'next/navigation'

import CodePage from './[subPage]/code'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'
import { getRepository } from '@/build-app/utils/transform-name'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params

  const { contentWithoutMatter, isNotFound, tree } = getPageContent(`components/${id}/overview.mdx`)

  if (isNotFound) {
    const { isNotFound: componentsNotFound } = getPageContent(
      `${getRepository(id)}/docs/index.mdx`,
      true
    )

    if (componentsNotFound) return notFound()

    return <CodePage params={params} />
  }

  return (
    <>
      <main>
        overview example
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
