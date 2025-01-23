import { notFound } from 'next/navigation'

import { PageProps } from './page'

import { Mdx } from '~/build-app/components/Mdx'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages, getStaticParams } from '~/build-app/utils/pages-components'
import { getRepository } from '~/build-app/utils/transform-name'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params
  const componentName = getRepository(id)

  const { contentWithoutMatter, isNotFound, tree } = getPageContent({
    filename: `${componentName}/docs/index.mdx`,
    isPackage: true,
  })

  if (isNotFound) return notFound()

  return (
    <>
      <main>
        <Mdx>{`<div data-playground="overview.tsx" data-component="${componentName}" data-overview="true"></div>`}</Mdx>
        <Mdx>## Examples</Mdx>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
