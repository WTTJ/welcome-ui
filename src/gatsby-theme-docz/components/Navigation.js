/* eslint-disable react/prop-types */
import React from 'react'

import * as S from './Navigation.styled'

export const Navigation = ({ items }) => {
  const pathname = window && window.location.pathname

  return (
    <nav>
      {items.map(item => (
        <S.Block key={`block_${item.name}`}>
          {item.menu ? (
            <>
              <S.Title>{item.name}</S.Title>
              <S.Items>
                {item.menu.map(item => (
                  <S.ItemLink
                    active={pathname === item.route}
                    key={`block_${item.name}`}
                    to={item.route}
                  >
                    <S.Item>{item.name}</S.Item>
                  </S.ItemLink>
                ))}
              </S.Items>
            </>
          ) : (
            <S.TitleLink active={pathname === item.route} to={item.route}>
              {item.name}
            </S.TitleLink>
          )}
        </S.Block>
      ))}
    </nav>
  )
}
