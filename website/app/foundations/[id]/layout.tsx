import { Text } from '@/components/Text'

import { Sidebar } from '~/build-app/components/Sidebar'
import * as Documentation from '~/build-app/layouts/Documentation'
import type { Params } from '~/build-app/types'
import { getPages } from '~/build-app/utils/pages-exports'
import { getName } from '~/build-app/utils/transform-name'

import { Tabs } from './tabs'

const Layout = async ({ children, params }: React.PropsWithChildren<Params>) => {
  const { id } = await params
  const pages = getPages('foundations')

  return (
    <Documentation.Layout>
      <Sidebar className="none lg:flex" menu={pages} />
      <div>
        <Text className="py-3xl" variant="h1">
          {getName(id)}
        </Text>
        <Tabs pages={pages} />
        <Documentation.Child>{children}</Documentation.Child>
      </div>
    </Documentation.Layout>
  )
}

export default Layout
