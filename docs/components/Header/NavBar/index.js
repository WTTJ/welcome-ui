import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

export const NavBar = ({ drawerState, isMobileMenu, ...props }) => {
  const { pathname } = useRouter()
  const isBlog = pathname === '/blog'
  const isDocumentation = !isBlog && pathname !== '/'

  return (
    <S.NavBar isMobileMenu={isMobileMenu} {...props}>
      {!isMobileMenu && (
        <li>
          <NextLink href="/installation" passHref>
            <S.Item isActive={isDocumentation}>Documentation</S.Item>
          </NextLink>
        </li>
      )}
      <li>
        <NextLink href="https://github.com/WTTJ/welcome-ui" passHref>
          <S.Item rel="noopener" target="_blank">
            Github
          </S.Item>
        </NextLink>
      </li>
      <li>
        <NextLink href="/blog" passHref>
          <S.Item isActive={isBlog} onClick={isMobileMenu ? () => drawerState.hide() : undefined}>
            Blog
          </S.Item>
        </NextLink>
      </li>
      <li>
        <NextLink href="https://www.welcometothejungle.com/en/companies/wttj" passHref>
          <S.Item rel="noopener" target="_blank">
            Jobs
          </S.Item>
        </NextLink>
      </li>
    </S.NavBar>
  )
}
