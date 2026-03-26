'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'
import { MenuIcon } from '@/components/Icon'
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
      <div className="nine:flex nine:gap-lg nine:h-full nine:items-center nine:justify-between nine:max-w-[87.5rem] nine:mx-auto nine:px-md nine:text-neutral-60">
        <div className="nine:flex nine:gap-lg nine:items-center">
          <div className="nine:shrink-0">
            <Link href="/">
              <WelcomeUILogo className="nine:h-[40px]" />
            </Link>
          </div>
          <VersionSelector />
          <Search />
        </div>
        <Drawer.Trigger
          as={Button}
          className="nine:lg:hidden nine:shrink-0"
          shape="circle"
          size="sm"
          store={drawer}
        >
          <MenuIcon />
        </Drawer.Trigger>
        <NavBar className="nine:hidden nine:lg:flex" />
        <Drawer className="nine:lg:hidden nine:z-[999]" size="100%" store={drawer} withBackdrop>
          <Drawer.Content className="nine:pt-4xl">
            <NavBar onClick={handleCloseDrawer} />
            {menu ? <Sidebar isSubPage menu={menu} onClick={handleCloseDrawer} /> : null}
          </Drawer.Content>
        </Drawer>
      </div>
    </header>
  )
}
