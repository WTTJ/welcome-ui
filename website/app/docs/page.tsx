import { Sidebar } from '@/build-app/components/Sidebar'
import { getDocsPages } from '@/build-app/utils/pages-docs'
import Link from 'next/link'

export default function Page() {
  const pages = getDocsPages()

  return (
    <div>
      <h1>Docs</h1>
      <Link href="/">Back Home</Link>
      <Sidebar pages={pages} relativePath="/docs" />
    </div>
  )
}
