import { Sidebar } from '@/build-app/components/Sidebar'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getPages } from '@/build-app/utils/pages-components'
import { Tabs } from './tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
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
