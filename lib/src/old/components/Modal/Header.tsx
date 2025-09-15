import type { ReactElement } from 'react'

import type { BoxProps } from '@old/Box'
import { forwardRef } from '@old/System'
import { Text } from '@old/Text'

import { Close } from './Close'
import * as S from './styles'

export interface HeaderOptions {
  icon?: ReactElement
  subtitle?: JSX.Element | string
  title: JSX.Element | string
}

export type HeaderProps = HeaderOptions & Omit<BoxProps, keyof HeaderOptions>

/**
 * @name Modal.Header
 */
export const Header = forwardRef<'div', HeaderProps>(({ icon, subtitle, title, ...rest }, ref) => {
  return (
    <S.Header ref={ref} textAlign={icon ? 'center' : null} w="100%" {...rest}>
      <Close isOnHeader />
      {icon}
      <Text mb={subtitle ? 'lg' : 0} mt={icon ? 'xl' : 0} variant="h4">
        {title}
      </Text>
      {subtitle ? <S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle> : null}
    </S.Header>
  )
})

Header.displayName = 'Header'
