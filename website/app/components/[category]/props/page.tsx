import { Properties } from '@/build-app/components/Props'
import { getComponentProperties } from '@/build-app/utils/components-properties'
import { getDocsPages, getStaticParams } from '@/build-app/utils/pages-docs'

type PageProps = {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const pages = getDocsPages()

  return getStaticParams(pages)
}

export default function Page({ params }: PageProps) {
  const properties = getComponentProperties(params.category)

  if (!properties) return null

  return <Properties items={properties} />
}
