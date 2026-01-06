import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

import { Icon } from '@/components/Icon'
import { useTab } from '@/components/Tabs'
import { Tabs } from '@/components/Tabs'

import { navigation } from '.'

type NavBarProps = {
  className?: string
  onClick?: () => void
}

export const NavBar = ({ className, onClick }: NavBarProps) => {
  const currentRoute = usePathname()
  const tab = useTab({ defaultSelectedId: currentRoute?.split('/')[1] || '' })

  useEffect(() => {
    tab.setSelectedId(currentRoute?.split('/')[1] || '')
  }, [currentRoute, tab])

  return (
    <div className={`flex gap-xl items-center lg:h-full ${className || ''}`}>
      <nav className="lg:h-full">
        <Tabs aria-label="Main navigation" className="flex-wrap" store={tab}>
          {navigation.map(item => (
            <Tabs.Tab
              as="a"
              href={`/${item}`}
              id={item}
              key={`header_navigation_${item}`}
              onClick={onClick}
              store={tab}
            >
              {item.toUpperCase()}
            </Tabs.Tab>
          ))}
          <Tabs.Tab
            as="a"
            href="https://github.com/WTTJ/welcome-ui"
            icon={<Icon name="github" />}
            id="github"
            rel="noreferrer noopener"
            store={tab}
            target="_blank"
          >
            650+
          </Tabs.Tab>
        </Tabs>
      </nav>
    </div>
  )
}
