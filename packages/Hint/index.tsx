import React from 'react'
import { useTheme } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { getVariantColor, Variant } from '@welcome-ui/utils'

export type HintOptions = {
  checkableField?: boolean
  variant?: Variant
}

export type HintProps = CreateWuiProps<'div', HintOptions>

export const Hint = forwardRef<'div', HintProps>(
  ({ checkableField, children, dataTestId, variant, ...rest }, ref) => {
    const theme = useTheme()
    const color = getVariantColor(variant)(theme) as string

    return (
      <Box
        $alignItems="center"
        $color={color}
        $display="flex"
        $fontSize="xs"
        $fontWeight="regular"
        $mt="sm"
        data-testid={dataTestId}
        ref={ref}
        {...rest}
      >
        {checkableField && <VariantIcon variant={variant} />}
        {children}
      </Box>
    )
  }
)

Hint.displayName = 'Hint'
