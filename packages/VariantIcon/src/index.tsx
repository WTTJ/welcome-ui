import React, { useMemo } from 'react'
import {
  AlertIcon,
  AlertIconPanda,
  InformationIcon,
  InformationIconPanda,
  PromoteIcon,
  PromoteIconPanda,
  SquareAlertIcon,
  SquareAlertIconPanda,
  SuccessIcon,
  SuccessIconPanda,
} from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Variant as VariantFromUtils } from '@welcome-ui/utils'
import type { RecipeVariantProps } from '@welcome-ui/panda/css'
import type { HTMLStyledProps } from '@welcome-ui/panda/jsx'

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

type IconProps = React.ComponentProps<typeof AlertIconPanda>

export type VariantIconPandaVariants = RecipeVariantProps<typeof S.variantIconStyles>
export type VariantIconPandaOptions = VariantIconPandaVariants &
  Pick<IconProps, 'size'> & { icon?: JSX.Element }
export type VariantIconPandaProps = HTMLStyledProps<'div'> & VariantIconPandaOptions

export const VariantIconPanda = React.forwardRef<HTMLDivElement, VariantIconPandaProps>(
  ({ icon, size = 'md', variant, ...rest }, ref) => {
    const Icon = useMemo(() => {
      if (icon === null) return null
      if (icon) return icon

      if (variant === 'default') return <PromoteIconPanda size={size} />
      if (variant === 'success') return <SuccessIconPanda size={size} />
      if (variant === 'info') return <InformationIconPanda size={size} />
      if (variant === 'warning') return <AlertIconPanda size={size} />
      if (variant === 'error') return <SquareAlertIconPanda size={size} />
    }, [size, icon, variant])

    if (Icon) {
      return (
        <S.VariantIconPanda ref={ref} variant={variant} {...rest}>
          {Icon}
        </S.VariantIconPanda>
      )
    }
  }
)
