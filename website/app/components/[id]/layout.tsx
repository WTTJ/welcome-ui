import { Text } from '@welcome-ui/text'

import { Tabs } from './tabs'

import { Sidebar } from '@/build-app/components/Sidebar'
import * as Documentation from '@/build-app/layouts/Documentation'
import { getPages } from '@/build-app/utils/pages-components'
import { getName } from '@/build-app/utils/transform-name'

type LayoutProps = {
  children: React.ReactNode
  params: {
    id: string
  }
}

const Layout = ({ children, params }: LayoutProps) => {
  const pages = getPages()
  const { id } = params

  return (
    <Documentation.Layout>
      <Sidebar isSubPage menu={pages} />
      <div>
        <Text py="3xl" variant="h1">
          {getName(id)}
        </Text>
        <Tabs pages={pages} />
        <Documentation.Child>{children}</Documentation.Child>
      </div>
    </Documentation.Layout>
  )
}

export default Layout
