import { Mdx } from '@/build-app/components/Mdx'
import { getPageContent } from '@/build-app/utils/page-content'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    id: string
    subPage: string
  }
}

export default function Page({ params }: PageProps) {
  const { id, subPage } = params

  const { isNotFound, contentWithoutMatter } = getPageContent(`foundations/${id}/${subPage}.md`)

  if (isNotFound) return notFound()

  return <Mdx>{contentWithoutMatter}</Mdx>
}
