/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'

import * as S from './Navigation.styled'

export const Navigation = ({ items, mobile }) => {
  const pathname = typeof window === 'undefined' ? undefined : window.location.pathname
  const activeRef = useRef(null)

  useEffect(() => {
    const activeRefElement = activeRef.current

    if (activeRefElement) {
      if (activeRefElement.offsetTop + 100 > window.innerHeight) {
        activeRefElement.scrollIntoView({ block: 'center' })
      }
    }
  }, [activeRef, pathname])

  return (
    <nav>
      {items.map(item => (
        <S.Block key={`block_${item.name}`}>
          {item.menu ? (
            <>
              <S.Title mobile={mobile}>{item.name}</S.Title>
              <S.Items>
                {item.menu.map(item => {
                  const isActiveRoute = pathname === item.route

                  return (
                    <S.ItemLink
                      isActive={isActiveRoute}
                      key={`block_${item.name}`}
                      ref={isActiveRoute ? activeRef : undefined}
                      to={item.route}
                    >
                      <S.Item mobile={mobile}>{item.name}</S.Item>
                    </S.ItemLink>
                  )
                })}
              </S.Items>
            </>
          ) : (
            <S.TitleLink isActive={pathname === item.route} mobile={mobile} to={item.route}>
              {item.name}
            </S.TitleLink>
          )}
        </S.Block>
      ))}
    </nav>
  )
}
