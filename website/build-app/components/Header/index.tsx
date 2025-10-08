'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'
import { Icon } from '@/components/Icon'
import { WelcomeUILogo } from '@/components/Logo'
import { Toast } from '@/components/Toast'
import { classNames } from '@/utils'

import type { PageTree } from '~/build-app/types'

import { Search } from '../Search'
import { Sidebar } from '../Sidebar'
import { VersionSelector } from '../VersionSelector'

import styles from './link.module.scss'
import { NavBar } from './NavBar'

const cx = classNames(styles)

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
    <header className={cx('header')}>
      <Toast />
      <div className="flex gap-lg h-full items-center justify-between max-w-[87.5rem] mx-auto px-md text-neutral-60">
        <div className="flex gap-lg items-center">
          <div className="shrink-0">
            <Link href="/">
              <WelcomeUILogo className="h-[40px]" />
            </Link>
          </div>
          <VersionSelector />
          <Search />
        </div>
        <Drawer.Trigger as={Button} className="lg:hidden shrink-0" size="sm" store={drawer}>
          <Icon name="menu" />
        </Drawer.Trigger>
        <NavBar className="hidden lg:flex" />
        <Drawer className="lg:hidden z-[999]" size="100%" store={drawer} withBackdrop>
          <Drawer.Content className="pt-4xl">
            <NavBar onClick={handleCloseDrawer} />
            {menu ? <Sidebar isSubPage menu={menu} onClick={handleCloseDrawer} /> : null}
          </Drawer.Content>
        </Drawer>
      </div>
    </header>
  )
}
