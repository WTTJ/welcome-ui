import { Sidebar } from '~/build-app/components/Sidebar'
import { DocumentationLayout } from '~/build-app/layouts/Documentation'
import type { Params } from '~/build-app/types'
import { getPageContent } from '~/build-app/utils/page-content'
import { getPages } from '~/build-app/utils/pages-components'
import { getRepository } from '~/build-app/utils/transform-name'

type LayoutProps = React.PropsWithChildren

export async function generateMetadata({ params }: Params) {
  const { id } = await params
  const { data } = getPageContent({
    filename: `${getRepository(id)}/docs/index.mdx`,
    isPackage: true,
  })
  const title = data?.title
  const description = data?.description

  return {
    description: description,
    title: `Welcome UI - ${title}`,
  }
}

const Layout = async ({ children }: LayoutProps) => {
  const pages = getPages()

  return (
    <DocumentationLayout>
      <Sidebar className="hidden lg:block" isSubPage menu={pages} />
      {children}
    </DocumentationLayout>
  )
}

export default Layout
