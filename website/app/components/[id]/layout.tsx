import { Tabs } from './tabs'

import { Sidebar } from '@/build-app/components/Sidebar'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getPages } from '@/build-app/utils/pages-components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pages = getPages()

  return (
    <DocumentationLayout>
      <Sidebar menu={pages} />
      <div>
        <Tabs />
        {children}
      </div>
    </DocumentationLayout>
  )
}

export default Layout
