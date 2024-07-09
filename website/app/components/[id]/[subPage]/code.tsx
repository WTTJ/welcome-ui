import { notFound } from 'next/navigation'

import { PageProps } from './page'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'
import { Installation } from '@/build-app/components/Installation'
import { getRepository } from '@/build-app/utils/transform-name'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params
  const componentName = getRepository(id)

  const { contentWithoutMatter, data, isNotFound, tree } = getPageContent(
    `${componentName}/docs/index.mdx`,
    true
  )

  if (isNotFound) return notFound()

  return (
    <>
      <main>
        <Mdx>{`<div data-playground="overview.tsx" data-component="${componentName}" data-overview="true"></div>`}</Mdx>
        <Installation packageName={data?.packageName} usage={data?.usage} />
        <Mdx>## Examples</Mdx>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
