import React, { ReactElement } from 'react'
import { Box, BoxProps } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'

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
  const { modals } = useTheme()

  return (
    <Box
      {...modals.header}
      position={{ xs: 'fixed', md: 'relative' }}
      ref={ref}
      textAlign={icon ? 'center' : null}
      {...rest}
    >
      {icon}
      <Text mb={subtitle ? 'lg' : 0} mt={icon ? 'xl' : 0} variant="h4">
        {title}
      </Text>
      {subtitle && <Text {...modals.header.subtitle}>{subtitle}</Text>}
    </Box>
  )
})

Header.displayName = 'Header'
