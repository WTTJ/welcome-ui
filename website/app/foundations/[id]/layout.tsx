import { Sidebar } from '~/build-app/components/Sidebar'
import { DocumentationLayout } from '~/build-app/layouts/Documentation'
import { getPages } from '~/build-app/utils/pages-exports'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const pages = getPages('foundations')

  return (
    <DocumentationLayout>
      <Sidebar className="hidden lg:block" menu={pages} />
      {children}
    </DocumentationLayout>
  )
}

export default Layout
