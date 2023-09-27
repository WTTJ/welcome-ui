import { Sidebar } from '@/build-app/components/Sidebar'
import { getDocsPages } from '@/build-app/utils/pages-docs'

export default function Page() {
  const pages = getDocsPages('hooks')

  return (
    <>
      <h1>Hooks</h1>
      <Sidebar pages={pages} />
    </>
  )
}
