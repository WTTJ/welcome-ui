/* eslint-disable react/prop-types */
import React from 'react'

import { Header } from './Header'
import { Navigation } from './Navigation'
import { Github } from './Github'
import * as S from './Menu.styled'

export const Menu = ({ items, theme, ...rest }) => {
  return (
    <S.Menu {...rest}>
      <Header {...theme} />
      <Navigation items={items} />
      <Github />
    </S.Menu>
  )
}
