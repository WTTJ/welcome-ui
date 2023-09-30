import { Sidebar } from '@/build-app/components/Sidebar'
import { getPages } from '@/build-app/utils/pages-exports'

const Page = () => {
  const pages = getPages('foundations')

  return (
    <>
      <h1>Foundations</h1>
      <Sidebar menu={pages} />
    </>
  )
}

export default Page
