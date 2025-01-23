import CodePage from './code'
import OtherPage from './other'
import PropsPage from './props'

import { getPages, getStaticParams } from '~/build-app/utils/pages-components'

export type PageProps = {
  params: {
    id: string
    subPage?: string
  }
}

export async function generateStaticParams() {
  const pages = getPages()

  return getStaticParams(pages)
}

const Page = ({ params }: PageProps) => {
  const { subPage } = params

  if (subPage === 'code') return <CodePage params={params} />

  if (subPage === 'props') return <PropsPage params={params} />

  return <OtherPage params={params} />
}

export default Page
