import React, { useMemo } from 'react'
import {
  AlertIcon,
  CheckIcon,
  InformationIcon,
  PromoteIcon,
  SquareAlertIcon,
} from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Variant = 'danger' | 'warning' | 'success' | 'info'

export interface VariantIconOptions {
  icon?: JSX.Element
  size?: Size
  variant?: Variant
}

export type VariantIconProps = CreateWuiProps<'div', VariantIconOptions>

export const VariantIcon = forwardRef<'div', VariantIconProps>(
  ({ icon, size = 'md', variant = 'default', ...rest }, ref) => {
    const Icon = useMemo(() => {
      if (icon === null) return null
      if (icon) return icon

      if (variant === 'success') return <CheckIcon size={size} />
      if (variant === 'info') return <InformationIcon size={size} />
      if (variant === 'warning') return <AlertIcon size={size} />
      if (variant === 'danger') return <SquareAlertIcon size={size} />

      return <PromoteIcon size={size} />
    }, [size, icon, variant])

    return Icon ? (
      <S.VariantIcon ref={ref} variant={variant} {...rest}>
        {Icon}
      </S.VariantIcon>
    ) : null
  }
)

VariantIcon.displayName = 'VariantIcon'
