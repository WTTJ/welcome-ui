import { startCase } from 'lodash'
import { notFound } from 'next/navigation'

import { PageProps } from './page'

import { Mdx } from '@/build-app/components/Mdx'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getPageContent } from '@/build-app/utils/page-content'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params
  const componentName = startCase(id)

  const { contentWithoutMatter, data, isNotFound, tree } = getPageContent(
    `${startCase(id)}/docs/index.mdx`,
    true
  )

  if (isNotFound) return notFound()

  return (
    <>
      <main>
        <Mdx>
          {`## Definition
${data?.description}
<div data-playground="overview.tsx" data-playground-with-code-editor="false" data-component="${componentName}"></div>`}
        </Mdx>
        <Mdx>{contentWithoutMatter}</Mdx>
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
