import { PageProps } from './page'

import { Properties } from '@/build-app/components/Props'
import { getComponentProperties } from '@/build-app/utils/components-properties'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { id } = params
  const properties = getComponentProperties(id)

  if (!properties) return null

  return <Properties items={properties} />
}

export default Page
