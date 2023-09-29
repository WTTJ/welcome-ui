import { Sidebar } from '@/build-app/components/Sidebar'
import { getPages } from '@/build-app/utils/pages-components'

export default function Page() {
  const pages = getPages('hooks')

  return (
    <>
      <h1>Hooks</h1>
      <Sidebar menu={pages} />
    </>
  )
}
