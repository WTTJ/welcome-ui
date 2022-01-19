/* eslint-disable react/prop-types */
import React from 'react'
import NextLink from 'next/link'

import * as S from './styles'

export function NavBar({ isMobileMenu, ...props }) {
  return (
    <S.NavBar isMobileMenu={isMobileMenu} {...props}>
      {!isMobileMenu && (
        <li>
          <NextLink href="/" passHref>
            <S.Item className="active">Documentation</S.Item>
          </NextLink>
        </li>
      )}
      <li>
        <NextLink href="https://github.com/WTTJ/welcome-ui" passHref>
          <S.Item rel="noreferrer" target="_blank">
            Github
          </S.Item>
        </NextLink>
      </li>
      <li>
        <NextLink href="https://www.welcometothejungle.com/en/companies/wttj" passHref>
          <S.Item rel="noreferrer" target="_blank">
            Jobs
          </S.Item>
        </NextLink>
      </li>
    </S.NavBar>
  )
}
