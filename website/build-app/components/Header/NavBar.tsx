import { usePathname } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from './link.module.scss'

import { navigation } from '.'

const cx = classNames(styles)

type NavBarProps = {
  className?: string
  onClick?: () => void
}

export const NavBar = ({ className, onClick }: NavBarProps) => {
  const currentRoute = usePathname()

  return (
    <div className={`flex gap-xl items-center lg:h-full ${className}`}>
      <nav className="lg:h-full">
        <ul aria-label="Main navigation" className="flex gap-xxl lg:h-full">
          {navigation.map(item => (
            <li key={`header_navigation_${item}`}>
              <Text
                aria-current={currentRoute.startsWith(`/${item}`) ? 'page' : undefined}
                as="a"
                className={cx('link')}
                href={`/${item}`}
                onClick={onClick}
                variant="subtitle-md"
              >
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        aria-label="Github"
        as="a"
        href="https://github.com/WTTJ/welcome-ui"
        rel="noreferrer noopener"
        shape="circle"
        size="sm"
        target="_blank"
        variant="ghost"
      >
        <Icon name="github" />
      </Button>
    </div>
  )
}
