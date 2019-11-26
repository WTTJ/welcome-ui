/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'

import * as S from './Navigation.styled'

export const Navigation = ({ items }) => {
  const pathname = typeof window === 'undefined' ? undefined : window.location.pathname
  const activeRef = useRef(null)
  const navRef = useRef()

  useEffect(() => {
    const activeRefElement = activeRef.current
    const navRefElement = navRef.current

    if (activeRefElement && navRefElement) {
      if (activeRefElement.offsetTop - navRefElement.scrollTop > navRefElement.clientHeight) {
        activeRefElement.scrollIntoView()
      }
    }
  }, [activeRef, pathname, navRef])

  return (
    <nav ref={navRef}>
      {items.map(item => (
        <S.Block key={`block_${item.name}`}>
          {item.menu ? (
            <>
              <S.Title>{item.name}</S.Title>
              <S.Items>
                {item.menu.map(item => {
                  const isActiveRoute = pathname && pathname.indexOf(item.route) !== -1

                  return (
                    <S.ItemLink
                      active={isActiveRoute}
                      key={`block_${item.name}`}
                      ref={isActiveRoute ? activeRef : undefined}
                      to={item.route}
                    >
                      <S.Item>{item.name}</S.Item>
                    </S.ItemLink>
                  )
                })}
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
