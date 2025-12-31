import { notFound } from 'next/navigation'

import { Properties } from '~/build-app/components/Props'
import { TableOfContent } from '~/build-app/components/TableOfContent'
import { DocumentationLayoutChild } from '~/build-app/layouts/Documentation'
import type { Params } from '~/build-app/types'
import { getComponentProperties } from '~/build-app/utils/components-properties'
import { getPropertiesTree } from '~/build-app/utils/page-tree'
import { getPages, getStaticParams } from '~/build-app/utils/pages-components'
import { getRepository } from '~/build-app/utils/transform-name'

import { TabList } from '../tabs'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = async ({ params }: Params) => {
  const { id } = await params
  const properties = getComponentProperties(getRepository(id))
  const pages = getPages()

  if (!properties) return notFound()

  const tree = getPropertiesTree(properties)

  return (
    <DocumentationLayoutChild header={<TabList pages={pages} />} title="Properties">
      <main>
        <Properties items={properties} />
      </main>
      <TableOfContent tree={tree} />
    </DocumentationLayoutChild>
  )
}

export default Page
