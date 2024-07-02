import { PageProps } from './page'

import { Properties } from '@/build-app/components/Props'
import { TableOfContent } from '@/build-app/components/TableOfContent'
import { getComponentProperties } from '@/build-app/utils/components-properties'
import { getPropertiesTree } from '@/build-app/utils/page-tree'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'
import { getName } from '@/build-app/utils/transform-name'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params
  const properties = getComponentProperties(getName(id, true))

  if (!properties) return null

  const tree = getPropertiesTree(properties)

  return (
    <>
      <main>
        <Properties items={properties} />
      </main>
      <TableOfContent isSubPage tree={tree} />
    </>
  )
}

export default Page
