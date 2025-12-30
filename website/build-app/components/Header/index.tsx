'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'
// comment the following line when you want to see all the icons locally
import { Icon, Sprite } from '@/components/Icon'
// uncomment the following line when you want to see all the icons locally
// import { Icon } from '@/components/Icon'
import { WelcomeUILogo } from '@/components/Logo'
import { Tag } from '@/components/Tag'

import type { PageTree } from '~/build-app/types'

import lib from '../../../../lib/package.json'
// uncomment the following line when you want to see all the icons locally
// import { Sprite } from '../../../../../front/src/components/wui/Sprite'
import { Search } from '../Search'
import { Sidebar } from '../Sidebar'

import { NavBar } from './NavBar'
export const navigation = ['foundations', 'components', 'blog']

type HeaderProps = {
  components: PageTree
  foundations: PageTree
}

export const Header = ({ components, foundations }: HeaderProps) => {
  const drawer = useDrawer()
  const pathname = usePathname()

  const handleCloseDrawer = () => {
    drawer.hide()
  }

  let menu
  if (pathname.startsWith('/components')) {
    menu = components
  }
  if (pathname.startsWith('/foundations')) {
    menu = foundations
  }

  return (
    <header className="sticky top-0 py-md bg-beige-10 z-999 h-70">
      <Sprite />
      <div className="flex gap-lg items-center justify-between bg-neutral-10 border-1 border-beige-30 rounded-md shadow-(--elevation-10) p-sm md:p-lg">
        <div className="flex gap-lg items-center">
          <Link className="shrink-0" href="/">
            <WelcomeUILogo className="h-25 md:h-35" />
          </Link>
          <NavBar className="hidden lg:flex" />
        </div>
        <div className="flex gap-md items-center">
          <Search />
          <Tag className="hidden md:flex" icon={<Icon name="tag-alt" />} variant="dash">
            {lib.version}
          </Tag>
        </div>
        <Drawer.Trigger as={Button} className="lg:hidden shrink-0" size="md" store={drawer}>
          <Icon name="bars" />
        </Drawer.Trigger>
        <Drawer className="lg:hidden" size="100%" store={drawer} withBackdrop>
          <Drawer.Content className="pt-4xl">
            <NavBar onClick={handleCloseDrawer} />
            {menu ? <Sidebar isSubPage menu={menu} onClick={handleCloseDrawer} /> : null}
          </Drawer.Content>
        </Drawer>
      </div>
    </header>
  )
}
