import { Properties } from '@/build-app/components/Props'
import { getComponentProperties } from '@/build-app/utils/components-properties'
import { getPages, getStaticParams } from '@/build-app/utils/pages-components'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

export default function Page({ params }: PageProps) {
  const { id } = params
  const properties = getComponentProperties(id)

  if (!properties) return null

  return <Properties items={properties} />
}
