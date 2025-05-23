import type { BoxProps } from '@/Box'
import { forwardRef } from '@/System'
import { Text } from '@/Text'

import * as S from './styles'

export interface FooterOptions {
  information?: {
    subtitle: string
    title: string
  }
}

export type FooterProps = BoxProps & FooterOptions

/**
 * @name Modal.Footer
 */
export const Footer = forwardRef<'div', FooterProps>(({ children, information, ...rest }, ref) => {
  return (
    <S.Footer ref={ref} w="100%" {...rest}>
      {children ? <S.FooterChildrenWrapper>{children}</S.FooterChildrenWrapper> : null}
      {information ? (
        <S.FooterInformation>
          <Text color="neutral-90" fontWeight="bold" variant="subtitle-sm">
            {information.title}
          </Text>
          <Text color="neutral-90" mb="0" mt="md" variant="sm">
            {information.subtitle}
          </Text>
        </S.FooterInformation>
      ) : null}
    </S.Footer>
  )
})

Footer.displayName = 'Footer'
