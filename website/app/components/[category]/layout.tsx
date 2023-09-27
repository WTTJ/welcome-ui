import { Sidebar } from '@/build-app/components/Sidebar'
import { DocumentationLayout } from '@/build-app/layouts/Documentation'
import { getDocsPages } from '@/build-app/utils/pages-docs'
import { Tabs } from './tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pages = getDocsPages()

  return (
    <DocumentationLayout>
      <Sidebar pages={pages} />
      <div>
        <Tabs />
        {children}
      </div>
    </DocumentationLayout>
  )
}
