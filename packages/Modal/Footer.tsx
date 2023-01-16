import React from 'react'
import { BoxProps } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface FooterOptions {
  informations?: {
    title: string
    subtitle: string
  }
}

export type FooterProps = FooterOptions & BoxProps

/**
 * @name Modal.Footer
 */
export const Footer = forwardRef<'div', FooterProps>(({ children, informations, ...rest }, ref) => {
  return (
    <S.Footer ref={ref} w="100%" {...rest}>
      {children && <S.FooterChildrenWrapper>{children}</S.FooterChildrenWrapper>}
      {informations && (
        <S.FooterInformations>
          <Text color="dark-900" fontWeight="bold" variant="subtitle-sm">
            {informations.title}
          </Text>
          <Text color="dark-900" mb="0" mt="md" variant="sm">
            {informations.subtitle}
          </Text>
        </S.FooterInformations>
      )}
    </S.Footer>
  )
})

Footer.displayName = 'Footer'
