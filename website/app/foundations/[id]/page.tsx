import { Mdx } from '@/build-app/components/Mdx'
import { getPageContent } from '@/build-app/utils/page-content'
// import { getPages, getStaticParams } from '@/build-app/utils/pages-exports'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    id: string
  }
}

// export async function generateStaticParams() {
//   const pages = getPages('foundations')

//   return getStaticParams(pages)
// }

export default function Page({ params }: PageProps) {
  const { id } = params

  const { isNotFound, contentWithoutMatter } = getPageContent(`foundations/${id}.md`)

  if (isNotFound) return notFound()

  return <Mdx>{contentWithoutMatter}</Mdx>
}
