import { Tabs } from './tabs'

import { Sidebar } from '@/build-app/components/Sidebar'
import * as Documentation from '@/build-app/layouts/Documentation'
import { getPages } from '@/build-app/utils/pages-components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pages = getPages()

  return (
    <Documentation.Layout>
      <Sidebar menu={pages} />
      <div>
        <Tabs />
        <Documentation.Child>{children}</Documentation.Child>
      </div>
    </Documentation.Layout>
  )
}

export default Layout
