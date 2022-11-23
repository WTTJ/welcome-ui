import React, { ReactElement } from 'react'
import { BoxProps } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface HeaderOptions {
  title: string
  subtitle?: string
  icon?: ReactElement
}

export type HeaderProps = HeaderOptions & BoxProps

/**
 * @name Modal.Header
 */
export const Header = forwardRef<'div', HeaderProps>(({ icon, subtitle, title, ...rest }, ref) => {
  return (
    <S.Header
      $position={{ xs: 'fixed', md: 'relative' }}
      $textAlign={icon ? 'center' : null}
      ref={ref}
      {...rest}
    >
      {icon}
      <Text $mb={subtitle ? 'lg' : '0'} $mt={icon ? 'xl' : '0'} variant="h4">
        {title}
      </Text>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Header>
  )
})

Header.displayName = 'Header'
