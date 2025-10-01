import React from 'react'
import { Text } from 'welcome-ui-new/Text'
import { MenuIcon } from 'welcome-ui-new/Icon'

import * as S from './styles'

type TopNavOptions = {
  children?: React.ReactNode
  title: string | JSX.Element
}

type TopNavProps = TopNavOptions

export const TopNav: React.FC<TopNavProps> = ({ children, title, ...props }) => {
  const { isMobile, setIsExpanded } = { isMobile: true, setIsExpanded: _ => {} }

  const handleClickExpand = () => {
    setIsExpanded(true)
  }

  return (
    <S.TopNav {...props}>
      {isMobile && (
        <S.TopNavMobileSection>
          <S.MenuButton onClick={handleClickExpand}>
            <MenuIcon />
          </S.MenuButton>
          <Text className="ml-sm text-h4" variant="h5">
            {title}
          </Text>
        </S.TopNavMobileSection>
      )}
      {children && <S.TopNavList>{children}</S.TopNavList>}
    </S.TopNav>
  )
}
