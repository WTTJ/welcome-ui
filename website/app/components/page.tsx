import { Sidebar } from '@/build-app/components/Sidebar'
import { getPages } from '@/build-app/utils/pages-components'

const Page = () => {
  const pages = getPages()

  return (
    <>
      <h1>Components</h1>
      <Sidebar menu={pages} />
    </>
  )
}

export default Page
