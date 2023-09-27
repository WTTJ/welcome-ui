import { Sidebar } from '@/build-app/components/Sidebar'
import { getDocsPages } from '@/build-app/utils/pages-docs'

export default function Page() {
  const pages = getDocsPages()

  return (
    <>
      <h1>Components</h1>
      <Sidebar pages={pages} />
    </>
  )
}
