/* eslint-disable react/prop-types */
import React, { useRef } from 'react'

import { Header } from './Header'
import { Navigation } from './Navigation'
import { Github } from './Github'
import * as S from './Menu.styled'

export const Menu = ({ items, theme, ...rest }) => {
  const menuRef = useRef()

  return (
    <S.Menu ref={menuRef} {...rest}>
      <Header {...theme} />
      <Navigation items={items} menuRef={menuRef && menuRef.current} />
      <Github />
    </S.Menu>
  )
}
