import { Mdx } from '@/build-app/components/Mdx'
import { getPageContent } from '@/build-app/utils/page-content'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    page: string
    category: string
  }
}

export default function Page({ params }: PageProps) {
  const { page, category } = params

  const { content } = getPageContent(`design/${category}/${page}.md`)

  return content === 'Not Found' ? notFound() : <Mdx>{content}</Mdx>
}
