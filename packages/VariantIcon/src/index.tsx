import React, { useMemo } from 'react'
import {
  AlertIcon,
  InformationIcon,
  PromoteIcon,
  SquareAlertIcon,
  SuccessIcon,
} from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Variant as VariantFromUtils } from '@welcome-ui/utils'

import * as S from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type Variant = VariantFromUtils | 'default'

export interface VariantIconOptions {
  icon?: JSX.Element
  size?: Size
  variant?: Variant
}

export type VariantIconProps = CreateWuiProps<'div', VariantIconOptions>

export const VariantIcon = forwardRef<'div', VariantIconProps>(
  ({ icon, size = 'md', variant, ...rest }, ref) => {
    const Icon = useMemo(() => {
      if (icon === null) return null
      if (icon) return icon

      if (variant === 'default') return <PromoteIcon size={size} />
      if (variant === 'success') return <SuccessIcon size={size} />
      if (variant === 'info') return <InformationIcon size={size} />
      if (variant === 'warning') return <AlertIcon size={size} />
      if (variant === 'error') return <SquareAlertIcon size={size} />
    }, [size, icon, variant])

    return Icon ? (
      <S.VariantIcon ref={ref} variant={variant} {...rest}>
        {Icon}
      </S.VariantIcon>
    ) : null
  }
)

VariantIcon.displayName = 'VariantIcon'
