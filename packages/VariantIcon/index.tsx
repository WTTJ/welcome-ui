import React, { useMemo } from 'react'
import { AlertIcon } from '@welcome-ui/icons'
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
      if (variant === 'success') return <CheckIcon />
      if (variant === 'info') return <InformationIcon />
      if (variant === 'error' || variant === 'warning') return <AlertIcon />
    }, [icon, variant])

    return Icon ? (
      <S.VariantIcon ref={ref} variant={variant} {...rest}>
        {Icon}
      </S.VariantIcon>
    ) : null
  }
)

VariantIcon.displayName = 'VariantIcon'
