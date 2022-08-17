import React from 'react'
import { Box, BoxProps } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'

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
  const { modals } = useTheme()

  return (
    <Box
      {...modals.footer}
      bottom="0"
      position={{ xs: 'fixed', md: 'relative' }}
      ref={ref}
      w="100%"
      {...rest}
    >
      {children && <Box {...modals.footer.children}>{children}</Box>}
      {informations && (
        <Box {...modals.footer.informations}>
          <Text color="dark.900" fontWeight="bold" variant="subtitle-sm">
            {informations.title}
          </Text>
          <Text color="dark.900" mb="0" mt="md" variant="sm">
            {informations.subtitle}
          </Text>
        </Box>
      )}
    </Box>
  )
})

Footer.displayName = 'Footer'
