import React from 'react'
import { BoxProps } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface FooterOptions {
  information?: {
    title: string
    subtitle: string
  }
}

export type FooterProps = FooterOptions & BoxProps

/**
 * @name Modal.Footer
 */
export const Footer = forwardRef<'div', FooterProps>(({ children, information, ...rest }, ref) => {
  return (
    <S.Footer ref={ref} w="100%" {...rest}>
      {children && <S.FooterChildrenWrapper>{children}</S.FooterChildrenWrapper>}
      {information && (
        <S.FooterInformation>
          <Text color="neutral-black" fontWeight="bold" variant="subtitle-sm">
            {information.title}
          </Text>
          <Text color="neutral-black" mb="0" mt="md" variant="sm">
            {information.subtitle}
          </Text>
        </S.FooterInformation>
      )}
    </S.Footer>
  )
})

Footer.displayName = 'Footer'
