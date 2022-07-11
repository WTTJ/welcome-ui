import React, { useMemo } from 'react'
import { AlertIcon } from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { CheckIcon, InformationIcon } from '@welcome-ui/icons'
import { getVariantColor, Variant } from '@welcome-ui/utils'
import { useTheme } from 'styled-components'

export type VariantIconOptions = {
  icon?: JSX.Element
  variant?: Variant
}

export type VariantIconProps = CreateWuiProps<'div', VariantIconOptions>

export const VariantIcon = forwardRef<'div', VariantIconProps>(
  ({ icon, variant, ...rest }, ref) => {
    const theme = useTheme()
    const color = getVariantColor(variant)(theme) as string

    const Icon = useMemo(() => {
      if (icon === null) return null
      if (icon) return icon
      if (variant === 'success') return <CheckIcon />
      if (variant === 'info') return <InformationIcon />
      if (variant === 'error' || variant === 'warning') return <AlertIcon />
    }, [icon, variant])

    if (!Icon) return null

    return (
      <Box
        $alignSelf="center"
        $color={color}
        $display="inline-flex"
        $flexShrink="0"
        $mr="xxs"
        ref={ref}
        {...rest}
      >
        {Icon}
      </Box>
    )
  }
)

VariantIcon.displayName = 'VariantIcon'
