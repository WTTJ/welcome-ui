import React from 'react'
import { MenuIcon } from 'welcome-ui-new/Icon'
import { Text } from 'welcome-ui-new/Text'

import * as S from './styles'

type TopNavOptions = {
  children?: React.ReactNode
  title: JSX.Element | string
}

type TopNavProps = TopNavOptions

export const TopNav: React.FC<TopNavProps> = ({ children, title, ...props }) => {
  const { isMobile, setIsExpanded } = { isMobile: true, setIsExpanded: _ => {} }

  const handleClickExpand = () => {
    setIsExpanded(true)
  }

  return (
    <S.TopNav {...props}>
      {isMobile ? (
        <S.TopNavMobileSection>
          <S.MenuButton onClick={handleClickExpand}>
            <MenuIcon />
          </S.MenuButton>
          <Text className="ml-sm text-h4" variant="h5">
            {title}
          </Text>
        </S.TopNavMobileSection>
      ) : null}
      {children ? <S.TopNavList>{children}</S.TopNavList> : null}
    </S.TopNav>
  )
}
