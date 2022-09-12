import React, { useMemo } from 'react'
import { AlertIcon, PromoteIcon, SquareAlertIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { CheckIcon, InformationIcon } from '@welcome-ui/icons'
import { Variant } from '@welcome-ui/utils'

import * as S from './styles'

export interface VariantIconOptions {
  icon?: JSX.Element
  variant?: Variant
}

export type VariantIconProps = CreateWuiProps<'div', VariantIconOptions>

export const VariantIcon = forwardRef<'div', VariantIconProps>(
  ({ icon, variant, ...rest }, ref) => {
    const Icon = useMemo(() => {
      if (icon === null) return null
      if (icon) return icon
      if (variant === 'default') return <PromoteIcon />
      if (variant === 'success') return <CheckIcon />
      if (variant === 'info') return <InformationIcon />
      if (variant === 'warning') return <AlertIcon />
      if (variant === 'error') return <SquareAlertIcon />
    }, [icon, variant])

    return Icon ? (
      <S.VariantIcon ref={ref} variant={variant} {...rest}>
        {Icon}
      </S.VariantIcon>
    ) : null
  }
)

VariantIcon.displayName = 'VariantIcon'
