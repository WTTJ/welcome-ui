import React, { useMemo } from 'react'
import { AlertIcon } from '@welcome-ui/icons.alert'
import { CreateWuiProps } from '@welcome-ui/system'
import { CheckIcon } from '@welcome-ui/icons.check'
import { InformationIcon } from '@welcome-ui/icons.information'

import * as S from './styles'

export type Variant = 'info' | 'success' | 'warning' | 'error'

export interface VariantIconOptions {
  icon?: JSX.Element
  variant?: Variant
}

export type VariantIconProps = CreateWuiProps<'div', VariantIconOptions>

export const VariantIcon: React.FC<VariantIconProps> = ({ icon, variant, ...rest }) => {
  const Icon = useMemo(() => {
    if (icon === null) return null
    if (icon) return icon
    if (variant === 'success') return <CheckIcon />
    if (variant === 'info') return <InformationIcon />
    if (variant === 'error' || variant === 'warning') return <AlertIcon />
  }, [icon, variant])

  return Icon ? (
    <S.VariantIcon variant={variant} {...rest}>
      {Icon}
    </S.VariantIcon>
  ) : null
}

VariantIcon.displayName = 'VariantIcon'
