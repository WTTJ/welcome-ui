import React, { ReactElement } from 'react'
import { BoxProps } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface HeaderOptions {
  title: string | JSX.Element
  subtitle?: string | JSX.Element
  icon?: ReactElement
}

export type HeaderProps = HeaderOptions & Omit<BoxProps, keyof HeaderOptions>

/**
 * @name Modal.Header
 */
export const Header = forwardRef<'div', HeaderProps>(({ icon, subtitle, title, ...rest }, ref) => {
  return (
    <S.Header ref={ref} textAlign={icon ? 'center' : null} w="100%" {...rest}>
      {icon}
      <Text mb={subtitle ? 'lg' : 0} mt={icon ? 'xl' : 0} variant="h4">
        {title}
      </Text>
      {subtitle && <S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle>}
    </S.Header>
  )
})

Header.displayName = 'Header'
